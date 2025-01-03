<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author_id',
        'category_id',
        'description',
        'isbn',
        'publication_date',
        'cover_image',
        'publisher',         // Added publisher field
        'researcher',        // Added researcher field
        'link_to_website',   // Added link to other website
        'page_number',       // Added page number
        'status'             // Added post or draft status
    ];

    // Define relationship with author
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    // Define relationship with category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Define relationship with reviews
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
