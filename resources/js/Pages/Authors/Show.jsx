import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ author }) => (
    <Dashboard>
        <div className="max-w-4xl mt-20 mx-auto p-6 bg-white shadow-md rounded-lg ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {author.name}
            </h1>

            <p className="text-gray-700 mb-6">
                <strong className="font-medium">Biography:</strong>{" "}
                {author.bio || "No biography available."}
            </p>

            {author.books && author.books.length > 0 ? (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Books by {author.name}:
                    </h2>
                    <ul className="space-y-3">
                        {author.books.map((book) => (
                            <li key={book.id} className="text-gray-700">
                                <strong className="text-lg font-medium">
                                    {book.title}
                                </strong>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-gray-600 mt-8">
                    No books found for this author.
                </p>
            )}
        </div>
    </Dashboard>
);

export default Show;
