import React from "react";
import Dashboard from "../Dashboard";

const Show = ({ category }) => {

console.log(category);
    return(
    <Dashboard>
        <div className="container max-w-6xl text-center  ml-52 mt-16 px-4 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Category Image */}
                {category.image ? (
                    <img
                        src={`/storage/${category.image}`}
                        alt={category.name}
                        className="w-full h-64 object-cover"
                    />
                ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                        No Image Available
                    </div>
                )}

                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                        {category.name}

                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        <span className="font-semibold text-gray-900">Description:</span> {" "}
                        {category.description || "No description available."}
                    </p>

                    {category.books && category.books.length > 0 ? (
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Books in {category.name}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.books.map((book) => (
                                    <div
                                        key={book.id}
                                        className="bg-gray-100 rounded-lg shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300"
                                    >
                                        {book.cover_image ? (
                                            <img
                                                src={`/storage/${book.cover_image}`}
                                                alt={book.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900 truncate mb-2">
                                                {book.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {book.author ? book.author.name : "Unknown Author"}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-600 mt-8 text-center">
                            No books found in this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    </Dashboard>)
};

export default Show;
