import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Index = ({ authors }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState(null);

    const { data, setData, post, put, errors, reset } = useForm({
        name: "",
        bio: "",
    });
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("هل أنت متأكد أنك تريد حذف هذا المؤلف؟")) {
            destroy(`/authors/${id}`);
        }
    };

    const openModal = (author = null) => {
        setIsModalOpen(true);
        setIsEditMode(!!author);
        if (author) {
            setEditingAuthor(author);
            setData({ name: author.name, bio: author.bio });
        } else {
            reset();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        reset();
        setEditingAuthor(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode && editingAuthor) {
            put(`/authors/${editingAuthor.id}`, {
                onSuccess: () => closeModal(),
            });
        } else {
            post("/authors", {
                onSuccess: () => closeModal(),
            });
        }
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg" dir="rtl">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    المؤلفون
                </h1>

                <button
                    onClick={() => openModal()}
                    className="mb-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
                >
                    إضافة مؤلف جديد
                </button>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    الاسم
                                </th>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    عدد الكتب
                                </th>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author) => (
                                <tr
                                    key={author.id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                        {author.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                        {author.books_count}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                        <button
                                            onClick={() => openModal(author)}
                                            className="text-yellow-600 hover:text-yellow-900 ml-4"
                                        >
                                            تعديل
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(author.id)
                                            }
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            حذف
                                        </button>
                                            <a href={`/admin/authors/${author.id}`}
                                            className="text-blue-500 mx-4 hover:text-red-900"
                                        >
                                            التفاصيل
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full" dir="rtl">
                            <h2 className="text-xl font-semibold mb-4">
                                {isEditMode ? "تعديل المؤلف" : "إضافة مؤلف جديد"}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        الاسم
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="bio"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        السيرة الذاتية
                                    </label>
                                    <textarea
                                        id="bio"
                                        value={data.bio}
                                        onChange={(e) =>
                                            setData("bio", e.target.value)
                                        }
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></textarea>
                                    {errors.bio && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.bio}
                                        </p>
                                    )}
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                                    >
                                        إلغاء
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500"
                                    >
                                        {isEditMode ? "تحديث" : "إضافة"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Dashboard>
    );
};

export default Index;