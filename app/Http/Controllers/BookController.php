<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class BookController extends Controller
{
    // Show the form to create a new book
    public function create()
    {
        $authors = Author::all();
        $categories = Category::all();

        return inertia('Books/Create', [
            'authors' => $authors,
            'categories' => $categories,
        ]);
    }




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
        'status' => 'nullable|string|in:post,draft',
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
    $books = Book::with('author', 'category')
        ->when($search, function ($query, $search) {
            return $query->where('title', 'like', "%{$search}%")
                         ->orWhereHas('author', function ($query) use ($search) {
                             $query->where('name', 'like', "%{$search}%");
                         })
                         ->orWhereHas('category', function ($query) use ($search) {
                             $query->where('name', 'like', "%{$search}%");
                         });
        })
        ->get(); // Fetch books with filtering if search query exists

    $authors = Author::all();
    $categories = Category::withCount('books')->get();

    return Inertia::render('store/Index', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,
        'search' => $search, // Pass the search query back to the frontend
    ]);
}


public function tag(Category $category)
{
      // Eager load the 'books' relationship
      $category->load('books');
      $categories = Category::withCount('books')->get(); // Fetch categories with the count of books
      $authors = Author::all();
  
      return Inertia::render('store/Tag', ['category' => $category
    ,'categories'=>$categories,]);

   

    // return Inertia::render('store/Index', [
    //     'books' => $books,
    //     'authors' => $authors,
    //     'categories' => $categories,
    //     'search' => $search, // Pass the search query back to the frontend
    // ]);
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
        $categories = Category::withCount('books')->get(); // Fetch categories with the count of books

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
            'status' => 'nullable|string|in:post,draft', // Validate status field (post or draft)
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