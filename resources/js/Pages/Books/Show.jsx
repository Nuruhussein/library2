import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ book }) => (
    <Dashboard>
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg mt-16 text-right">
            {/* Book Cover and Info */}
            <div className="flex flex-col md:flex-row-reverse md:items-start md:space-x-8 md:space-x-reverse gap-6">
                {/* Book Cover */}
                <div className="w-full md:w-64 flex-shrink-0">
                    {book.cover_image ? (
                        <img
                            src={`/storage/${book.cover_image}`}
                            alt={`غلاف ${book.title}`}
                            className="w-full h-48 sm:h-64 md:h-72 rounded-md shadow-lg object-cover"
                        />
                    ) : (
                        <div className="w-full h-48 sm:h-64 md:h-72 bg-gray-200 rounded-md flex items-center justify-center">
                            <span className="text-gray-500 text-sm sm:text-base">لا توجد صورة</span>
                        </div>
                    )}
                </div>

                {/* Book Info */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-words">
                        {book.title || "بدون عنوان"}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>المؤلف:</strong> {book.author?.name || "غير معروف"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>التصنيف:</strong> {book.category?.name || "غير مصنف"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>رقم ISBN:</strong> {book.isbn || "غير متوفر"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>تاريخ النشر:</strong>{" "}
                        {book.publication_date
                            ? new Date(book.publication_date).toLocaleDateString("ar-EG")
                            : "غير متوفر"}
                    </p>
                </div>
            </div>

            {/* Additional Details */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">الوصف</h2>
                    <div
                        className="text-gray-700 text-sm sm:text-base break-words prose prose-sm sm:prose-base max-w-none"
                        dangerouslySetInnerHTML={{ __html: book.description || "لا يوجد وصف متاح." }}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-right">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>الناشر:</strong> {book.publisher || "غير متوفر"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>الباحث:</strong> {book.researcher || "غير متوفر"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>عدد الصفحات:</strong> {book.page_number || "غير متوفر"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>الحالة:</strong> {book.status || "مسودة"}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        <strong>الحصول على الكتاب:</strong>{" "}
                        {book.link_to_website ? (
                            <a
                                href={book.link_to_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                رابط
                            </a>
                        ) : (
                            "غير متوفر"
                        )}
                    </p>
                </div>
            </div>
        </div>
    </Dashboard>
);

export default Show;