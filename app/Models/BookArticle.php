<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookArticle extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'subtitle', 'content', 'author', 'image', 'category', 'status' 
    ];
}