// resources/js/Pages/Reviews/Index.jsx

import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Dashboard from "../Dashboard";

const ReviewsIndex = ({ book, reviews }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form handling for adding a review
    const { data, setData, post, reset, errors } = useForm({
        reviewer: "",
        comment: "",
        book_id: book.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.store", { book: book.id }), {
            onSuccess: () => {
                reset();
                setIsModalOpen(false);
            },
        });
    };

    return (
        <Dashboard>
            <div className="container mx-auto w-[1022px] mt-16 px-6">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        Reviews for {book.title}
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-500"
                    >
                        Add Review
                    </button>

                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-200 py-4"
                            >
                                <Link
                                    href={route("reviews.show", {
                                        book: book.id,
                                        review: review.id,
                                    })}
                                    className="text-blue-600 hover:underline"
                                >
                                    <p className="font-bold text-gray-900">
                                        {review.reviewer || "Anonymous"}
                                    </p>
                                </Link>
                                <p className="text-gray-700 mt-1">
                                    {review.comment}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 mt-6">
                            No reviews for this book yet.
                        </p>
                    )}
                </div>

                {/* Modal for adding review */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 p-44 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Add Review
                            </h2>
                            <form onSubmit={handleSubmit}>
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
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                    >
                                        Submit Review
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

export default ReviewsIndex;
