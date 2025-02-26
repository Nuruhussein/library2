import React from "react";
import Dashboard from "../Dashboard";
import { useForm, Link } from "@inertiajs/react";

const Edit = ({ category, breadcrumb }) => {
    // Pre-fill the form with existing category data
    const { data, setData, put, processing, errors } = useForm({
        name: category.name || "",
        description: category.description || "",
        parent_id: category.parent_id || null, // Use the parent_id if it exists
        _method: "PUT", // Use the _method parameter to simulate a PUT request
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(`/admin/categories/${category.id}`, {
            onSuccess: () => {
                // Redirect to the parent category's show page after updating
                if (category.parent_id) {
                    window.location.href = `/admin/categories/${category.parent_id}`;
                } else {
                    window.location.href = "/admin/categories";
                }
            },
        });
    };

    return (
        <Dashboard>
            <div className="container max-w-6xl text-center ml-52 mt-16 px-4 lg:px-8" dir="rtl">
                {/* Breadcrumb */}
                <div className="text-sm flex breadcrumbs mb-6">
                    <ul className="flex gap-2">
                        <li className="text-xl">
                            <Link href="/admin/categories">التصنيفات</Link>
                        </li>
                        {breadcrumb.map((item, index) => (
                            <li key={index}>
                                /
                                <Link className="px-2" href={`/admin/categories/${item.id}`}>{item.name}</Link>
                            </li>
                        ))}
                        <li>
                            /
                            <span className="px-2">تعديل التصنيف</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">تعديل التصنيف</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                الاسم
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                الوصف
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                        >
                            {processing ? "جاري التحديث..." : "تحديث"}
                        </button>
                        <Link
                            href={
                                category.parent_id
                                    ? `/admin/categories/${category.parent_id}`
                                    : "/admin/categories"
                            }
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 ml-4"
                        >
                            إلغاء
                        </Link>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default Edit;