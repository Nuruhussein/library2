<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch only parent categories (where parent_id is null)
        $categories = Category::whereNull('parent_id')->get();
    
        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }
      
    

    public function create()
    {
        // Get the parent_id from the query parameter
        $parent_id = request()->query('parent_id');
    
        // Fetch the breadcrumb if parent_id is provided
        $breadcrumb = [];
        if ($parent_id) {
            $parentCategory = Category::find($parent_id);
            if ($parentCategory) {
                $breadcrumb = $this->getBreadcrumb($parentCategory);
            }
        }
    
        return Inertia::render('Categories/Create', [
            'parent_id' => $parent_id, // Pass parent_id to the frontend
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

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'parent_id' => 'nullable|exists:categories,id', // Validate parent_id
        ]);
    
        // Handle image upload
        if ($request->hasFile('image')) {
            $validatedData['image'] = $request->file('image')->store('category_images', 'public');
        }
    
        Category::create($validatedData);
    
        return redirect()->route('admin.categories.index')->with('success', 'Category created successfully.');
    }

    public function show(Category $category)
    {
        // Recursively load all subcategories and their books
        $this->loadSubcategoriesBooks($category);
    
        // Flatten the books from all subcategories into the parent category
        $category->all_books = $this->getAllBooks($category);
        // Get the breadcrumb (category hierarchy)
        $category->breadcrumb = $this->getBreadcrumb($category);
        return Inertia::render('Categories/Show', [
            'category' => $category,
        ]);
    }
    

    private function loadSubcategoriesBooks(Category $category)
    {
        // Load the immediate children and their books
        $category->load('children.books');
    
        // For each child, recursively load its children and their books
        foreach ($category->children as $child) {
            $this->loadSubcategoriesBooks($child);
        }
    }
    
    private function getAllBooks(Category $category)
    {
        $books = $category->books;
    
        // Recursively collect books from all subcategories
        foreach ($category->children as $child) {
            $books = $books->merge($this->getAllBooks($child));
        }
    
        return $books;
    }
 
    


  // Display a single category's details ب
  public function showeach(Category $category)
  {
      // Eager load the 'books' and 'children' relationships
      $category->load('books', 'children');
      $categories = Category::withCount('books')->get(); // Fetch categories with the count of books
  
      return Inertia::render('Category/Show', [
          'category' => $category,
          'categories' => $categories,
      ]);
  }
  
  public function edit(Category $category)
  {
      // Get the breadcrumb for the category
      $breadcrumb = $this->getBreadcrumb($category);
  
      return Inertia::render('Categories/Edit', [
          'category' => $category,
          'parent_id' => $category->parent_id, // Pass parent_id to the frontend
          'breadcrumb' => $breadcrumb, // Pass the breadcrumb to the frontend
      ]);
  }
    public function update(Request $request, Category $category)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'parent_id' => 'nullable|exists:categories,id', // Validate parent_id
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
        // Start the query with books count and filter for parent categories
        $query = Category::withCount('books')
            ->whereNull('parent_id')
            ->with('children');
    
        // Apply search filter if provided
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
    
        // Fetch the filtered categories
        $categories = $query->get();
    
        return Inertia::render('Categories/Indexclient', [
            'categories' => $categories,
            'filters' => $request->only(['search']),
        ]);
    }
}
