import React from "react";
import { Link } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Index = ({ authors }) => (
    <Dashboard>
        <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Authors
            </h1>
            <Link
                href="/authors/create"
                className="mb-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
            >
                Add New Author
            </Link>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                Name
                            </th>
                            {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                            Email
                        </th> */}
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                Book Count
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author) => (
                            <tr key={author.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                    {author.name}
                                </td>
                                {/* <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                {author.email}
                            </td> */}
                                <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                    {author.books_count}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 border-b border-gray-200">
                                    <Link
                                        href={`/authors/${author.id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Dashboard>
);

export default Index;
