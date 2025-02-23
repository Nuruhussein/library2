// resources/js/Pages/Reviews/Index.jsx

import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { router } from "@inertiajs/react";

const ReviewsIndex = ({ book, reviews }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentReview, setCurrentReview] = useState(null);
    const [expandedReview, setExpandedReview] = useState(null); // State to track which review is expanded

    // Form handling for adding/editing a review
    const { data, setData, post, put, reset, errors } = useForm({
        reviewer: "",
        comment: "",
        book_id: book.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            // Update review
            put(route("reviews.update", { book: book.id, review: currentReview.id }), {
                onSuccess: () => {
                    reset();
                    setIsModalOpen(false);
                    setIsEditMode(false);
                    setCurrentReview(null);
                },
            });
        } else {
            // Add new review
            post(route("reviews.store", { book: book.id }), {
                onSuccess: () => {
                    reset();
                    setIsModalOpen(false);
                },
            });
        }
    };

    const handleDelete = (reviewId) => {
        if (confirm("هل أنت متأكد من أنك تريد حذف هذا التقييم؟")) {
            router.delete(route("reviews.destroy", { review: reviewId, book: book.id }));
        }
    };

    const handleEdit = (review) => {
        setIsEditMode(true);
        setCurrentReview(review);
        setData({ reviewer: review.reviewer, comment: review.comment, book_id: book.id });
        setIsModalOpen(true);
    };

    const toggleAccordion = (reviewId) => {
        setExpandedReview(expandedReview === reviewId ? null : reviewId);
    };

    return (
        <Dashboard>
            <div className="container mx-auto w-[1022px] mt-16 px-6" dir="rtl">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        تقييمات كتاب {book.title}
                    </h1>
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setIsEditMode(false);
                            reset();
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-500"
                    >
                        إضافة تقييم
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
                                        {review.reviewer || "مجهول"}
                                    </p>
                                </Link>
                                <div className="text-gray-700 break-words">
                                    {review.comment ? (
                                        <>
                                            <p>
                                                {expandedReview === review.id
                                                    ? review.comment
                                                    : `${review.comment.slice(0, 40)}${
                                                          review.comment.length > 40 ? "..." : ""
                                                      }`}
                                            </p>
                                            {review.comment.length > 40 && (
                                                <button
                                                    onClick={() => toggleAccordion(review.id)}
                                                    className="text-blue-600 hover:underline mt-1"
                                                >
                                                    {expandedReview === review.id
                                                        ? "عرض أقل"
                                                        : "عرض المزيد"}
                                                </button>
                                            )}
                                            {expandedReview === review.id && (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: review.comment.replace(/\n/g, "<br />"),
                                                    }}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        "لا يوجد تعليق متاح."
                                    )}
                                </div>
                                <div className="flex space-x-2 mt-2 flex-row-reverse">
                                    <button
                                        onClick={() => handleEdit(review)}
                                        className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500"
                                    >
                                        تعديل
                                    </button>
                                    <button
                                        onClick={() => handleDelete(review.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                                    >
                                        حذف
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 mt-6">
                            لا توجد تقييمات لهذا الكتاب بعد.
                        </p>
                    )}
                </div>

                {/* Modal for adding/editing review */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-gray-800 p-44 bg-opacity-50 flex justify-center items-center z-50"
                        dir="rtl"
                    >
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                {isEditMode ? "تعديل التقييم" : "إضافة تقييم"}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">اسم المقيم</label>
                                    <input
                                        type="text"
                                        value={data.reviewer}
                                        onChange={(e) => setData("reviewer", e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mt-1 text-right"
                                        placeholder="اسمك"
                                    />
                                    {errors.reviewer && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {errors.reviewer}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">التعليق</label>
                                    <textarea
                                        value={data.comment}
                                        onChange={(e) => setData("comment", e.target.value)}
                                        className="w-full h-44 p-2 border border-gray-300 rounded mt-1 text-right"
                                        placeholder="اكتب تقييمك هنا"
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
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2"
                                    >
                                        إلغاء
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                    >
                                        {isEditMode ? "تحديث التقييم" : "إرسال التقييم"}
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