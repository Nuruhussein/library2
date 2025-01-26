import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon

export default function Show({categories,book}) {
    
    return (
        <>
            <Navbar />
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
        href="/store"
        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
      >
   Store
      </a>

    </li>
    <li className="rtl:rotate-180 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>
  <li  className='flex justify-center items-center' > {book.title || "N/A"}</li>
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
                                <div className="flow-root sm:my-16">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    {book && (
      <>
        {/* Existing book details */}
        <dt className="font-medium text-gray-900">Book Cover</dt>
    <dd className="text-gray-700 sm:col-span-2">
        {book.cover_image ? (
            <img 
                src={`/storage/${book.cover_image}`} 
                alt={`${book.title} cover`} 
                className="max-w-full h-auto object-cover rounded-lg"
            />
        ) : (
            "No cover image available."
        )}
    </dd>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Title</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.title || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Author</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.author?.name || "Unknown Author"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Category</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.category?.name || "Uncategorized"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">ISBN</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.isbn || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Publication Date</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {new Date(book.publication_date).toLocaleDateString() || "N/A"}
          </dd>
        </div>

        {/* Add additional fields here */}
        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Publisher</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.publisher || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Researcher</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.researcher || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Link to Website</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <a href={book.link_to_website || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              {book.link_to_website || "No link available"}
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Page Number</dt>
          <dd className="text-gray-700 sm:col-span-2">{book.page_number || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
          <dt className="font-medium text-gray-900">Bio</dt>

          
          <dd className="text-gray-700 sm:col-span-2 break-words"> {book.description ? (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: book.description.replace(/\n/g, "<br />"),
                                }}
                            />
                        ) : (
                            "No description available."
                        )}</dd>
        </div>

        {/* Book Reviews Section */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
          {book.reviews && book.reviews.length > 0 ? (
            <ul className="space-y-4">
              {book.reviews.map((review, index) => (
                <li key={index} className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">{review.reviewer || "Anonymous"}</p>
                  <p className="text-gray-600 mt-1"> {review.comment ? (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: review.comment.replace(/\n/g, "<br />"),
                                }}
                            />
                        ) : (
                            "No description available."
                        )}</p>
                  
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No reviews available for this book.</p>
          )}
        </div>

      </>
    )}
  </dl>
</div>


            </div>
            <Footer />
        </>
    );
}