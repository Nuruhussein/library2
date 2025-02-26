<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BooksSeeder extends Seeder
{
    public function run()
    {
        Book::create([
            'title' => 'زاد المعاد',
            'author_id' => 1,
            'category_id' => 2,
            'description' => 'كتاب في السيرة النبوية وأحكامها.',
            'isbn' => '978-1234567890',
            'publication_date' => '2005-01-01',
            'cover_image' => 'zad-almaad.jpg',
            'publisher' => 'دار الكتب الإسلامية',
            'researcher' => 'محمد بن صالح',
            'link_to_website' => 'https://example.com/zad-almaad',
            'page_number' => 500,  // Changed to page_number based on model
            'status' => 'post'
        ]);

        Book::create([
            'title' => 'تفسير ابن كثير',
            'author_id' => 2,
            'category_id' => 3,
            'description' => 'كتاب في تفسير القرآن الكريم.',
            'isbn' => '978-0987654321',
            'publication_date' => '2005-02-01',
            'cover_image' => 'ibn-kathir.jpg',
            'publisher' => 'دار الفكر',
            'researcher' => 'أحمد بن علي',
            'link_to_website' => 'https://example.com/ibn-kathir',
            'page_number' => 1500,  // Changed to page_number based on model
            'status' => 'post'
        ]);
    }
}
