<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Author; // Make sure to import the correct model

class AuthorsSeeder extends Seeder
{
    public function run()
    {
        Author::create(['name' => 'Author 1', 'bio' => 'Biography of Author 1']);
        Author::create(['name' => 'Author 2', 'bio' => 'Biography of Author 2']);
        // Add more authors as needed
    }
}
