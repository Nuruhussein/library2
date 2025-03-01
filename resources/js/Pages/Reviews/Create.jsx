import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";
import { toast } from "react-hot-toast";
import Select from "react-select"; // Import react-select
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ReviewCreate = ({ books }) => {
    const { data, setData, post, reset, errors } = useForm({
        reviewer: "",
        comment: "",
        book_id: "",
    });

    // Format books for react-select
    const bookOptions = books.map((book) => ({
        value: book.id,
        label: book.title,
    }));

    // Handle book selection
    const handleBookChange = (selectedOption) => {
        setData("book_id", selectedOption ? selectedOption.value : "");
    };

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
                            <Select
                                options={bookOptions}
                                value={bookOptions.find((option) => option.value === data.book_id)}
                                onChange={handleBookChange}
                                placeholder="اختر كتابًا"
                                isSearchable // Enable search
                                noOptionsMessage={() => "لا توجد نتائج"} // Custom message when no options are found
                                className="text-right"
                            />
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

                        {/* Comment */}
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                التعليق
                            </label>
                            <ReactQuill
                                theme="snow"
                                value={data.comment}
                                onChange={(value) => setData("comment", value)}
                                placeholder="اكتب مراجعتك هنا"
                                className="text-right"
                                style={{ height: "200px" }} // Set the height here
                                dir="rtl" // Set the direction to RTL
                                modules={{
                                    toolbar: [
                                        [{ header: [1, 2, 3, false] }],
                                        ["bold", "italic", "underline", "strike"],
                                        [{ list: "ordered" }, { list: "bullet" }],
                                        ["link", "image"],
                                        ["clean"],
                                    ],
                                }}
                                formats={[
                                    "header",
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "list",
                                    "bullet",
                                    "link",
                                    "image",
                                ]}
                            />
                            {errors.comment && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.comment}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-600 mt-16 text-white px-4 py-2 rounded hover:bg-blue-500"
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