import React from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import Select from "react-select";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import toast from "react-hot-toast";
const Edit = ({ book, categories, authors }) => {
    const { data, setData, post, errors } = useForm({
        title: book.title || "",
        author_id: book.author_id || "",
        category_id: book.category_id || "",
        description: book.description || "", // This will store the HTML content
        isbn: book.isbn || "",
        publication_date: book.publication_date || "",
        cover_image: null,
        publisher: book.publisher || "",
        researcher: book.researcher || "",
        link_to_website: book.link_to_website || "",
        page_number: book.page_number || "",
        status: book.status || "draft",
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

    // Handle status selection
    const handleStatusChange = (e) => {
        setData("status", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/books/${book.id}`, {
            data: { ...data, _method: "put" },
            // onSuccess: () => alert("تم تحديث الكتاب بنجاح."),
            // onError: () => alert("حدث خطأ أثناء تحديث الكتاب."),
            onSuccess: () => {
                toast.success("تم تحديث الكتاب بنجاح");
            },
            onError: () => {
                toast.error("حدث خطأ أثناء تحديث الكتاب");
            },
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
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 text-right">المؤلف</label>
                            <Select
                                options={authorOptions}
                                value={authorOptions.find((option) => option.value === data.author_id)}
                                onChange={handleAuthorChange}
                                placeholder="اختر المؤلف"
                                isSearchable
                                noOptionsMessage={() => "لا توجد نتائج"}
                                className="text-right"
                            />
                            {errors.author_id && (
                                <span className="text-sm text-red-500 text-right">{errors.author_id}</span>
                            )}
                        </div>

                        {/* Category */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 text-right">التصنيف</label>
                            <Select
                                options={categoryOptions}
                                value={categoryOptions.find((option) => option.value === data.category_id)}
                                onChange={handleCategoryChange}
                                placeholder="اختر التصنيف"
                                isSearchable
                                noOptionsMessage={() => "لا توجد نتائج"}
                                className="text-right"
                            />
                            {errors.category_id && (
                                <span className="text-sm text-red-500 text-right">{errors.category_id}</span>
                            )}
                        </div>

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
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 text-right">الحالة</label>
                            <select
                                value={data.status}
                                onChange={handleStatusChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right"
                            >
                                <option value="draft">مسودة</option>
                                <option value="post">منشور</option>
                                <option value="pending">معلق </option>
                            </select>
                            {errors.status && (
                                <span className="text-sm text-red-500 text-right">{errors.status}</span>
                            )}
                        </div>

                        {/* Cover Image */}
                        <FileField
                            label="صورة الغلاف"
                            setData={(file) => setData("cover_image", file)}
                            error={errors.cover_image}
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 text-right">الوصف</label>
                        <ReactQuill
                            theme="snow"
                            value={data.description}
                            onChange={(value) => setData("description", value)}
                            placeholder="أدخل الوصف هنا..."
                            className="text-right"
                            style={{ height: "300px" }} // Set the height here
                            dir="rtl" // Set the direction to RTL
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
                        />
                        {errors.description && (
                            <span className="text-sm text-red-500 text-right">{errors.description}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 mt-8 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
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