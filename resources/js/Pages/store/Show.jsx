import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon

export default function Show({categories}) {
    
    return (
        <>
            <Navbar />
            {/* Breadcrumb */}
            <nav
                className="flex items-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb"
            >
                <ol className="flex items-center justify-center text-center mx-auto w-full">
                    <li className="m-4">
                        <a href="/" className="inline-flex items-center text-xl text-gray-400 hover:text-gray-200">
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
                    <li className="m-4">
                        <span className="mt-9 text-gray-500">/</span>
                    </li>
                    <li>
                        <span className="text-gray-800 mt-9 text-3xl">Store</span>
                    </li>
                </ol>
            </nav>

            <div className="container max-w-7xl  mx-auto flex w-full flex-col items-center pb-8 pt-4 md:flex-row md:pb-10 md:pt-8 lg:pb-16">

             <aside className="top-20 mb-8 w-full self-start pt-8 md:sticky md:mr-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:mr-32 lg:max-w-[18rem] lg:shrink-0 2xl:w-full">
                                    <div className="flex flex-col rounded-xl border border-border bg-white py-6 md:py-4">
                                        <ul className="md:mb-4.5 mb-6 py-6 px-2 font-medium leading-5">
                                            <span className="flex items-center py-3 px-2">
                                                <span className="h-px flex-1 bg-gray-300"></span>
                                                <span className="shrink-0 text-gray-600 px-6">Categories</span>
                                                <span className="h-px flex-1 bg-gray-300"></span>
                                            </span>
                                            {categories.map((category) => (
                                               
                                                    <a href={`/category/${category.id}`}> <li
                                                    key={category.id}
                                                 
                                                    className={`flex items-center text-zinc-600 py-3 px-2 cursor-pointer'text-blue-500 font-bold' : ''
                                                    }`}
                                                ><FaBook className="mr-3 rotate-45 text-blue-500" />
                                                {category.name} -
                                                <span className="text-center flex justify-center items-start ml-2">
                                                    {category.books_count} books
                                                </span>
                                            </li></a>
                                                    
                                            ))}
                                            <a href='/store'> <li
                                     
                                     className=
                                     {`flex items-center text-zinc-600 py-3 px-2 cursor-pointer 
                                    'text-blue-500 font-bold' : ''
                                     }`}
                                 >
                                     <FaBook className="mr-3 rotate-45 text-blue-500" />
                                     All Books
                                 </li></a>
                                           
                                        </ul>
                                    </div>
                                </aside>
            </div>
            <Footer />
        </>
    );
}
