import React from 'react';
import { Link } from '@inertiajs/react';
import Dashboard from '../Dashboard';

const Show = ({ bookArticle }) => {
    return (
        <Dashboard>
        <section className="bg-gray-100 mt-8 dark:bg-gray-900 min-h-screen" dir="rtl">
            <div className="container px-6 py-12 mx-auto max-w-4xl">
                {/* Dashboard Card */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 dark:bg-blue-500 px-6 py-4 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-white">
                            تفاصيل المقال: {bookArticle.title}
                        </h1>
                        <Link 
                            href={route('book-articles.index')} 
                            className="text-white hover:text-gray-200 flex items-center transition-colors duration-200"
                        >
                            <svg 
                                className="w-5 h-5 mr-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            العودة إلى القائمة
                        </Link>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Image */}
                        {bookArticle.image && (
                            <div className="mb-6">
                                <img 
                                    src={`/storage/${bookArticle.image}`} 
                                    alt={bookArticle.title} 
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        )}

                        {/* Details */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    العنوان
                                </h2>
                                <p className="mt-1 text-xl text-gray-900 dark:text-gray-200 font-semibold">
                                    {bookArticle.title}
                                </p>
                            </div>

                            {/* Subtitle */}
                            {bookArticle.subtitle && (
                                <div>
                                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                        العنوان الفرعي
                                    </h2>
                                    <p className="mt-1 text-gray-900 dark:text-gray-200">
                                        {bookArticle.subtitle}
                                    </p>
                                </div>
                            )}

                            {/* Content */}
                            <div>
                                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    المحتوى
                                </h2>
                                <p className="mt-1 text-gray-900 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                                    {bookArticle.content}
                                </p>
                            </div>

                            {/* Author */}
                            <div>
                                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    المؤلف
                                </h2>
                                <p className="mt-1 text-gray-900 dark:text-gray-200">
                                    {bookArticle.author}
                                </p>
                            </div>

                            {/* Category */}
                            <div>
                                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    الفئة
                                </h2>
                                <p className="mt-1 text-gray-900 dark:text-gray-200">
                                    {bookArticle.category || 'غير مصنف'}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex justify-end space-x-4 space-x-reverse">
                            <Link 
                                href={route('book-articles.edit', bookArticle.id)} 
                                className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 px-4 py-2 rounded-lg flex items-center transition-colors duration-200"
                            >
                                <svg 
                                    className="w-5 h-5 mr-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                تعديل
                            </Link>
                            <button 
                                onClick={() => {
                                    if (confirm('هل أنت متأكد من حذف هذا المقال؟')) {
                                        route.delete(route('book-articles.destroy', bookArticle.id), {
                                            onSuccess: () => alert('تم الحذف بنجاح'),
                                        });
                                    }
                                }} 
                                className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 px-4 py-2 rounded-lg flex items-center transition-colors duration-200"
                            >
                                <svg 
                                    className="w-5 h-5 mr-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M4 7h16" />
                                </svg>
                                حذف
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Dashboard>
    );
};

export default Show;