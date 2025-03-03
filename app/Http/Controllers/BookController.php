<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    public function create(Request $request)
    {
        $authors = Author::all();
        $categories = Category::with('children')->whereNull('parent_id')->get();
    
        // Fetch the breadcrumb if category_id is provided
        $breadcrumb = [];
        if ($request->has('category_id')) {
            $category = Category::find($request->query('category_id'));
            if ($category) {
                $breadcrumb = $this->getBreadcrumb($category);
            }
        }
    
        return inertia('Books/Create', [
            'authors' => $authors,
            'categories' => $categories,
            'query' => $request->query(), // Pass query parameters to the frontend
            'breadcrumb' => $breadcrumb, // Pass the breadcrumb to the frontend
        ]);
    }
    
    // Helper function to get the breadcrumb for a category
    private function getBreadcrumb(Category $category)
    {
        $breadcrumb = [];
        $current = $category;
    
        // Traverse up the category hierarchy
        while ($current) {
            array_unshift($breadcrumb, [
                'id' => $current->id,
                'name' => $current->name,
            ]);
            $current = $current->parent;
        }
    
        return $breadcrumb;
    }
    // public function edit(Book $book)
    // {
    //     $categories = Category::with('children')->whereNull('parent_id')->get(); // Fetch only top-level categories
    //     $authors = Author::all();
    
    //     return Inertia::render('Books/Edit', [
    //         'book' => $book,
    //         'categories' => $categories,
    //         'authors' => $authors,
    //     ]);
    // }




    // Store a new book and an optional initial review
public function store(Request $request)
{
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'author_id' => 'required|exists:authors,id',
        'category_id' => 'required|exists:categories,id',
        'description' => 'nullable|string',
        'isbn' => 'nullable|string|max:20',
        'publication_date' => 'nullable|date',
        'cover_image' => 'nullable|image|max:2048', // Limit file size to 2MB
        'publisher' => 'nullable|string|max:255',
        'researcher' => 'nullable|string|max:255',
        'link_to_website' => 'nullable|url|max:255',
        'page_number' => 'nullable|integer|min:1',
        'status' => 'nullable|string|in:post,draft,pending',
        'comment' => 'nullable|string',
        'reviewer' => 'nullable|string|max:255',
    ]);

    // Handle file upload if there's a cover image
    if ($request->hasFile('cover_image')) {
        $filePath = $request->file('cover_image')->store('cover_images', 'public');
        $validatedData['cover_image'] = $filePath;
    }

    // Create the book
    $book = Book::create([
        'title' => $validatedData['title'],
        'author_id' => $validatedData['author_id'],
        'category_id' => $validatedData['category_id'],
        'description' => $validatedData['description'] ?? null,
        'isbn' => $validatedData['isbn'] ?? null,
        'publication_date' => $validatedData['publication_date'] ?? null,
        'cover_image' => $validatedData['cover_image'] ?? null,
        'publisher' => $validatedData['publisher'] ?? null,
        'researcher' => $validatedData['researcher'] ?? null,
        'link_to_website' => $validatedData['link_to_website'] ?? null,
        'page_number' => $validatedData['page_number'] ?? null,
        'status' => $validatedData['status'] ?? 'draft',
    ]);

    // If a comment and reviewer are provided, create an initial review
    if (!empty($validatedData['comment']) && !empty($validatedData['reviewer'])) {
        $book->reviews()->create([
            'comment' => $validatedData['comment'],
            'reviewer' => $validatedData['reviewer'],
        ]);
    }

    return redirect()->route('books.index')->with('success', 'Book and review added successfully');
}

public function index(Request $request)
{
    $query = Book::with('author', 'category');

    // Search by title, author, or category
    if ($request->has('search') && $request->search !== '') {
        $searchTerm = $request->search;
        $query->where('title', 'LIKE', "%{$searchTerm}%")
              ->orWhereHas('author', function ($q) use ($searchTerm) {
                  $q->where('name', 'LIKE', "%{$searchTerm}%");
              })
              ->orWhereHas('category', function ($q) use ($searchTerm) {
                  $q->where('name', 'LIKE', "%{$searchTerm}%");
              });
    }

    $books = $query->get();
    $authors = Author::all();
    $categories = Category::all();

    return Inertia::render('Books/Index', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,
        'search' => $request->search ?? '',
    ]);
}
public function storage(Request $request)
{
    $search = $request->input('search'); // Get the search query
    $user = Auth::user(); // Get the authenticated user
    
    // Base query for books sorted by latest
    $query = Book::with('author', 'category')
        ->orderBy('created_at', 'desc')
        ->limit(20);

    // If user is authenticated and admin, show all books (post and pending)
    if ($user && $user->role === 'admin') {
        $query->whereIn('status', ['post', 'pending']);
    } else {
        // For non-admins or unauthenticated users, only show posted books
        $query->where('status', 'post');
    }

    // Apply search filter if present
    $books = $query->when($search, function ($query, $search) {
        return $query->where('title', 'like', "%{$search}%")
            ->orWhereHas('author', function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->orWhereHas('category', function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%");
            });
    })->get();

    $authors = Author::all();

      // Fetch only parent categories with books count (adjusted for user role)
      $categories = Category::withCount(['books' => function ($query) use ($user) {
        if ($user && $user->role === 'admin') {
            $query->whereIn('status', ['post', 'pending']);
        } else {
            $query->where('status', 'post');
        }
    }])->whereNull('parent_id')->get();

    // Total number of books (adjust based on user role)
    $totalBooks = ($user && $user->role === 'admin') 
        ? Book::whereIn('status', ['post', 'pending'])->count()
        : Book::where('status', 'post')->count();

    return Inertia::render('store/Index', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,
        'search' => $search,
        'totalBooks' => $totalBooks,
    ]);
}


