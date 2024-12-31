<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Islamic']);
        Category::create(['name' => 'History']);
        // Add more categories as needed
    }
}
