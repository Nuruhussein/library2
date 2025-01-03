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
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<nav   className="flex items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb">
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
      >
      </span>

      <a
        href="#"
        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
      >
   Store
      </a>
    </li>
  </ol>
</nav>
            {/* Breadcrumb
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
            </nav> */}
            <section className="container mx-auto max-w-screen-2xl bg-gray-50">
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
                    <article className="prose prose-sm mx-auto pt-8">
                        <section className="py-12">
                            <div className="container max-w-6xl mx-auto">
                                <div className="mt-20 grid gap-10 lg:grid-cols-4 xl:gap-20 h-full">
                                    {filteredBooks.length === 0 ? (
                                        <p>No books available.</p>
                                    ) : (
                                        filteredBooks.map((book) => (
                                            <div key={book.id} className="flex flex-col lg:block h-full ">
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



// <section class="py-32">
//   <div class="container flex flex-col items-start text-left">
//     <p class="semibold">We&#x27;re hiring</p>
//     <h2 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">Meet our team</h2>
//     <p class="mb-8 max-w-3xl text-zinc-600 lg:text-xl">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
//       omnis! Porro facilis quo animi consequatur. Explicabo.
//     </p>
//   </div>
//   <div class="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
//     <div class="flex flex-col sm:flex-row">
//       <div class="mb-4 aspect-square w-full shrink-0 overflow-clip bg-zinc-100 sm:mb-0 sm:mr-5 sm:size-48"></div>
//       <div class="flex flex-1 flex-col items-start">
//         <p class="w-full text-left font-medium">Name</p>
//         <p class="w-full text-left text-zinc-600">Role</p>
//         <p class="w-full py-2 text-sm text-zinc-600">
//           Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
//         </p>
//         <div class="my-2 flex items-start gap-4">
//           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-github size-4 text-zinc-600">
//               <path
//                 d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
//               </path>
//               <path d="M9 18c-4.51 2-5-2-7-2"></path>
//             </svg></a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-linkedin size-4 text-zinc-600">
//               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//               <rect width="4" height="12" x="2" y="9"></rect>
//               <circle cx="4" cy="4" r="2"></circle>
//             </svg></a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-dribbble size-4 text-zinc-600">
//               <circle cx="12" cy="12" r="10"></circle>
//               <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
//               <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
//               <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
//             </svg></a>
//         </div>
//       </div>
//     </div>
//     <div class="flex flex-col sm:flex-row">
//       <div class="mb-4 aspect-square w-full shrink-0 overflow-clip bg-zinc-100 sm:mb-0 sm:mr-5 sm:size-48"></div>
//       <div class="flex flex-1 flex-col items-start">
//         <p class="w-full text-left font-medium">Name</p>
//         <p class="w-full text-left text-zinc-600">Role</p>
//         <p class="w-full py-2 text-sm text-zinc-600">
//           Elig doloremque mollitia fugiat omnis!
//         </p>
//         <div class="my-2 flex items-start gap-4">
//           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-github size-4 text-zinc-600">
//               <path
//                 d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
//               </path>
//               <path d="M9 18c-4.51 2-5-2-7-2"></path>
//             </svg></a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-linkedin size-4 text-zinc-600">
//               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//               <rect width="4" height="12" x="2" y="9"></rect>
//               <circle cx="4" cy="4" r="2"></circle>
//             </svg></a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//               class="lucide lucide-dribbble size-4 text-zinc-600">
//               <circle cx="12" cy="12" r="10"></circle>
//               <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
//               <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
//               <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
//             </svg></a>
//         </div>
//       </div>
//     </div>
    
//       </div>
    
//   </div>
// </section>