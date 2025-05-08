import React from 'react';

import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

import Books from '@/Components/booklists/Books';
import { Head } from '@inertiajs/react';

export default function Showclient({ author,categories }) {
    return (
        <>
        <Navbar/>
        <Head title="authors" />
        <nav
                className="flex max-w-screen-2xl mx-auto items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb"
            >
                <ol className="flex flex-row-reverse overflow-hidden rounded-lg border border-gray-200 text-gray-600" dir="rtl">
                    <li className="flex items-center">
                        
                        <a
                            href="/"
                            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                        >
                            <span className="ms-1.5 text-xs font-medium">الرئيسية</span>

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
                        </a>
                    </li>

                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtr:rotate-180"
                        ></span>
                        <a
                            href="/store"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                           فهرس المؤلفين
                        </a>
                    </li>
                    <li className="rtl:rotate-180 flex justify-center items-center">
                      
                    </li>
                    <li className="flex justify-center items-center">{author.name || "غير متوفر"}</li>
                </ol>
            </nav>
     {/* Updated H1 Styling */}
<div className="bg-gray-50 max-w-screen-2xl mx-auto w-full py-4 px-8 text-right">
    <div className="bg-white pt-1 pb-6 px-4">
    <h1 className="text-3xl mt-12 mb-4 font-bold text-gray-800">
        {author.name || "غير متوفر"}
    </h1>
    <p className="text-gray-600 mt-2">{author.bio || "لا يوجد وصف متاح"}</p>
    </div>
</div>

        <Books  categories={categories} books={author.books}  />
        <Footer/>
        </>
    );
}