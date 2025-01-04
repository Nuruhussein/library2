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
        if (confirm("Are you sure you want to delete this author?")) {
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
            <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Authors
                </h1>

                <button
                    onClick={() => openModal()}
                    className="mb-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
                >
                    Add New Author
                </button>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    Book Count
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                    Actions
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
                                            className="text-yellow-600 hover:text-yellow-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(author.id)
                                            }
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
                            <h2 className="text-xl font-semibold mb-4">
                                {isEditMode ? "Edit Author" : "Add New Author"}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
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
                                        Biography
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
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500"
                                    >
                                        {isEditMode ? "Update" : "Add"}
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
