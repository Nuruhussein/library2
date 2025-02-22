import React from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Edit = ({ book, categories, authors }) => {
    const { data, setData, post, errors } = useForm({
        title: book.title || "",
        author_id: book.author_id || "",
        category_id: book.category_id || "",
        description: book.description || "",
        isbn: book.isbn || "",
        publication_date: book.publication_date || "",
        cover_image: null,
        publisher: book.publisher || "",
        researcher: book.researcher || "",
        link_to_website: book.link_to_website || "",
        page_number: book.page_number || "",
        status: book.status || "draft",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/books/${book.id}`, {
            data: { ...data, _method: "put" },
            onSuccess: () => alert("تم تحديث الكتاب بنجاح."),
            onError: () => alert("حدث خطأ أثناء تحديث الكتاب."),
            forceFormData: true,
        });
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg" dir="rtl">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-right">تعديل الكتاب</h1>
                {book.cover_image && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 text-right">صورة الغلاف الحالية</label>
                        <img
                            src={`/storage/${book.cover_image}`}
                            alt="صورة الغلاف الحالية"
                            className="mt-1 w-32 h-48 object-cover border border-gray-300 rounded-md"
                        />
                    </div>
                )}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <InputField
                            label="العنوان"
                            type="text"
                            value={data.title}
                            setData={(value) => setData("title", value)}
                            error={errors.title}
                        />

                        {/* Author */}
                        <SelectField
                            label="المؤلف"
                            value={data.author_id}
                            setData={(value) => setData("author_id", value)}
                            options={authors}
                            error={errors.author_id}
                        />

                        {/* Category */}
                        <SelectField
                            label="التصنيف"
                            value={data.category_id}
                            setData={(value) => setData("category_id", value)}
                            options={categories}
                            error={errors.category_id}
                        />

                        {/* ISBN */}
                        <InputField
                            label="الرقم الدولي (ISBN)"
                            type="text"
                            value={data.isbn}
                            setData={(value) => setData("isbn", value)}
                            error={errors.isbn}
                        />

                        {/* Publication Date */}
                        <InputField
                            label="تاريخ النشر"
                            type="date"
                            value={data.publication_date}
                            setData={(value) => setData("publication_date", value)}
                            error={errors.publication_date}
                        />

                        {/* Publisher */}
                        <InputField
                            label="الناشر"
                            type="text"
                            value={data.publisher}
                            setData={(value) => setData("publisher", value)}
                            error={errors.publisher}
                        />

                        {/* Researcher */}
                        <InputField
                            label="الباحث"
                            type="text"
                            value={data.researcher}
                            setData={(value) => setData("researcher", value)}
                            error={errors.researcher}
                        />

                        {/* Link to Website */}
                        <InputField
                            label="رابط خارجي"
                            type="url"
                            value={data.link_to_website}
                            setData={(value) => setData("link_to_website", value)}
                            error={errors.link_to_website}
                        />

                        {/* Page Number */}
                        <InputField
                            label="عدد الصفحات"
                            type="number"
                            value={data.page_number}
                            setData={(value) => setData("page_number", value)}
                            error={errors.page_number}
                        />

                        {/* Status */}
                        <SelectField
                            label="الحالة"
                            value={data.status}
                            setData={(value) => setData("status", value)}
                            options={[
                                { id: "draft", name: "مسودة" },
                                { id: "post", name: "منشور" },
                            ]}
                            error={errors.status}
                        />

                        {/* Cover Image */}
                        <FileField
                            label="صورة الغلاف"
                            setData={(file) => setData("cover_image", file)}
                            error={errors.cover_image}
                        />

                        {/* Description */}
                        <TextareaField
                            label="الوصف"
                            value={data.description}
                            setData={(value) => setData("description", value)}
                            error={errors.description}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
                    >
                        تحديث الكتاب
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

// Helper components for inputs
const InputField = ({ label, type, value, setData, error }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 text-right">{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => setData(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right"
        />
        {error && <span className="text-red-500 text-right">{error}</span>}
    </div>
);

const SelectField = ({ label, value, setData, options, error }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 text-right">{label}</label>
        <select
            value={value}
            onChange={(e) => setData(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right"
        >
            <option value="">اختر</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
        {error && <span className="text-red-500 text-right">{error}</span>}
    </div>
);

const TextareaField = ({ label, value, setData, error }) => (
    <div className="mb-4 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 text-right">{label}</label>
        <textarea
            value={value}
            onChange={(e) => setData(e.target.value)}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right"
        />
        {error && <span className="text-red-500 text-right">{error}</span>}
    </div>
);

const FileField = ({ label, setData, error }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 text-right">{label}</label>
        <input
            type="file"
            onChange={(e) => setData(e.target.files[0])}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error && <span className="text-red-500 text-right">{error}</span>}
    </div>
);

export default Edit;