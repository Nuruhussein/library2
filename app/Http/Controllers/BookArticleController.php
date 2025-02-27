<?php

namespace App\Http\Controllers;

use App\Models\BookArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookArticleController extends Controller
{
    // Display all book articles
    public function index()
    {
        $bookArticles = BookArticle::all();
        return Inertia::render('BookArticles/Index', ['bookArticles' => $bookArticles]);
    }

    // Display all book articles for clients
    public function indexclient()
    {
        $bookArticles = BookArticle::latest()->take(10)->get();
        return Inertia::render('BookArticles/Indexclient', ['bookArticles' => $bookArticles]);
    }

    // Show the form for creating a new book article
    public function create()
    {
        return Inertia::render('BookArticles/Create');
    }

    // Store a new book article
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required|string|max:255',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        BookArticle::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'content' => $request->content,
            'author' => $request->author,
            'image' => $imagePath,
            'category' => $request->category,
        ]);

        return redirect()->route('book-articles.index')->with('success', 'تم إنشاء المقال بنجاح');
    }

    // Display a specific book article
    public function show($id)
    {
        $bookArticle = BookArticle::findOrFail($id);
        return Inertia::render('BookArticles/Show', [
            'bookArticle' => $bookArticle,
        ]);
    }

    // Display a specific book article for clients
    public function showclient($id)
    {
        $bookArticle = BookArticle::findOrFail($id);
        $bookArticles = BookArticle::latest()->take(6)->get();

        return Inertia::render('BookArticles/Showclient', [
            'bookArticle' => $bookArticle,
            'bookArticles' => $bookArticles
        ]);
    }

    // Show the form for editing a book article
    public function edit($id)
    {
        $bookArticle = BookArticle::findOrFail($id);
        return Inertia::render('BookArticles/Edit', ['bookArticle' => $bookArticle]);
    }



    public function update(Request $request, $id)
    {
        $bookArticle = BookArticle::findOrFail($id);
    
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required|string|max:255',
        ]);
    
        $imagePath = $bookArticle->image;
        if ($request->hasFile('image')) {
            if ($imagePath && \Storage::disk('public')->exists($imagePath)) {
                \Storage::disk('public')->delete($imagePath);
            }
            $imagePath = $request->file('image')->store('images', 'public');
        }
    
        $bookArticle->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'content' => $request->content,
            'author' => $request->author,
            'image' => $imagePath,
            'category' => $request->category,
        ]);
    
        return redirect()->route('book-articles.index')->with('success', 'تم تحديث المقال بنجاح');
    }
    // Delete a book article
    public function destroy($id)
    {
        $bookArticle = BookArticle::findOrFail($id);
        if ($bookArticle->image && \Storage::disk('public')->exists($bookArticle->image)) {
            \Storage::disk('public')->delete($bookArticle->image);
        }
        $bookArticle->delete();
        return redirect()->route('book-articles.index')->with('message', 'تم حذف المقال بنجاح');
    }
}