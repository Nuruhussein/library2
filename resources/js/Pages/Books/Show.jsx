import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ book }) => (
    <Dashboard>
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-20">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                {/* Cover Image */}
                {book.cover_image ? (
                    <img
                        src={`/storage/${book.cover_image}`}
                        alt={`${book.title} cover`}
                        className="w-full md:w-64 h-auto rounded-md shadow-lg object-cover"
                    />
                ) : (
                    <div className="w-full md:w-64 h-64 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}

                {/* Book Info */}
                <div className="flex-1 space-y-4 mt-6 md:mt-0">
                    <h1 className="text-4xl font-bold text-gray-900">{book.title || "Untitled"}</h1>
                    <p className="text-lg text-gray-600">
                        <strong>Author:</strong> {book.author?.name || "Unknown"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Category:</strong> {book.category?.name || "Uncategorized"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>ISBN:</strong> {book.isbn || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Publication Date:</strong>{" "}
                        {book.publication_date
                            ? new Date(book.publication_date).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>
            </div>

            {/* Additional Details */}
            <div className="mt-8 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-700 break-words">
                        {book.description ? (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: book.description.replace(/\n/g, "<br />"),
                                }}
                            />
                        ) : (
                            "No description available."
                        )}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-lg text-gray-600">
                        <strong>Publisher:</strong> {book.publisher || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Researcher:</strong> {book.researcher || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Page Number:</strong> {book.page_number || "N/A"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Status:</strong> {book.status || "Draft"}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Website Link:</strong>{" "}
                        {book.link_to_website ? (
                            <a
                                href={book.link_to_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Visit Website
                            </a>
                        ) : (
                            "N/A"
                        )}
                    </p>
                </div>
            </div>
        </div>
    </Dashboard>
);

export default Show;
