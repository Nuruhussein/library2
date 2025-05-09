import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { Link } from "@inertiajs/react";
import toast from "react-hot-toast";
import Select from "react-select";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const Create = ({ authors, categories }) => {
    const { props } = usePage();
    const { breadcrumb } = props; // Get the breadcrumb from props
    const { category_id } = props.query; // Get the category_id from props

    const { data, setData, post, errors } = useForm({
        title: "",
        author_id: "",
        category_id: category_id || "", // Pre-select the category if category_id is provided
        description: "",
        isbn: "",
        publication_date: "",
        cover_image: null,
        publisher: "",
        researcher: "",
        link_to_website: "https://shamela.ws/search",
        page_number: "",
        status: "draft", // Default to "draft"
    });

    // Format authors and categories for react-select
    const authorOptions = authors.map((author) => ({
        value: author.id,
        label: author.name,
    }));

    const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

    // Handle author selection
    const handleAuthorChange = (selectedOption) => {
        setData("author_id", selectedOption ? selectedOption.value : "");
    };

    // Handle category selection
    const handleCategoryChange = (selectedOption) => {
        setData("category_id", selectedOption ? selectedOption.value : "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books", {
            onSuccess: () => {
                toast.success("تم إضافة الكتاب بنجاح");
            },
            onError: () => {
                toast.error("حدث خطأ أثناء إضافة الكتاب");
            },
        });
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto mt-20 px-6" dir="rtl">
                {/* Breadcrumb */}
                {breadcrumb && breadcrumb.length > 0 && (
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                        <Link href="/books" className="hover:text-blue-500">
                            الكتب
                        </Link>
                        {breadcrumb.map((cat, index) => (
                            <React.Fragment key={cat.id}>
                                <span className="mx-2">/</span>
                                {index === breadcrumb.length - 1 ? (
                                    <span className="text-gray-800 font-semibold">{cat.name}</span>
                                ) : (
                                    <Link
                                        href={`/books?category_id=${cat.id}`}
                                        className="hover:text-blue-500"
                                    >
                                        {cat.name}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
            <div className="max-w-4xl mx-auto mt-20 bg-white shadow-md rounded-md p-4" dir="rtl">
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
                            <Select
                                options={authorOptions}
                                onChange={handleAuthorChange}
                                placeholder="اختر المؤلف"
                                isSearchable // Enable search
                                noOptionsMessage={() => "لا توجد نتائج"} // Custom message when no options are found
                                className="text-right"
                            />
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
                            <Select
                                options={categoryOptions}
                                onChange={handleCategoryChange}
                                placeholder="اختر التصنيف"
                                isSearchable // Enable search
                                noOptionsMessage={() => "لا توجد نتائج"} // Custom message when no options are found
                                isDisabled={!!category_id} // Disable if a category_id is provided
                                className="text-right"
                            />
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
                                <option value="pending">معلق </option>
                            </select>
                            {errors.status && (
                                <span className="text-sm text-red-600 text-right">
                                    {errors.status}
                                </span>
                            )}
                        </div>
                    </div>

                  {/* Description */}
                  <div className="mt-6"       dir="rtl">
                        <label className="block text-gray-600 font-medium text-right">
                            الوصف
                        </label>
                      {/* Description */}
<div className="mt-6" dir="rtl">
    <label className="block text-gray-600 font-medium text-right">
        الوصف
    </label>
    <ReactQuill
        theme="snow"
        value={data.description}
        onChange={(value) => setData("description", value)}
        placeholder="أدخل الوصف هنا..."
        className="text-left"
        style={{ height: "300px" }} // Set the height here
        modules={{
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
            ],
        }}
        formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
        ]}
        dir="ltr" // Set the direction to RTL
    />
    {errors.description && (
        <span className="text-sm text-red-600 text-right">
            {errors.description}
        </span>
    )}
</div>
                        {errors.description && (
                            <span className="text-sm text-red-600 text-right">
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-16 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700"
                    >
                        إضافة الكتاب
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;