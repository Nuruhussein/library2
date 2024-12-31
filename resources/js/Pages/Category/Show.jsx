import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

export default function Show({ category }) {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                {/* Breadcrumb */}
                <nav
                    className="flex items-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                    style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                    aria-label="Breadcrumb"
                >
                    <ol className="flex items-center justify-center text-center mx-auto w-full">
                        <li className='m-4'>
                            <a href="/" className="inline-flex items-center text-xl text-gray-400   hover:text-gray-200">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10"
                                    />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li className='m-4'>
                            <span className="mt-9 text-gray-500">/</span>
                        </li>
                        <li>
                            <span className='text-gray-800 mt-9 text-3xl '>{category.name}</span>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="container mx-auto py-12 px-6">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                        Books in the "{category.name}" Category
                    </h2>
                    {category.books && category.books.length > 0 ? (
                        <div className="grid max-w-7xl gap-6">
                            {category.books.map((book) => (
                                <div
                                    key={book.id}
                                    className=" rounded-lg shadow-md p-6 hover:shadow-lg "
                                >
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{book.title}</h3>
                                    <p className="text-gray-600 mb-4">
                                        <span className="font-medium">Author:</span> {book.author || 'Unknown Author'}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Published: {book.published_date || 'Unknown Date'}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {book.description || 'No description available.'}
                                    </p>
                                    <a
                                        href={`/books/${book.id}`}
                                        className="text-indigo-500 hover:text-indigo-700 text-sm font-medium"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No books are available in this category.</p>
                    )}
                </div>

                
            </div>
            <Footer />
        </>
    );
}
