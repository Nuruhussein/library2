import React, { useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast"; // Import toast from react-hot-toast
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const Index = ({ categories }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data, setData, post, put, delete: destroy, errors } = useForm({
        name: "",
        description: "",
        image: null,
    });

    // Rich Text Editor Modules
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
        ],
    };

    // Rich Text Editor Formats
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
    ];

    // Open modal for adding a new category
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        setData({ name: "", description: "", image: null });
    };

    // Open modal for editing a category
    const handleEditModalOpen = (category) => {
        setSelectedCategory(category);
        setData({
            name: category.name,
            description: category.description,
            image: null,
        });
        setEditModalOpen(true);
    };
    const handleEditModalClose = () => {
        setEditModalOpen(false);
        setSelectedCategory(null);
        setData({ name: "", description: "", image: null });
    };

    // Handle form submission for adding a new category
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/categories", {
            onSuccess: () => {
                toast.success("تم إنشاء التصنيف بنجاح");
                handleModalClose();
            },
            onError: () => {
                toast.error("حدث خطأ أثناء إنشاء التصنيف");
            },
        });
    };

    // Handle form submission for editing a category
    const handleEditSubmit = (e) => {
        e.preventDefault();
        post(`/admin/categories/${selectedCategory.id}`, {
            data: { ...data, _method: "put" },
            onSuccess: () => {
                toast.success("تم تحديث التصنيف بنجاح");
                handleEditModalClose();
            },
            onError: () => {
                toast.error("حدث خطأ أثناء تحديث التصنيف");
            },
            forceFormData: true,
        });
    };

    // Handle category deletion
    const handleDelete = (id) => {
        if (confirm("هل أنت متأكد أنك تريد حذف هذا التصنيف؟")) {
            destroy(`/admin/categories/${id}`, {
                onSuccess: () => {
                    toast.success("تم حذف التصنيف بنجاح");
                },
                onError: () => {
                    toast.error("حدث خطأ أثناء حذف التصنيف");
                },
            });
        }
    };

    return (
        <Dashboard>
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mr-32 mt-20" dir="rtl">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    التصنيفات
                </h1>

                {/* Add New Category Button */}
                <div className="mb-4">
                    <button
                        onClick={handleModalOpen}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        <FaPlus className="ml-2" /> إضافة تصنيف جديد
                    </button>
                </div>

                {/* Categories Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 border-b text-right text-sm font-medium text-gray-700">
                                    الصورة
                                </th>
                                <th className="px-6 py-3 border-b text-right text-sm font-medium text-gray-700">
                                    الاسم
                                </th>
                                <th className="px-6 py-3 border-b text-right text-sm font-medium text-gray-700">
                                    الوصف
                                </th>
                                <th className="px-6 py-3 border-b text-right text-sm font-medium text-gray-700">
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 border-b">
                                        {category.image ? (
                                            <img
                                                src={`/storage/${category.image}`}
                                                alt={category.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        ) : (
                                            <span className="text-gray-500">لا توجد صورة</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 border-b text-sm text-gray-700">
                                        {category.name}
                                    </td>
                                    <td className="px-6 py-4 border-b text-sm text-gray-700">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    category.description || "لا يوجد وصف متاح.",
                                            }}
                                        />
                                    </td>
                                    <td className="px-6 py-4 flex text-red-500 border-b text-sm gap-4 space-x-2">
                                        <Link
                                            href={`/admin/categories/${category.id}`}
                                        >
                                            <FaEye className="text-blue-600" />
                                        </Link>
                                        <button
                                            onClick={() => handleEditModalOpen(category)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Category Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={handleModalClose}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                        dir="rtl"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            إضافة تصنيف جديد
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">الاسم</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    className="w-full p-2 border rounded mt-1"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">الوصف</label>
                                <ReactQuill
                                    value={data.description}
                                    onChange={(value) => setData("description", value)}
                                    modules={modules}
                                    formats={formats}
                                    className="bg-white"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">الصورة</label>
                                <input
                                    type="file"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                    className="w-full p-2 border rounded mt-1"
                                />
                                {errors.image && (
                                    <p className="text-red-500 text-sm">{errors.image}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="px-4 py-2 bg-gray-300 rounded ml-2"
                                >
                                    إلغاء
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                                >
                                    إضافة التصنيف
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Category Modal */}
            {isEditModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={handleEditModalClose}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                        dir="rtl"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            تعديل التصنيف
                        </h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">الاسم</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    className="w-full p-2 border rounded mt-1"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">الوصف</label>
                                <ReactQuill
                                    value={data.description}
                                    onChange={(value) => setData("description", value)}
                                    modules={modules}
                                    formats={formats}
                                    className="bg-white"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">الصورة</label>
                                <input
                                    type="file"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                    className="w-full p-2 border rounded mt-1"
                                />
                                {errors.image && (
                                    <p className="text-red-500 text-sm">{errors.image}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleEditModalClose}
                                    className="px-4 py-2 bg-gray-300 rounded ml-2"
                                >
                                    إلغاء
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                                >
                                    تحديث التصنيف
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Dashboard>
    );
};

export default Index;