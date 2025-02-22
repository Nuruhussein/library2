import React from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Create = ({ authors, categories }) => {
    const { data, setData, post, errors } = useForm({
        title: "",
        author_id: "",
        category_id: "",
        description: "",
        isbn: "",
        publication_date: "",
        cover_image: null,
        publisher: "",
        researcher: "",
        link_to_website: "",
        page_number: "",
        status: "draft", // Default to "draft"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books");
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto mt-20 bg-white shadow-md rounded-md p-6" dir="rtl">
                <h1 className="text-2xl font-bold text-gray-700 mb-4 text-right">
                    إضافة كتاب جديد
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                العنوان
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                                required
                            />
                            {errors.title && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.title}
                                </span>
                            )}
                        </div>

                        {/* Author */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                المؤلف
                            </label>
                            <select
                                value={data.author_id}
                                onChange={(e) => setData("author_id", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                                required
                            >
                                <option value="">اختر المؤلف</option>
                                {authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                ))}
                            </select>
                            {errors.author_id && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.author_id}
                                </span>
                            )}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                التصنيف
                            </label>
                            <select
                                value={data.category_id}
                                onChange={(e) => setData("category_id", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                                required
                            >
                                <option value="">اختر التصنيف</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.category_id}
                                </span>
                            )}
                        </div>

                        {/* ISBN */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                الرقم الدولي (ISBN)
                            </label>
                            <input
                                type="text"
                                value={data.isbn}
                                onChange={(e) => setData("isbn", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.isbn && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.isbn}
                                </span>
                            )}
                        </div>

                        {/* Publication Date */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                تاريخ النشر
                            </label>
                            <input
                                type="date"
                                value={data.publication_date}
                                onChange={(e) => setData("publication_date", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.publication_date && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.publication_date}
                                </span>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                صورة الغلاف
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setData("cover_image", e.target.files[0])}
                                className="mt-1 w-full"
                            />
                            {errors.cover_image && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.cover_image}
                                </span>
                            )}
                        </div>

                        {/* Publisher */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                الناشر
                            </label>
                            <input
                                type="text"
                                value={data.publisher}
                                onChange={(e) => setData("publisher", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.publisher && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.publisher}
                                </span>
                            )}
                        </div>

                        {/* Researcher */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                الباحث
                            </label>
                            <input
                                type="text"
                                value={data.researcher}
                                onChange={(e) => setData("researcher", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.researcher && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.researcher}
                                </span>
                            )}
                        </div>

                        {/* External Link */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                رابط خارجي
                            </label>
                            <input
                                type="url"
                                value={data.link_to_website}
                                onChange={(e) => setData("link_to_website", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.link_to_website && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.link_to_website}
                                </span>
                            )}
                        </div>

                        {/* Page Number */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                عدد الصفحات
                            </label>
                            <input
                                type="number"
                                value={data.page_number}
                                onChange={(e) => setData("page_number", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            />
                            {errors.page_number && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.page_number}
                                </span>
                            )}
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-gray-600 font-medium text-right">
                                الحالة
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) => setData("status", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            >
                                <option value="draft">مسودة</option>
                                <option value="post">منشور</option>
                            </select>
                            {errors.status && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-600 font-medium text-right">
                            الوصف
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
                            rows={9}
                            style={{ whiteSpace: "pre-wrap" }} // Ensures formatting is visible
                        />
                        {errors.description && (
                            <span className="text-sm text-red-600 text-right">
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700"
                    >
                        إضافة الكتاب
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;