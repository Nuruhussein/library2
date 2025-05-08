<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BookArticle;
use Faker\Factory as Faker;

class BookArticleSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Loop to create 10 dummy book articles
        for ($i = 0; $i < 10; $i++) {
            BookArticle::create([
                'title' => $faker->sentence,
                'subtitle' => $faker->sentence,
                'content' => $faker->paragraphs(3, true), // 3 paragraphs
                'author' => $faker->name,
                'image' => $faker->imageUrl(640, 480, 'books', true), // Random book-related image
                'category' => $faker->randomElement(['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography']),
                'status' => $faker->randomElement(['pending', 'draft', 'post']),
            ]);
        }
    }
}