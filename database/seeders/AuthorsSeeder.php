<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorsSeeder extends Seeder
{
    public function run()
    {
        Author::create(['name' => 'ابن القيم', 'bio' => 'عالِم إسلامي مشهور ومؤلف كتب في الفقه والسلوك.']);
        Author::create(['name' => 'ابن كثير', 'bio' => 'مفسر القرآن الكريم ومؤرخ إسلامي بارز.']);
        Author::create(['name' => 'الإمام النووي', 'bio' => 'عالم في الحديث والفقه الإسلامي ومؤلف كتاب رياض الصالحين.']);
        Author::create(['name' => 'ابن تيمية', 'bio' => 'عالم إسلامي ومجدد في العقيدة الإسلامية.']);
    }
}
