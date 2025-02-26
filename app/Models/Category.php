<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image', 'parent_id'];

    // Define relationship with parent category
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // Define relationship with subcategories
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    // Define relationship with books
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}