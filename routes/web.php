<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReviewController;
use App\Models\Book;
use App\Models\Author;
use App\Models\Category;

use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    $categories = Category::all();  // Fetch all categories from the database
    $books = Book::with('author', 'category')->get(); // Fetch books with authors and categories
    $authors = Author::all(); // Fetch all authors
    
    return Inertia::render('Welcome', [
        'books' => $books,
        'authors' => $authors,
        'categories' => $categories,  // Pass categories to the frontend
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware(['auth','admin'])->group(function () {
    Route::get('/books', [BookController::class, 'index'])->name('books.index');
      
Route::get('/books/create', [BookController::class, 'create'])->name('books.create');
Route::post('/books', [BookController::class, 'store'])->name('books.store');
Route::get('/admin/books/{book}', [BookController::class, 'show'])->name('books.show');
Route::post('/books/{book}', [BookController::class, 'update'])->name('books.update');

Route::get('/books/{book}/edit', [BookController::class, 'edit'])->name('books.edit');

Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('books.destroy');
    // Add other routes that require admin access here


    Route::post('/books/{book}/reviews', [ReviewController::class, 'store'])->name('reviews.store');
Route::get('/books/{book}/reviews', [ReviewController::class, 'index'])->name('reviews.index');
Route::delete('/books/{book}/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
Route::put('/books/{book}/reviews/{review}', [ReviewController::class, 'update'])->name('reviews.update');


Route::get('/books/{book}/reviews/{review}', [ReviewController::class, 'show'])->name('reviews.show');
Route::post('/reviews', [ReviewController::class, 'add'])->name('reviews.add');
Route::get('/reviews/create', [ReviewController::class, 'create'])->name('reviews.create');


 Route::post('/reviews', [ReviewController::class, 'add'])->name('reviews.add');




 
Route::get('/admin/categories', [CategoryController::class, 'index'])->name('admin.categories.index');
Route::get('/admin/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');


    Route::get('/admin/categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');
    Route::post('/admin/categories', [CategoryController::class, 'store'])->name('admin.categories.store');
    Route::get('/admin/categories/{category}/edit', [CategoryController::class, 'edit'])->name('admin.categories.edit');
    Route::put('/admin/categories/{category}', [CategoryController::class, 'update'])->name('admin.categories.update');
    Route::delete('/admin/categories/{category}', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');


    

Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');
Route::get('/authors/create', [AuthorController::class, 'create'])->name('authors.create');
Route::post('/authors', [AuthorController::class, 'store'])->name('authors.store');
Route::get('/authors/{author}', [AuthorController::class, 'show'])->name('authors.show');
Route::delete('/authors/{author}', [AuthorController::class, 'destroy'])->name('authors.destroy');
Route::put('/authors/{author}', [AuthorController::class, 'update'])->name('authors.update');


});




// Route::get('/category/{category}', [CategoryController::class, 'showeach'])->name('categories.show');




// Regular (Frontend) Routes
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');





    Route::get('/store', [BookController::class, 'storage'])->name('store.index');
    Route::get('/store/books/{book}', [BookController::class, 'storagedetail'])->name('store.index');

    Route::get('/store/tag/{category}', [BookController::class, 'tag'])->name('store.tag');
     




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
