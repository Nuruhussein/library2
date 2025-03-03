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
        'publisher',         
        'researcher',        
        'link_to_website',  
        'page_number',       
        'status'             
    ];


    public function author()
    {
        return $this->belongsTo(Author::class);
    }


    public function category()
    {
        return $this->belongsTo(Category::class);
    }


    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
