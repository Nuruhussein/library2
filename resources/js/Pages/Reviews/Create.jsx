// resources/js/Pages/Reviews/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const ReviewCreate = ({ books }) => {
    const { data, setData, post, reset, errors } = useForm({
        reviewer: "",
        comment: "",
        book_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.add"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Dashboard>
            <div className="container mx-auto w-[1022px] mt-16 px-6">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        Add a New Review
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Book</label>
                            <select
                                value={data.book_id}
                                onChange={(e) =>
                                    setData("book_id", e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            >
                                <option value="">Select a book</option>
                                {books.map((book) => (
                                    <option key={book.id} value={book.id}>
                                        {book.title}
                                    </option>
                                ))}
                            </select>
                            {errors.book_id && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.book_id}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Reviewer Name
                            </label>
                            <input
                                type="text"
                                value={data.reviewer}
                                onChange={(e) =>
                                    setData("reviewer", e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Your name"
                            />
                            {errors.reviewer && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.reviewer}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Comment
                            </label>
                            <textarea
                                value={data.comment}
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                                className="w-full h-44 p-2 border border-gray-300 rounded mt-1"
                                placeholder="Write your review here"
                            ></textarea>
                            {errors.comment && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.comment}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default ReviewCreate;
