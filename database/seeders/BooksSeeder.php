<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BooksSeeder extends Seeder
{
    public function run()
    {
        Book::create([
            'title' => 'Book 1',
            'author_id' => 1, // Corresponding author ID
            'category_id' => 1, // Corresponding category ID
            'description' => 'Description for Book 1',
            'isbn' => '1234567890',
            'publication_date' => '2023-01-01',
            'cover_image' => 'https://example.com/book1.jpg'
        ]);
        // Add more books as needed
    }
}
