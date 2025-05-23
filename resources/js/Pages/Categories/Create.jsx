import React from "react";
import Dashboard from "../Dashboard";
import { useForm, Link } from "@inertiajs/react";

const Create = ({ parent_id, breadcrumb }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        image: null,
        parent_id: parent_id || null, // Use the passed parent_id
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/categories", {
            onSuccess: () => {
                // Redirect to the parent category's show page after creation
                if (parent_id) {
                    window.location.href = `/admin/categories/${parent_id}`;
                } else {
                    window.location.href = "/admin/categories";
                }
            },
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
        }
    };

    return (
        <Dashboard>
            <div className="container max-w-6xl text-center ml-52 mt-16 px-4 lg:px-8" dir="rtl">
                {/* Breadcrumb */}
                {breadcrumb && breadcrumb.length > 0 && (
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                        <Link href="/admin/categories" className="hover:text-blue-500">
                            التصنيفات
                        </Link>
                        {breadcrumb.map((cat, index) => (
                            <React.Fragment key={cat.id}>
                                <span className="mx-2">/</span>
                                {index === breadcrumb.length - 1 ? (
                                    <span className="text-gray-800 font-semibold">{cat.name}</span>
                                ) : (
                                    <Link
                                        href={`/admin/categories/${cat.id}`}
                                        className="hover:text-blue-500"
                                    >
                                        {cat.name}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">إضافة تصنيف فرعي</h1>
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
                        {/* <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                الصورة
                            </label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                            )}
                        </div> */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                        >
                            {processing ? "جاري الحفظ..." : "حفظ"}
                        </button>
                        <Link
                            href={parent_id ? `/admin/categories/${parent_id}` : "/admin/categories"}
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

export default Create;