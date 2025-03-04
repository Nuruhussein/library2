<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\Author;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/Dashboardcomp', [
            'totalBooks' => Book::count(),
            'draftBooks' => Book::where('status', 'draft')->count(),
            'pendingBooks' => Book::where('status', 'pending')->count(),
            'postedBooks' => Book::where('status', 'post')->count(),
            'totalCategories' => Category::count(),
            'totalAuthors' => Author::count(),
        ]);
    }
}