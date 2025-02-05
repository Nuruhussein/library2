<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
class AuthorController extends Controller
{

    public function index()
    {
     $authors = Author::withCount('books')->get();
        return Inertia::render('Authors/Index', ['authors' => $authors]);
    }
  
 
    public function create()
    {
        return Inertia::render('Authors/Create');
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
        ]);

        Author::create($request->only('name', 'bio'));
        return redirect()->route('authors.index');
    }
    
    public function update(Request $request, Author $author)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
        ]);

        $author->update($request->only('name', 'bio'));
        return redirect()->route('authors.index')->with('success', 'Author updated successfully!');
    }


    public function destroy(Author $author)
    {
        $author->delete();
        return redirect()->route('authors.index')->with('success', 'Author deleted successfully!');
    }


    public function show(Author $author)
    {
        $author->load('books');
        return Inertia::render('Authors/Show', ['author' => $author]);
    }
      
    public function indexclient(Request $request)
    {
        $query = Author::withCount('books');
    
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
    
        $authors = $query->get();
    
        return Inertia::render('Authors/Indexclient', [
            'authors' => $authors,
            'filters' => $request->only(['search']), // Pass search query back to frontend
        ]);
    }

    public function showclient(Author $author)
    {
        $author->load('books');
      
        $categories = Category::withCount('books')->get();

        return Inertia::render('Authors/Showclient', [
            'author' => $author,
            'categories' => $categories,]);
    }
   
}
