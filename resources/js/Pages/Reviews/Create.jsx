import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { toast } from "react-hot-toast";
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
                toast.success("تمت إضافة المراجعة بنجاح!");
                reset();
            },
        });
    };

    return (
        <Dashboard>
            <div className="container mx-auto w-[1022px] mt-16 px-6" dir="rtl">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        إضافة مراجعة جديدة
                    </h1>

                    <form onSubmit={handleSubmit}>
                        {/* Book Selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700">الكتاب</label>
                            <select
                                value={data.book_id}
                                onChange={(e) =>
                                    setData("book_id", e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            >
                                <option value="">اختر كتابًا</option>
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

                        {/* Reviewer Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                اسم المراجع
                            </label>
                            <input
                                type="text"
                                value={data.reviewer}
                                onChange={(e) =>
                                    setData("reviewer", e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="اسمك"
                            />
                            {errors.reviewer && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.reviewer}
                                </p>
                            )}
                        </div>

                        {/* Comment */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                التعليق
                            </label>
                            <textarea
                                value={data.comment}
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                                className="w-full h-44 p-2 border border-gray-300 rounded mt-1 whitespace-pre-line"
                                placeholder="اكتب مراجعتك هنا"
                            ></textarea>
                            {errors.comment && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.comment}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                        >
                            إرسال المراجعة
                        </button>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default ReviewCreate;