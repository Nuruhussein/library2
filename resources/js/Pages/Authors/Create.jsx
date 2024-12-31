import React from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "../Dashboard";

const Create = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        bio: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/authors");
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mt-20 mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Add New Author
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Biography Input */}
                    <div>
                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Biography
                        </label>
                        <textarea
                            id="bio"
                            value={data.bio}
                            onChange={(e) => setData("bio", e.target.value)}
                            rows="4"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.bio && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.bio}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
                    >
                        Add Author
                    </button>
                </form>
            </div>
        </Dashboard>
    );
};

export default Create;