public function tag(Category $category)
{
    $user = Auth::user(); // Get the authenticated user

    // Load the category with its books and subcategories, applying status filter
    $category->load([
        'books' => function ($query) use ($user) {
            if ($user && $user->role === 'admin') {
                $query->whereIn('status', ['post', 'pending']);
            } else {
                $query->where('status', 'post');
            }
        },
        'children'
    ]);

  


      // Fetch only parent categories with books count (adjusted for user role)
      $categories = Category::withCount(['books' => function ($query) use ($user) {
        if ($user && $user->role === 'admin') {
            $query->whereIn('status', ['post', 'pending']);
        } else {
            $query->where('status', 'post');
        }
    }])->whereNull('parent_id')->get();

    // Fetch subcategories of the current category
    $subcategories = $category->children;

    return Inertia::render('store/Tag', [
        'category' => $category,
        'categories' => $categories,
        'subcategories' => $subcategories, // Pass subcategories to the frontend
        'books' => $category->books, // Pass books explicitly to match your frontend
    ]);
}

    // Show a specific book and its reviews
    public function show($id)
    {
        $book = Book::with(['author', 'category', 'reviews'])->findOrFail($id);

        return inertia('Books/Show', [
            'book' => $book,
        ]);
    }

    // Show a specific book and its reviews
    public function storagedetail($id)
    {
        $book = Book::with(['author', 'category', 'reviews'])->findOrFail($id);
        $user = Auth::user(); // Get the authenticated user

        
      // Fetch only parent categories with books count (adjusted for user role)
      $categories = Category::withCount(['books' => function ($query) use ($user) {
        if ($user && $user->role === 'admin') {
            $query->whereIn('status', ['post', 'pending']);
        } else {
            $query->where('status', 'post');
        }
    }])->whereNull('parent_id')->get();

        // $categories = Category::withCount(['books' => function ($query) {
        //     $query->where('status', 'post');
        // }])->whereNull('parent_id')->get();


        return inertia('store/Show', [
            'book' => $book,
            'categories'=>$categories,
        ]);
    }

    // Show the form for editing the specified book
     public function edit(Book $book)
    {
        $categories = Category::all();
        $authors = Author::all();

        // Return an Inertia response instead of a Blade view
        return Inertia::render('Books/Edit', [
            'book' => $book,
            'categories' => $categories,
            'authors' => $authors,
        ]);
    }


    public function update(Request $request, Book $book)
    {
        // Validate input, including the new fields
        $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|exists:authors,id',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'isbn' => 'nullable|string',
            'publication_date' => 'nullable|date',
            'publisher' => 'nullable|string|max:255', // Validate publisher field
            'researcher' => 'nullable|string|max:255', // Validate researcher field
            'link_to_website' => 'nullable|url', // Validate link to website field
            'page_number' => 'nullable|integer', // Validate page number field
            'status' => 'nullable|string|in:post,draft,pending', // Validate status field (post or draft)
            'cover_image' => 'nullable|image|max:2048', // Validate cover image
        ]);
    
        // Prepare validated data for updating
        $validatedData = $request->only([
            'title',
            'author_id',
            'category_id',
            'description',
            'isbn',
            'publication_date',
            'publisher',   // Added publisher
            'researcher',  // Added researcher
            'link_to_website', // Added link_to_website
            'page_number',  // Added page_number
            'status',       // Added status
        ]);
    
        // Handle cover image upload if a new image is provided
        if ($request->hasFile('cover_image')) {
            // Store the new cover image and update the book's image path
            $coverPath = $request->file('cover_image')->store('covers', 'public');
            $validatedData['cover_image'] = $coverPath;
    
            // Optional: delete the old cover image if it exists
            if ($book->cover_image) {
                Storage::disk('public')->delete($book->cover_image);
            }
        }
    
        // Update the book with the new data
        $book->update($validatedData);
    
        // Redirect back with a success message
        return redirect()->back()->with('success', 'Book updated successfully.');
    }
    



  // Remove the specified book from storage
    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('books.index')->with('success', 'Book deleted successfully.');
    }
}