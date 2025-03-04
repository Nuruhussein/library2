import React, { useEffect, useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { FaPlus, FaTrash, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

const BookTable = ({ books, search }) => {
    const [areAllChecked, setAllChecked] = useState(false);
    const [checkboxItems, setCheckboxItems] = useState({});
    const { flash } = usePage().props;
    const [searchTerm, setSearchTerm] = useState(search || "");

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route("books.index"), { search: searchTerm }, { preserveState: true });
    };

    // Set or unset all checkbox items
    const handleCheckboxItems = () => {
        const newCheckedState = !areAllChecked;
        setAllChecked(newCheckedState);
        const updatedCheckboxItems = {};

        books.forEach((_, idx) => {
            updatedCheckboxItems[`checkbox${idx}`] = newCheckedState;
        });
        setCheckboxItems(updatedCheckboxItems);
    };

    // Update checked value
    const handleCheckboxChange = (e, idx) => {
        setAllChecked(false);
        setCheckboxItems({
            ...checkboxItems,
            [`checkbox${idx}`]: e.target.checked,
        });
    };

    useEffect(() => {
        const initialCheckboxStates = {};
        books.forEach((_, idx) => {
            initialCheckboxStates[`checkbox${idx}`] = false;
        });
        setCheckboxItems(initialCheckboxStates);
    }, [books]);

    useEffect(() => {
        const checkedItems = Object.values(checkboxItems);
        if (checkedItems.length === books.length && checkedItems.every((item) => item)) {
            setAllChecked(true);
        }
    }, [checkboxItems]);

    // Delete book function
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this book?")) {
            router.delete(route("books.destroy", id), {
                onSuccess: () => {
                    toast.success("Book deleted successfully");
                },
                onError: () => {
                    toast.error("Failed to delete the book");
                },
            });
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex md:flex-row flex-col gap-4">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Book List
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Manage your book collection with ease.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Search Form */}
                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col sm:flex-row gap-2 w-full"
                    >
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search books..."
                            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                        >
                            <FaSearch /> Search
                        </button>
                    </form>
                    <Link
                        href="/books/create"
                        className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                    >
                        <FaPlus /> Add Book
                    </Link>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto hidden md:block">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6 flex items-center gap-x-4">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="checkbox-all-items"
                                        className="checkbox-item peer hidden"
                                        checked={areAllChecked}
                                        onChange={handleCheckboxItems}
                                    />
                                    <label
                                        htmlFor="checkbox-all-items"
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    />
                                </div>
                                Title
                            </th>
                            <th className="py-3 px-6">Author</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Publication Date</th>
                            <th className="py-3 px-6">Cover</th>
                            <th className="py-3 px-6">Reviews</th>
                            <th className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {books.map((book, idx) => (
                            <tr key={book.id} className="odd:bg-gray-50 even:bg-white">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${idx}`}
                                            name={`checkbox-${idx}`}
                                            className="checkbox-item peer hidden"
                                            checked={checkboxItems[`checkbox${idx}`]}
                                            onChange={(e) => handleCheckboxChange(e, idx)}
                                        />
                                        <label
                                            htmlFor={`checkbox-${idx}`}
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                        />
                                    </div>
                                    {book.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{book.author.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{book.category.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`font-semibold
                                            ${book.status === 'draft' ? 'text-red-500' : ''}
                                            ${book.status === 'pending' ? 'text-green-500' : ''}
                                            ${book.status === 'post' ? 'text-black' : ''}`}
                                    >
                                        {book.status === 'draft' && 'مسودة'}
                                        {book.status === 'pending' && 'معلق'}
                                        {book.status === 'post' && 'منشور'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{book.publication_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.cover_image ? (
                                        <img
                                            src={`/storage/${book.cover_image}`}
                                            alt={book.title}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link
                                        href={`/books/${book.id}/reviews`}
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        View
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                    <Link
                                        href={`/admin/books/${book.id}`}
                                        className="text-blue-600 hover:text-blue-500"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        href={`/books/${book.id}/edit`}
                                        className="text-green-600 hover:text-green-500"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(book.id)}
                                        className="text-red-600 hover:text-red-500"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="mt-12 md:hidden space-y-4">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white shadow-md rounded-lg p-4 border"
                    >
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                id={`checkbox-mobile-${book.id}`}
                                className="checkbox-item peer hidden"
                                checked={checkboxItems[`checkbox${books.indexOf(book)}`]}
                                onChange={(e) => handleCheckboxChange(e, books.indexOf(book))}
                            />
                            <label
                                htmlFor={`checkbox-mobile-${book.id}`}
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            />
                            {book.cover_image ? (
                                <img
                                    src={`/storage/${book.cover_image}`}
                                    alt={book.title}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-xs">
                                    No Image
                                </div>
                            )}
                            <div className="flex-1">
                                <h4 className="text-gray-800 font-medium">{book.title}</h4>
                                <p className="text-gray-600 text-sm">{book.author.name}</p>
                            </div>
                        </div>
                        <div className="mt-2 text-gray-600 text-sm space-y-1">
                            <p><strong>Category:</strong> {book.category.name}</p>
                            <p>
                                <strong>Status:</strong>{" "}
                                <span
                                    className={`font-semibold
                                        ${book.status === 'draft' ? 'text-red-500' : ''}
                                        ${book.status === 'pending' ? 'text-green-500' : ''}
                                        ${book.status === 'post' ? 'text-black' : ''}`}
                                >
                                    {book.status === 'draft' && 'مسودة'}
                                    {book.status === 'pending' && 'معلق'}
                                    {book.status === 'post' && 'منشور'}
                                </span>
                            </p>
                            <p><strong>Published:</strong> {book.publication_date}</p>
                        </div>
                        <div className="mt-4 flex justify-between gap-2">
                            <Link
                                href={`/books/${book.id}/reviews`}
                                className="text-indigo-600 hover:text-indigo-500 text-sm"
                            >
                                Reviews
                            </Link>
                            <div className="flex gap-2">
                                <Link
                                    href={`/admin/books/${book.id}`}
                                    className="text-blue-600 hover:text-blue-500 text-sm"
                                >
                                    View
                                </Link>
                                <Link
                                    href={`/books/${book.id}/edit`}
                                    className="text-green-600 hover:text-green-500 text-sm"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="text-red-600 hover:text-red-500 text-sm"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookTable;