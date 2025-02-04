import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon

export default function Index({ categories, books }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filter books based on selected category
    const filteredBooks = selectedCategory
        ? books.filter((book) => book.category_id === selectedCategory)
        : books;

    return (
        <>
            <Navbar />
            <nav
                className="flex items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb"
            >
                <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center">
                        <a
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
                            <span className="ms-1.5 text-xs font-medium"> Home </span>
                        </a>
                    </li>
                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                        ></span>
                        <a
                            href="#"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                            Store
                        </a>
                    </li>
                </ol>
            </nav>

            {/* Main Content Section */}
            <section className="container mx-auto max-w-screen-2xl bg-gray-50 flex-1">
                <div className="container max-w-7xl mx-auto flex w-full flex-col items-center pb-8 pt-4 md:flex-row md:pb-10 md:pt-8 lg:pb-16 h-full">
                    {/* Sidebar */}
                    <aside className="top-20 mb-8 w-full self-start pt-8 md:sticky md:mr-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:mr-32 lg:max-w-[18rem] lg:shrink-0 2xl:w-full h-[calc(100vh-10rem)] overflow-y-auto">
                        <div className="flex flex-col rounded-xl border border-border bg-white py-6 md:py-4 h-full">
                            <ul className="md:mb-4.5 mb-6 py-6 px-2 font-medium leading-5">
                                <span className="flex items-center py-3 px-2">
                                    <span className="h-px flex-1 bg-gray-300"></span>
                                    <span className="shrink-0 text-gray-600 px-6">Categories</span>
                                    <span className="h-px flex-1 bg-gray-300"></span>
                                </span>
                                {categories.map((category) => (
                                    <li
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center text-zinc-600 py-3 px-2 cursor-pointer ${
                                            selectedCategory === category.id ? 'text-blue-500 font-bold' : ''
                                        }`}
                                    >
                                        <FaBook className="mr-3 rotate-45 text-blue-500" />
                                        {category.name} -
                                        <span className="text-center flex justify-center items-start ml-2">
                                            {category.books_count} books
                                        </span>
                                    </li>
                                ))}
                                <li
                                    onClick={() => setSelectedCategory(null)}
                                    className={`flex items-center text-zinc-600 py-3 px-2 cursor-pointer ${
                                        selectedCategory === null ? 'text-blue-500 font-bold' : ''
                                    }`}
                                >
                                    <FaBook className="mr-3 rotate-45 text-blue-500" />
                                    All Books
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article className="prose prose-sm bg-white shadow-emerald-50 shadow-md  mx-auto p-8 flex-1">
                        <section className="py-12">
                            <div className="container max-w-6xl mx-auto">
                                <div className="mt-20 grid gap-10 lg:grid-cols-4 xl:gap-20 h-full">
                                    {filteredBooks.length === 0 ? (
                                        <p>No books available.</p>
                                    ) : (
                                        filteredBooks.map((book) => (
                                            <div key={book.id} className="flex flex-col lg:block h-full">
                                                <div className="rounded-lg border bg-zinc-50 p-3">
                                                    {book.cover_image && (
                                                        <img
                                                            src={`/storage/${book.cover_image}`}
                                                            alt={book.title}
                                                            className="h-64 w-full rounded-lg object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <div className="p-6">
                                                    <div className="mb-1 font-semibold">{book.title}</div>
                                                    <a
                                                        href={`/store/books/${book.id}`}
                                                        className="mt-4 flex items-center gap-2 font-medium"
                                                    >
                                                        Learn more
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
                                                    </a>
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
            <Footer />
        </>
    );
}