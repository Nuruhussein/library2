import React, { useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Index = ({ categories }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data, setData, post, put, delete: destroy, errors } = useForm({
        name: "",
        description: "",
        image: null,
    });

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
            onSuccess: () => handleModalClose(),
        });
    };

    // Handle form submission for editing a category
    const handleEditSubmit = (e) => {
        e.preventDefault();
        post(`/admin/categories/${selectedCategory.id}`, {
            data: { ...data, _method: "put" },
            onSuccess: () => handleEditModalClose(),
            // onSuccess: () => alert("Book updated successfully."),
            onError: () => alert("An error occurred while updating the book."),
            forceFormData: true,
        
        });
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     post(`/books/${book.id}`, {
    //         data: { ...data, _method: "put" },
    //         onSuccess: () => alert("Book updated successfully."),
    //         onError: () => alert("An error occurred while updating the book."),
    //         forceFormData: true,
    //     });
    // };

    
    // Handle category deletion
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            destroy(`/admin/categories/${id}`);
        }
    };

    return (
        <Dashboard>
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mr-32 mt-20">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Categories
                </h1>

                {/* Add New Category Button */}
                <div className="mb-4">
                    <button
                        onClick={handleModalOpen}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        <FaPlus className="mr-2" /> Add New Category
                    </button>
                </div>

                {/* Categories Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">
                                    Image
                                </th>
                                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">
                                    Name
                                </th>
                                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">
                                    Description
                                </th>
                                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">
                                    Actions
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
                                            <span className="text-gray-500">No Image</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 border-b text-sm text-gray-700">
                                        {category.name}
                                    </td>
                                    <td className="px-6 py-4 border-b text-sm text-gray-700">
                                        {category.description || "No description available."}
                                    </td>
                                    <td className="px-6 py-4 flex text-red-500 border-b text-sm text-gray-700 space-x-2">
                                        <Link
                                            href={`/admin/categories/${category.id}`}
                                            // className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-500"
                                        >
                                            <FaEye className="mr-1 text-blue-600" /> 
                                        </Link>
                                        <button
                                            onClick={() => handleEditModalOpen(category)}
                                            // className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-500"
                                        >
                                            <FaEdit className="mr-1" /> 
                                        </button>
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            // className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-500"
                                        >
                                            <FaTrash className="mr-1" /> 
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
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Add Category
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
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
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="w-full p-2 border rounded mt-1"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image</label>
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
                                    className="px-4 py-2 bg-gray-300 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                                >
                                    Add Category
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
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Edit Category
                        </h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
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
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="w-full p-2 border rounded mt-1"
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image</label>
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
                                    className="px-4 py-2 bg-gray-300 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                                >
                                    Update Category
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