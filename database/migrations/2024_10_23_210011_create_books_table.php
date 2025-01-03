<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('author_id')->constrained('authors')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->text('description')->nullable();
            $table->string('isbn')->nullable();
            $table->date('publication_date')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('publisher')->nullable(); // Publisher
            $table->string('researcher')->nullable(); // Researcher
            $table->string('link_to_website')->nullable(); // Link to other website
            $table->integer('page_number')->nullable(); // Page number
            $table->enum('status', ['post', 'draft'])->default('draft'); // Post or Draft
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('books');
    }
}
