import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa';
import Aside from '../Aside';
import { Link, usePage } from '@inertiajs/react'; // Add usePage to get auth props

export default function Books({ categories, books }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { auth } = usePage().props; // Get auth data from Inertia props

    // Filter books based on selected category
    const filteredBooks = selectedCategory
        ? books.filter((book) => book.category_id === selectedCategory)
        : books;


    return (
        <>
            {/* Main Content Section */}
            <section className="container mx-auto max-w-screen-2xl bg-gray-50 flex-1">
                <div className="container max-w-7xl mx-auto flex flex-col-reverse w-full items-center pb-8 pt-4 md:flex-row md:pb-10 md:pt-8 lg:pb-16 h-full">
                    {/* Aside (Categories) */}
                    <Aside categories={categories} onCategorySelect={setSelectedCategory} />

                    {/* Main Content */}
                    <article className="prose prose-sm bg-white shadow-emerald-50 shadow-md mx-auto p-8 flex-1">
                        <section className="py-12">
                            <div className="container max-w-6xl mx-auto">
                                <div className="mt-20 grid gap-10 grid-cols-2 lg:grid-cols-4 xl:gap-20 h-full">
                                    {filteredBooks.length === 0 ? (
                                        <p className="text-gray-600 text-right">لا توجد كتب متاحة.</p>
                                    ) : (
                                        filteredBooks.map((book) => (
                                            <div key={book.id} className="flex flex-col lg:block h-full">
                                                <div className={`rounded-lg border p-3 ${book.status === 'pending' ? 'bg-yellow-50' : 'bg-zinc-50'}`}>
                                                    {book.cover_image ? (
                                                        <img
                                                            src={`/storage/${book.cover_image}`}
                                                            alt={book.title}
                                                            className="h-48 w-full rounded-lg object-cover"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="/storage/images/no_book_cover.png"
                                                            alt={book.title}
                                                            className="h-48 w-full rounded-lg object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <div className="p-6">
                                                    <div className="mb-1 font-semibold flex items-center justify-between">
                                                        {book.title}
                                                        {auth.user && auth.user.role === 'admin' && book.status === 'pending' && (
                                                            <span className="text-yellow-600 text-xs font-normal">معلق</span>
                                                        )}
                                                    </div>
                                                    <Link
                                                        href={`/store/books/${book.id}`}
                                                        className="mt-4 flex items-center gap-2 font-normal text-blue-400"
                                                    >
                                                        تعرف على المزيد
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-chevron-right w-4"
                                                        >
                                                            <path d="m9 18 6-6-6-6" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </>
    );
}