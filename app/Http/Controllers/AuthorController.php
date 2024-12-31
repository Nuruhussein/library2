<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller
{
    // Display a list of all authors
    public function index()
    {
     $authors = Author::withCount('books')->get();
        return Inertia::render('Authors/Index', ['authors' => $authors]);
    }

    // Show the form for creating a new author
    public function create()
    {
        return Inertia::render('Authors/Create');
    }

    // Store a newly created author in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
        ]);

        Author::create($request->only('name', 'bio'));
        return redirect()->route('authors.index');
    }

    // Display a single author's details
    public function show(Author $author)
    {
        $author->load('books'); // Assuming each author has related books
        return Inertia::render('Authors/Show', ['author' => $author]);
    }
}
