import Aside from '@/Components/Aside';
import Books from '@/Components/booklists/Books';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';
import { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon
import { Link } from '@inertiajs/react';

export default function Tag({ category, categories, subcategories }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                {/* Breadcrumb */}
                <nav
                    className="flex items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                    style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                    aria-label="Breadcrumb"
                >
                    <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                        <li className="flex items-center">
                           <Link
                                href="/"
                                className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span className="ms-1.5 text-xs font-medium">الرئيسية</span>
                            </Link>
                        </li>
                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            ></span>
                           <Link
                                href="#"
                                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                            >
                                {category.name}
                            </Link>
                        </li>
                    </ol>
                </nav>

                {/* Conditionally Render Subcategories Section */}
                {subcategories.length > 0 && (
                    <div className="container mx-auto max-w-screen-xl px-4 py-8" dir="rtl">
                        <h2 className="text-xl font-semibold text-orange-300 mb-4 text-right">التصنيفات الفرعية</h2>
                        <div className="flex overflow-x-auto space-x-4 pb-4">
                            {subcategories.map((subcategory) => (
                                <Link
                                    key={subcategory.id}
                                    href={`/store/tag/${subcategory.id}`}
                                    className="flex-shrink-0 bg-white shadow-md rounded-3xl p-2 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
                                >
                                    <div className="flex gap-x-2">
                                        {/* Icon */}
                                        <div className="text-sm text-orange-200">
                                            <FaBook /> {/* Replace FaBook with your desired icon */}
                                        </div>
                                        {/* Subcategory Name */}
                                        <h3 className="text-sm font-semibold text-gray-800 text-center">
                                            {subcategory.name}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Books Section */}
                <Books categories={categories} books={category.books} />
                <Footer />
            </div>
        </>
    );
}