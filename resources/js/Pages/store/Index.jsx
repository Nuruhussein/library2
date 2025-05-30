import Books from '@/Components/booklists/Books';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon

export default function Index({ auth, categories, books, totalBooks }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showButton, setShowButton] = useState(false);

    // Filter books based on selected category
    const filteredBooks = selectedCategory
        ? books.filter((book) => book.category_id === selectedCategory)
        : books;

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Effect to handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // Show button when scrolled down more than 100px
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <Head title="books" />
            <nav
                className="flex max-w-screen-2xl mx-auto items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
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
                            المتجر
                        </Link>
                    </li>
                </ol>
            </nav>

            {/* Total Books Description */}
            <div className="container mx-auto max-w-screen-xl px-4 py-6" dir="rtl">
                <div className="p-6">
                    <h2 className="text-2xl text-orange-300 font-semibold mb-4 text-right">
                        مرحبًا بك في متجر الكتب
                    </h2>
                    <p className="text-gray-600 text-right">
                        لدينا مجموعة واسعة من الكتب المميزة. إجمالي الكتب المتاحة:{" "}
                        <span className="font-semibold text-blue-600">{totalBooks}</span> كتاب.
                    </p>
                </div>
            </div>

            {/* Books Section */}
            <Books auth={auth} categories={categories} books={books} />
            <Footer />

            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-9 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition-all duration-300 z-50 p-2 sm:p-2.5 md:p-3"
                    title="Scroll to top"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}