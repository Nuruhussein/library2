import React from 'react';
import { useForm } from '@inertiajs/react';
import Dashboard from '../Dashboard';

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        subtitle: '',
        content: '',
        author: '',
        image: null,
        category: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('book-articles.store'), {
            onSuccess: () => {
                alert('تم إنشاء المقال بنجاح');
            },
            onError: () => {
                alert('حدث خطأ أثناء إنشاء المقال');
            },
        });
    };

    return (
        
         <Dashboard>
        <section className="bg-white ml-8 mt-14 dark:bg-gray-900 min-h-screen" dir="rtl">
            <div className="container px-6 py-12 mx-auto max-w-2xl">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white mb-8">
                    إنشاء مقال كتاب جديد
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            العنوان
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="أدخل عنوان المقال"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 transition-colors duration-200"
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title}</p>
                        )}
                    </div>

                    {/* Subtitle */}
                    <div>
                        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            العنوان الفرعي
                        </label>
                        <input
                            id="subtitle"
                            type="text"
                            placeholder="أدخل العنوان الفرعي (اختياري)"
                            value={data.subtitle}
                            onChange={(e) => setData('subtitle', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 transition-colors duration-200"
                        />
                        {errors.subtitle && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subtitle}</p>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            المحتوى
                        </label>
                        <textarea
                            id="content"
                            placeholder="اكتب содержание المقال هنا..."
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 min-h-[150px] whitespace-pre-wrap transition-colors duration-200"
                        />
                        {errors.content && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.content}</p>
                        )}
                    </div>

                    {/* Author */}
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            المؤلف
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder="أدخل اسم المؤلف"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 transition-colors duration-200"
                        />
                        {errors.author && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.author}</p>
                        )}
                    </div>

                    {/* Image */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            الصورة
                        </label>
                        <input
                            id="image"
                            type="file"
                            onChange={(e) => setData('image', e.target.files[0])}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-blue-300 dark:hover:file:bg-gray-600 transition-colors duration-200"
                        />
                        {errors.image && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.image}</p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            الفئة
                        </label>
                        <input
                            id="category"
                            type="text"
                            placeholder="أدخل فئة المقال (اختياري)"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-blue-400 transition-colors duration-200"
                        />
                        {errors.category && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.category}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`px-6 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900 transition-colors duration-200 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {processing ? 'جارٍ الإرسال...' : 'إرسال'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </Dashboard>
    );
};

export default Create;