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
        external_link: "",
        page_number: "",
        status: "draft", // Default to "draft"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/books");
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto mt-20 bg-white shadow-md rounded-md p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    Add a New Book
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                            {errors.title && (
                                <span className="text-sm text-red-600">
                                    {errors.title}
                                </span>
                            )}
                        </div>

                        {/* Author */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Author
                            </label>
                            <select
                                value={data.author_id}
                                onChange={(e) => setData("author_id", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Select Author</option>
                                {authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                ))}
                            </select>
                            {errors.author_id && (
                                <span className="text-sm text-red-600">
                                    {errors.author_id}
                                </span>
                            )}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Category
                            </label>
                            <select
                                value={data.category_id}
                                onChange={(e) => setData("category_id", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id && (
                                <span className="text-sm text-red-600">
                                    {errors.category_id}
                                </span>
                            )}
                        </div>

                       {/* Description */}
<div>
    <label className="block text-gray-600 font-medium">
        Description
    </label>
    <textarea
        value={data.description}
        onChange={(e) => setData("description", e.target.value)}
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        rows={3}
        style={{ whiteSpace: "pre-wrap" }} // Ensures formatting is visible
    />
    {errors.description && (
        <span className="text-sm text-red-600">
            {errors.description}
        </span>
    )}
</div>


                        {/* ISBN */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                ISBN
                            </label>
                            <input
                                type="text"
                                value={data.isbn}
                                onChange={(e) => setData("isbn", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.isbn && (
                                <span className="text-sm text-red-600">
                                    {errors.isbn}
                                </span>
                            )}
                        </div>

                        {/* Publication Date */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Publication Date
                            </label>
                            <input
                                type="date"
                                value={data.publication_date}
                                onChange={(e) => setData("publication_date", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.publication_date && (
                                <span className="text-sm text-red-600">
                                    {errors.publication_date}
                                </span>
                            )}
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Cover Image
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setData("cover_image", e.target.files[0])}
                                className="mt-1 w-full"
                            />
                            {errors.cover_image && (
                                <span className="text-sm text-red-600">
                                    {errors.cover_image}
                                </span>
                            )}
                        </div>

                        {/* Additional Columns */}
                        {/* Publisher */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Publisher
                            </label>
                            <input
                                type="text"
                                value={data.publisher}
                                onChange={(e) => setData("publisher", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.publisher && (
                                <span className="text-sm text-red-600">
                                    {errors.publisher}
                                </span>
                            )}
                        </div>

                        {/* Researcher */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Researcher
                            </label>
                            <input
                                type="text"
                                value={data.researcher}
                                onChange={(e) => setData("researcher", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.researcher && (
                                <span className="text-sm text-red-600">
                                    {errors.researcher}
                                </span>
                            )}
                        </div>

                        {/* External Link */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Link to Other Website
                            </label>
                            <input
                                type="url"
                                value={data.external_link}
                                onChange={(e) => setData("external_link", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.external_link && (
                                <span className="text-sm text-red-600">
                                    {errors.external_link}
                                </span>
                            )}
                        </div>

                        {/* Page Number */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Page Number
                            </label>
                            <input
                                type="number"
                                value={data.page_number}
                                onChange={(e) => setData("page_number", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            {errors.page_number && (
                                <span className="text-sm text-red-600">
                                    {errors.page_number}
                                </span>
                            )}
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-gray-600 font-medium">
                                Status
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) => setData("status", e.target.value)}
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="draft">Draft</option>
                                <option value="post">Post</option>
                            </select>
                            {errors.status && (
                                <span className="text-sm text-red-600">
                                    {errors.status}
                                </span>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;
