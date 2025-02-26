<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            AuthorsSeeder::class,
            CategoriesSeeder::class,
            BooksSeeder::class,
            ReviewsSeeder::class,
            // UsersSeeder::class,
        ]);
    }
}
