import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ book }) => (
    <Dashboard>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {book.title}
            </h1>

            <div className="text-gray-700 mb-4">
                <p className="mb-2">
                    <strong className="font-medium">Author:</strong>{" "}
                    {book.author.name}
                </p>
                <p className="mb-2">
                    <strong className="font-medium">Category:</strong>{" "}
                    {book.category.name}
                </p>
                <p className="mb-2 break-words">
                    <strong className="font-medium">Description:</strong>{" "}
                    {book.description || "No description available."}
                </p>
                <p className="mb-2">
                    <strong className="font-medium">ISBN:</strong>{" "}
                    {book.isbn || "N/A"}
                </p>
                <p className="mb-2">
                    <strong className="font-medium">Publication Date:</strong>{" "}
                    {book.publication_date || "N/A"}
                </p>
            </div>

            {book.cover_image ? (
                <div className="mt-6">
                    <img
                        src={`/storage/${book.cover_image}`}
                        alt={`${book.title} cover`}
                        className="w-52 h-auto rounded-md shadow-md"
                    />
                </div>
            ) : (
                <p className="text-gray-600 mt-6">No cover image available.</p>
            )}
        </div>
    </Dashboard>
);

export default Show;
