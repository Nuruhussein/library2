<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{


 public function create()
    {
        // Fetch all books to display in dropdown
        $books = Book::all();
        return inertia('Reviews/Create', [
            'books' => $books,
        ]);
    }

    // Handle review submission
    public function add(Request $request)
    {
        $request->validate([
            'reviewer' => 'required|string|max:255',
            'comment' => 'required|string',
            'book_id' => 'required|exists:books,id',
        ]);

        Review::create([
            'reviewer' => $request->input('reviewer'),
            'comment' => $request->input('comment'),
            'book_id' => $request->input('book_id'),
        ]);

        return redirect()->route('reviews.create')->with('success', 'Review added successfully!');
    }




    // for each book
    public function store(Request $request, Book $book)
    {
        // Validate incoming data
        $validated = $request->validate([
            'reviewer' => 'required|string|max:255',
            'comment' => 'required|string',
        ]);

        // Create a new review associated with the book
        $review = new Review();
        $review->reviewer = $validated['reviewer'];
        $review->comment = $validated['comment'];
        $review->book_id = $book->id;
        $review->save();

        return redirect()->back()->with('message', 'Review added successfully!');
    }

    public function index(Book $book)
    {
        $reviews = $book->reviews()->with('book')->get();

        return Inertia::render('Reviews/Index', [
            'book' => $book,
            'reviews' => $reviews,
        ]);
    }
      public function show(Book $book, Review $review)
    {
        // Ensure the review belongs to the specified book
        if ($review->book_id !== $book->id) {
            abort(404, 'Review not found for this book');
        }

        return inertia('Reviews/Show', [
            'book' => $book,
            'review' => $review,
        ]);
    }
}
