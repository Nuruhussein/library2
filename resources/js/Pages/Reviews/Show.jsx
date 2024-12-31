// resources/js/Pages/Reviews/Show.jsx

import React from "react";
import Dashboard from "../Dashboard";

const ReviewShow = ({ book, review }) => {
    return (
        <Dashboard>
            <div className="container mx-auto w-[1022px] mt-16 px-6">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                        Review for "{book.title}"
                    </h1>
                    <div className="border-b border-gray-200 py-4">
                        <p className="text-xl font-bold text-gray-900">
                            {review.reviewer || "Anonymous"}
                        </p>
                        <p className="text-gray-700 mt-2">{review.comment}</p>
                    </div>
                    <button
                        onClick={() => history.back()}
                        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                    >
                        Back to Reviews
                    </button>
                </div>
            </div>
        </Dashboard>
    );
};

export default ReviewShow;
