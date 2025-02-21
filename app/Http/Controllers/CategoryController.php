<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryController extends Controller
{
    // Display a list of all categories
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Index', ['categories' => $categories]);
    }
  
      
    

    // Show the form for creating a new category
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    // Store a newly created category in the database
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // Image validation (2MB max size)
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $validatedData['image'] = $request->file('image')->store('category_images', 'public');
        }

        Category::create($validatedData);

        return redirect()->route('admin.categories.index')->with('success', 'Category created successfully.');
    }

  // Display a single category's details
public function show(Category $category)
{
    // Eager load the 'books' relationship
    $category->load('books');

    return Inertia::render('Categories/Show', ['category' => $category]);
}
  // Display a single category's details ب
  public function showeach(Category $category)
  {
      // Eager load the 'books' relationship
      $category->load('books');
      $categories = Category::withCount('books')->get(); // Fetch categories with the count of books

  
      return Inertia::render('Category/Show', ['category' => $category
    ,'categories'=>$categories,]);
  }
  
    // Show the form for editing the specified category
    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', ['category' => $category]);
    }

    // Update the specified category in the database
    public function update(Request $request, Category $category)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // Validate image file
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $newImagePath = $request->file('image')->store('category_images', 'public');

            // Delete the old image if it exists
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }

            $validatedData['image'] = $newImagePath;
        }

        $category->update($validatedData);

        return redirect()->route('admin.categories.index')->with('success', 'Category updated successfully.');
    }

    // Remove the specified category from storage
    public function destroy(Category $category)
    {
        // Delete the associated image file if it exists
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }

        $category->delete();

        return redirect()->route('admin.categories.index')->with('success', 'Category deleted successfully.');
    }
    
    // // Display a list of all categories
    // public function clientcategory()
    // {
    //     $categories = Category::all();
    //     return Inertia::render('Categories/Indexclient', ['categories' => $categories]);
    // }
 
public function clientcategory(Request $request)
{
    // Start the query with books count
    $query = Category::withCount('books');

    // Apply search filter if provided
    if ($request->has('search')) {
        $query->where('name', 'like', '%' . $request->search . '%');
    }

    // Fetch the filtered categories
    $categories = $query->get();

    // Render the Inertia view with categories and filters
    return Inertia::render('Categories/Indexclient', [
        'categories' => $categories,
        'filters' => $request->only(['search']), // Pass search query back to frontend
    ]);
}
}
