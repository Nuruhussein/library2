<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'الفقه الإسلامي', 'description' => 'كتب متعلقة بالفقه الإسلامي.', 'image' => 'fiqh.jpg']);
        Category::create(['name' => 'السيرة النبوية', 'description' => 'كتب عن سيرة النبي محمد ﷺ.', 'image' => 'seerah.jpg']);
        Category::create(['name' => 'التفسير', 'description' => 'كتب تفسير القرآن الكريم.', 'image' => 'tafsir.jpg']);
        Category::create(['name' => 'العقيدة', 'description' => 'كتب عن العقيدة الإسلامية.', 'image' => 'aqeedah.jpg']);
    }
}
