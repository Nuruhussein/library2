import React from "react";
import { useForm, router } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Edit = ({ book, categories, authors }) => {
    const { data, setData, post, errors, progress } = useForm({
        title: book.title || "",
        author_id: book.author_id || "",
        category_id: book.category_id || "",
        description: book.description || "",
        isbn: book.isbn || "",
        publication_date: book.publication_date || "",
        cover_image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/books/${book.id}`, {
            data: { ...data, _method: "put" },
            onSuccess: () => alert("Book updated successfully."),
            onError: (errors) => {
                console.error(errors);
                alert("An error occurred while updating the book.");
            },
            forceFormData: true, // Important to handle file uploads with Inertia
        });
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Edit Book
                </h1>

                {/* Display default cover image if it exists */}
                {book.cover_image && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Current Cover Image
                        </label>
                        <img
                            src={`/storage/${book.cover_image}`}
                            alt="Current Cover"
                            className="mt-1 w-32 h-48 object-cover border border-gray-300 rounded-md"
                        />
                    </div>
                )}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.title && (
                                <span className="text-red-500">
                                    {errors.title}
                                </span>
                            )}
                        </div>

                        {/* Author */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Author
                            </label>
                            <select
                                value={data.author_id}
                                onChange={(e) =>
                                    setData("author_id", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select Author</option>
                                {authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                ))}
                            </select>
                            {errors.author_id && (
                                <span className="text-red-500">
                                    {errors.author_id}
                                </span>
                            )}
                        </div>

                        {/* Category */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                value={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id && (
                                <span className="text-red-500">
                                    {errors.category_id}
                                </span>
                            )}
                        </div>

                        {/* ISBN */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                ISBN
                            </label>
                            <input
                                type="text"
                                value={data.isbn}
                                onChange={(e) =>
                                    setData("isbn", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.isbn && (
                                <span className="text-red-500">
                                    {errors.isbn}
                                </span>
                            )}
                        </div>

                        {/* Publication Date */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Publication Date
                            </label>
                            <input
                                type="date"
                                value={data.publication_date}
                                onChange={(e) =>
                                    setData("publication_date", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.publication_date && (
                                <span className="text-red-500">
                                    {errors.publication_date}
                                </span>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Cover Image
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData("cover_image", e.target.files[0])
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.cover_image && (
                                <span className="text-red-500">
                                    {errors.cover_image}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-4 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.description && (
                                <span className="text-red-500">
                                    {errors.description}
                                </span>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
                    >
                        Update Book
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

export default Edit;
