import Aside from '@/Components/Aside';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';
import { Link } from '@inertiajs/react';

import { FaBook } from 'react-icons/fa'; // Import the book icon

export default function Show({ categories, book }) {
    return (
        <>
            <Navbar />
            <nav
                className="flex max-w-screen-2xl text-center mx-auto items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb"
            >
                <ol className="flex flex-row-reverse overflow-hidden rounded-lg border border-gray-200 text-gray-600" dir="rtl">
                    <li className="flex items-center">
                        
                       <Link
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
                        </Link>
                    </li>

                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtr:rotate-180"
                        ></span>
                       <Link
                            href="/store"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                            المتجر
                        </Link>
                    </li>
                    <li className="rtl:rotate-180 flex justify-center items-center">
                      
                    </li>
                    <li className="flex justify-center items-center">{book.title || "غير متوفر"}</li>
                </ol>
            </nav>

            <div className="container  max-w-7xl mx-auto flex w-full flex-col-reverse  md:items-center pb-8 pt-4 md:flex-row-reverse md:pb-10 md:pt-8 lg:pb-16" dir="rtl">
         

                  <div className='hidden md:block'><Aside categories={categories}/> </div>
                <div className="flow-root p-2 m-6 shadow-sm  sm:my-16">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        {book && (
                            <>
                                {/* <dt className="font-medium text-gray-900">غلاف الكتاب</dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                    {book.cover_image ? (
                                        <img
                                            src={`/storage/${book.cover_image}`}
                                            alt={`${book.title} cover`}
                                            className="max-w-full h-auto object-cover rounded-lg"
                                        />
                                    ) : (
                                        "لا يوجد صورة غلاف."
                                    )}
                                </dd> */}

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">العنوان</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.title || "غير متوفر"}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">المؤلف</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.author?.name || "مؤلف غير معروف"}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">التصنيف</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.category?.name || "غير مصنف"}</dd>
                                </div>

                                {/* <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">الرقم الدولي (ISBN)</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.isbn || "غير متوفر"}</dd>
                                </div> */}

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">تاريخ النشر</dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {new Date(book.publication_date).toLocaleDateString() || "غير متوفر"}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">الناشر</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.publisher || "غير متوفر"}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">الباحث</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.researcher || "غير متوفر"}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">رابط الموقع</dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                       <a href={book.link_to_website || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                            {book.link_to_website || "لا يوجد رابط متاح"}
                                        </a>
                                    </dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">عدد الصفحات</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{book.page_number || "غير متوفر"}</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-y-1 gap-x-32 py-3 sm:grid-cols-3 sm:gap-y-4">
                                    <dt className="font-medium text-gray-900">الوصف</dt>
                                    <dd className="text-gray-700 break-words max sm:col-span-2 max-w-[84ch]">
                                        {book.description ? (
                                          
                                            <span
                                            dangerouslySetInnerHTML={{ __html: book.description || "لا يوجد وصف متاح." }}
                                            />
                                        ) : (
                                            "لا يوجد وصف متاح."
                                        )}
                                    </dd>
                                </div>

                                <div className="mt-12 pb-8">
                                    <h3 className="text-lg font-medium text-gray-900">التقييمات</h3>
                                    {book.reviews && book.reviews.length > 0 ? (
                                        <ul className="space-y-4">
                                            {book.reviews.map((review, index) => (
                                                <li key={index} className="border-t border-gray-200 pt-4">
                                                    <p className="font-semibold text-gray-800">{review.reviewer || "مجهول"}</p>
                                                    <p className="text-gray-600 mt-1  break-words  max-w-[84ch]">
                                                        {review.comment ? (
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: review.comment.replace(/\n/g, "<br />"),
                                                                }}
                                                            />
                                                        ) : (
                                                            "لا يوجد تعليق."
                                                        )}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600">لا توجد تقييمات متاحة لهذا الكتاب.</p>
                                    )}
                                </div>
                            </>
                        )}
                    </dl>
                </div>
                {/* <div className='relative border h-full'> */}
                <div className="text-gray-700    flex items-start justify-start h-80 mb-2 md:mb-64 md:-mt-20 p-6">
  {book.cover_image ? (
    <img
      src={`/storage/${book.cover_image}`}
      alt={`${book.title} cover`}
      className="max-w-[150px] h-[200px] object-cover rounded-lg shadow-lg  border-4 border-gray-300 transform transition-transform hover:scale-105 hover:shadow-2xl"
    />
  ) : (
    "لا يوجد صورة غلاف."
  )}
{/* </div> */}
</div>

            </div>
            <Footer />
        </>
    );
}