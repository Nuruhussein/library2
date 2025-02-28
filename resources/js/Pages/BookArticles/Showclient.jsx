import React from 'react';
import { Link } from '@inertiajs/react';
import Articles from '@/Components/Articles';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

const Show = ({ bookArticle,bookArticles }) => {
    return (
        <>
         <Navbar/>
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
                            href="/book-articles"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                          مَقال
                        </Link>
                    </li>
                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                        ></span>
                       <Link
                            href={`/book-articles/${bookArticle.id}`}
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                             {bookArticle.title}
                        </Link>
                    </li>
                </ol>
            </nav>
        <section className="text-gray-600 body-font mb-16 mx-14" dir="rtl">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 flex flex-col justify-start items-center mx-auto">
                    {bookArticle.image && (
                        <div>
                        <div className="rounded-lg rotate-45 h-96    overflow-hidden">
                            <img 
                                alt={bookArticle.title} 
                                className="object-cover object-center mx-auto shadow-lg h-72  w-56" 
                                src={`/storage/${bookArticle.image}`}
                            />
                        </div>
                        <div className='bg-orange-100 rounded-b-2xl h-3 w-80 shadow-2xl shadow-red-800'></div>
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    className="w-10 h-10" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                    {bookArticle.author}
                                </h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                {bookArticle.category && (
                                    <p className="text-base">{bookArticle.category}</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pr-8 sm:py-8 sm:border-r border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-right">
                            <h1 className="text-2xl font-medium title-font text-gray-900 mb-4">
                                {bookArticle.title}
                            </h1>
                            {bookArticle.subtitle && (
                                <h2 className="text-lg text-gray-700 mb-4">
                                    {bookArticle.subtitle}
                                </h2>
                            )}
                            <p className="leading-relaxed text-lg mb-4">
                                {bookArticle.content}
                            </p>
                            <Link 
                                href="/book-articles" 
                                className="text-indigo-500 inline-flex items-center"
                            >
                                العودة إلى المقالات
                                <svg 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    className="w-4 h-4 mr-2" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Articles  remainingArticles={bookArticles}/>
        </section>
        <Footer/>
        </>
    );
};

export default Show;