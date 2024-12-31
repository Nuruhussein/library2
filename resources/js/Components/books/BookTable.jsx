import React, { useEffect, useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";

const BookTable = ({ books }) => {
    const [areAllChecked, setAllChecked] = useState(false);
    const [checkboxItems, setCheckboxItems] = useState({});
    const { flash } = usePage().props;
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
        // Initialize checkbox states
        const initialCheckboxStates = {};
        books.forEach((_, idx) => {
            initialCheckboxStates[`checkbox${idx}`] = false;
        });
        setCheckboxItems(initialCheckboxStates);
    }, [books]);

    useEffect(() => {
        // Check if all checkbox items are checked and update setAllChecked state
        const checkedItems = Object.values(checkboxItems);
        if (
            checkedItems.length === books.length &&
            checkedItems.every((item) => item)
        ) {
            setAllChecked(true);
        }
    }, [checkboxItems]);

    // Delete book function
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this book?")) {
            // Send delete request using Inertia
            router.delete(route("books.destroy", id));
            // router.post("/users", values);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div>
                {/* {flash.message && (
                    <div className="alert-success">{flash.message}</div>
                )} */}
            </div>
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Book List
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Manage your book collection with ease.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        href="/books/create"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add Book
                    </Link>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
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
                                    ></label>
                                </div>
                                Title
                            </th>
                            <th className="py-3 px-6">Author</th>
                            <th className="py-3 px-6">Category</th>
                            {/* <th className="py-3 px-6">Description</th> */}
                            <th className="py-3 px-6">ISBN</th>
                            <th className="py-3 px-6">Publication Date</th>
                            <th className="py-3 px-6">Cover Image</th>
                            <th className="py-3 px-6">reviews</th>

                            <th className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {books.map((book, idx) => (
                            <tr
                                key={book.id}
                                className="odd:bg-gray-50 even:bg-white"
                            >
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={`checkbox-${idx}`}
                                            name={`checkbox-${idx}`}
                                            className="checkbox-item peer hidden"
                                            checked={
                                                checkboxItems[`checkbox${idx}`]
                                            }
                                            onChange={(e) =>
                                                handleCheckboxChange(e, idx)
                                            }
                                        />
                                        <label
                                            htmlFor={`checkbox-${idx}`}
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                        ></label>
                                    </div>
                                    {book.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.author.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.category.name}
                                </td>
                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                    {book.description}
                                </td> */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.isbn}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.publication_date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {book.cover_image ? (
                                        <img
                                            src={`/storage/${book.cover_image}`}
                                            alt={book.title}
                                            width="50"
                                            className="rounded-full w-8 h-8"
                                        />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <Link
                                        href={`/books/${book.id}/reviews`}
                                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                                    >
                                        View Reviews
                                    </Link>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <Link
                                        href={`/books/${book.id}`}
                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 duration-150 hover:bg-gray-50 rounded-lg mr-2"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        href={`/books/${book.id}/edit`}
                                        className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(book.id)}
                                        className="py-2 px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookTable;
