import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ author }) => (
    <Dashboard>
        <div className="max-w-4xl mt-20 mx-auto p-6 bg-white shadow-md rounded-lg" dir="rtl">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {author.name}
            </h1>

            <p className="text-gray-700 mb-6 whitespace-pre-line">
                <strong className="font-medium">السيرة الذاتية:</strong>{" "}
                {author.bio || "لا توجد سيرة ذاتية متاحة."}
            </p>

            {author.books && author.books.length > 0 ? (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        كتب المؤلف {author.name}:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {author.books.map((book) => (
                            <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                {/* Book Cover Image */}
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                    {book.cover_image ? (
                                        <img
                                            src={`/storage/${book.cover_image}`}
                                            alt={book.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500">لا توجد صورة</span>
                                    )}
                                </div>
                                {/* Book Title */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {book.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 mt-8">
                    لا توجد كتب لهذا المؤلف.
                </p>
            )}
        </div>
    </Dashboard>
);

export default Show;