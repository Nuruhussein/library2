import React, { useState } from "react";
// import { Link, useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { FaPlus } from "react-icons/fa";
import { Link, router,useForm, usePage } from "@inertiajs/react";

const Index = ({ categories }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { data, setData, post, delete: destroy, errors } = useForm({
        name: "",
        description: "",
        image: null,
    });

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        setData({ name: "", description: "", image: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/categories", {
            onSuccess: () => handleModalClose(),
        });
    };

    // const handleDelete = (id) => {
    //     if (confirm("Are you sure you want to delete this category?")) {
    //         Inertia.delete(`/categories/${id}`, {
    //             onSuccess: () => alert("Category deleted successfully."),
    //         });
    //     }
    // };
    
        // Delete book function
        const handleDelete = (id) => {
            if (confirm("Are you sure you want to delete this book?")) {
                // Send delete request using Inertia
                router.delete(route("categories.destroy", id));
                // router.post("/users", values);
            }
        };

    return (
        <Dashboard>
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Categories
                </h1>

                <div className="mb-4">
                    <button
                        onClick={handleModalOpen}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        <FaPlus className="mr-2" /> Add New Category
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b">Image</th>
                                <th className="px-6 py-3 border-b">Name</th>
                                <th className="px-6 py-3 border-b">Description</th>
                                <th className="px-6 py-3 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b text-center">
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
                                    <td className="px-6 py-4 border-b text-center">
                                        <Link
                                            href={`/categories/${category.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {category.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 border-b text-center">
                                        {category.description || "No description available."}
                                    </td>
                                    <td className="px-6 py-4 border-b text-center space-x-2">
                                        <Link
                                            href={`/categories/${category.id}`}
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                                        >
                                            Show
                                        </Link>
                                        <button
        onClick={() => handleDelete(category.id)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
    >
        Delete
    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

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
        </Dashboard>
    );
};

export default Index;
