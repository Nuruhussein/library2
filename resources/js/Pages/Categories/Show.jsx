import React from "react";
import Dashboard from "../Dashboard";
import { Link, router } from "@inertiajs/react";
import { Pencil, Plus, Trash2 } from "lucide-react"; // Import Lucide icons
import toast from "react-hot-toast"; // Import toast from react-hot-toast

const Show = ({ category }) => {
    // Function to handle category deletion
    const handleDelete = (categoryId) => {
        if (confirm("هل أنت متأكد من حذف هذا التصنيف؟")) {
            router.delete(`/admin/categories/${categoryId}`, {
                onSuccess: () => {
                    toast.success("تم حذف التصنيف بنجاح");
                },
                onError: () => {
                    toast.error("حدث خطأ أثناء حذف التصنيف");
                },
            });
        }
    };

    return (
        <Dashboard>
            <div className="container max-w-6xl text-center ml-52 mt-16 px-4 lg:px-8" dir="rtl">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-600 mb-6">
                    <Link href="/admin/categories" className="hover:text-blue-500">
                        التصنيفات
                    </Link>
                    {category.breadcrumb.map((cat, index) => (
                        <React.Fragment key={cat.id}>
                            <span className="mx-2">/</span>
                            {index === category.breadcrumb.length - 1 ? (
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

                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Category Image - Only display if image exists */}
                    {category.image && (
                        <img
                            src={`/storage/${category.image}`}
                            alt={category.name}
                            className="w-full h-64 object-cover"
                        />
                    )}

                    <div className="p-8">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                            {category.name}
                        </h1>
                        <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">
                            <span className="font-semibold text-right px-6 text-gray-900">الوصف:</span>{" "}
                            <div
        className="text-gray-700 text-right prose prose-sm max-w-full"
        dangerouslySetInnerHTML={{
            __html: category.description || "لا يوجد وصف متوفر لهذا التصنيف.",
        }}
    />
                        </p>
                        
  

                        {/* Buttons for Create Subcategory and Add Book */}
                        <div className="mb-8 flex flex-col justify-center items-center gap-2">
                            <Link
                                href={`/admin/categories/create?parent_id=${category.id}`}
                                className="bg-blue-500 flex items-center text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                            >
                                <Plus className="w-4 h-4" /> إضافة تصنيف فرعي
                            </Link>
                            <Link
                                href={`/books/create?category_id=${category.id}`}
                                className="bg-green-600 flex items-center text-white px-6 py-2 rounded-lg hover:bg-green-900-600 transition-all duration-300 ml-4"
                            >
                                <Plus className="w-4 h-4" /> إضافة كتاب
                            </Link>
                        </div>

                        {/* Edit and Delete Buttons for the Current Category */}
                        <div className="flex justify-center gap-4 mb-8">
                            <Link
                                href={`/admin/categories/${category.id}/edit`}
                                className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
                            >
                                <Pencil className="w-4 h-4" /> تعديل
                            </Link>
                            <button
                                onClick={() => handleDelete(category.id)}
                                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                            >
                                <Trash2 className="w-4 h-4" /> حذف
                            </button>
                        </div>

                        {/* Subcategories List */}
                        {category.children && category.children.length > 0 ? (
                            <div className="flex flex-col justify-self-center w-full gap-4 py-8 my-7 max-w-4xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                    التصنيفات الفرعية
                                </h2>
                                {category.children.map((subcategory) => (
                                    <div
                                        key={subcategory.id}
                                        className="flex flex-row-reverse justify-between px-8 items-end gap-4 border-b-2 border-gray-50 w-full"
                                    >
                                        <Link
                                            href={`/admin/categories/${subcategory.id}`}
                                            className="text-lg text-blue-500 font-semibold hover:text-blue-700"
                                        >
                                            {subcategory.name}
                                        </Link>
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={`/books/create?category_id=${subcategory.id}`}
                                                className="text-sm text-green-500 hover:text-green-700"
                                            >
                                                إضافة كتاب
                                            </Link>
                                            <Link
                                                href={`/admin/categories/${subcategory.id}/edit`}
                                                className="text-yellow-500 hover:text-yellow-700"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(subcategory.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 mt-8 text-center">
                                لا توجد تصنيفات فرعية.
                            </p>
                        )}

                        {/* Books List */}
                        {category.all_books && category.all_books.length > 0 ? (
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                    الكتب في هذا التصنيف والتصنيفات الفرعية
                                </h2>
                                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-20">
                                    {category.all_books.map((book) => (
                                        <div key={book.id} className="flex flex-col h-full">
                                            <div className="rounded-lg border bg-zinc-50 p-3">
                                                {book.cover_image ? (
                                                    <img
                                                        src={`/storage/${book.cover_image}`}
                                                        alt={book.title}
                                                        className="h-48 w-full rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <img
                                                        src="/storage/images/no_book_cover.png"
                                                        alt={book.title}
                                                        className="h-48 w-full rounded-lg object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <div className="mb-1 font-semibold">{book.title}</div>
                                                <Link
                                                    href={`/admin/books/${book.id}`}
                                                    className="mt-4 flex items-center gap-2 font-medium text-blue-500 hover:text-blue-700"
                                                >
                                                    اعرف المزيد
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-chevron-right w-4"
                                                    >
                                                        <path d="m9 18 6-6-6-6" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 mt-8 text-center">
                                لا توجد كتب في هذا التصنيف أو التصنيفات الفرعية.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Show;