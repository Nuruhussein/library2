import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ book }) => (
    <Dashboard>
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-20 text-right">
            <div className="flex flex-col md:flex-row-reverse md:items-center md:space-x-8 md:space-x-reverse">
                {/* صورة الغلاف */}
                {book.cover_image ? (
                    <img
                        src={`/storage/${book.cover_image}`}
                        alt={`غلاف ${book.title}`}
                        className="w-full md:w-64 h-auto rounded-md shadow-lg object-cover"
                    />
                ) : (
                    <div className="w-full md:w-64 h-64 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">لا توجد صورة</span>
                    </div>
                )}

                {/* معلومات الكتاب */}
                <div className="flex-1 space-y-4 mt-6 md:mt-0">
                    <h1 className="text-4xl font-bold text-gray-900">{book.title || "بدون عنوان"}</h1>
                    <p className="text-lg text-gray-600">
                        <strong>المؤلف:</strong> {book.author?.name || "غير معروف"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>التصنيف:</strong> {book.category?.name || "غير مصنف"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>رقم ISBN:</strong> {book.isbn || "غير متوفر"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>تاريخ النشر:</strong>{" "}
                        {book.publication_date
                            ? new Date(book.publication_date).toLocaleDateString("ar-EG")
                            : "غير متوفر"}
                    </p>
                </div>
            </div>

            {/* تفاصيل إضافية */}
            <div className="mt-8 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">الوصف</h2>
                    <div
                        className="text-gray-700 break-words"
                        dangerouslySetInnerHTML={{ __html: book.description || "لا يوجد وصف متاح." }}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                    <p className="text-lg text-gray-600">
                        <strong>الناشر:</strong> {book.publisher || "غير متوفر"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>الباحث:</strong> {book.researcher || "غير متوفر"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>عدد الصفحات:</strong> {book.page_number || "غير متوفر"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>الحالة:</strong> {book.status || "مسودة"}
                    </p>
                    <p className="text-lg text-gray-600">
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
