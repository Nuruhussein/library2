<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;

class ReviewsSeeder extends Seeder
{
    public function run()
    {
        Review::create([
            'reviewer' => 'أحمد علي',
            'comment' => 'كتاب رائع ومفيد جدًا في فهم السيرة النبوية.',
            'book_id' => 1
        ]);

        Review::create([
            'reviewer' => 'محمد حسن',
            'comment' => 'تفسير ابن كثير من أفضل كتب التفسير المعروفة.',
            'book_id' => 2
        ]);
    }
}
