
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "./AuthenticatedLayout";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
import { FaHome, FaBook, FaUser, FaTags, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar({ children }) {
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar hidden by default on small screens

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <AuthenticatedLayout>
            <div>
                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start">
                                {/* Toggle Button */}
                                <button
                                    onClick={toggleSidebar}
                                    className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded mr-2"
                                    aria-label="Toggle sidebar"
                                >
                                    {isSidebarOpen ? (
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </button>
                                <Link
                                    href="/"
                                    className="text-xl font-bold flex items-center lg:ml-2.5"
                                >
                                    <img
                                        src="/storage/images/turas.png"
                                        className="h-12 w-16 mr-2"
                                        alt="Windster Logo"
                                    />
                                    <span className="self-center whitespace-nowrap">
                                        Mekteba
                                    </span>
                                </Link>
                                <form
                                    action="#"
                                    method="GET"
                                    className="hidden lg:block lg:pl-32"
                                >
                                    <label
                                        htmlFor="topbar-search"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <div className="mt-1 relative lg:w-64">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="email"
                                            id="topbar-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                                            placeholder="Search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center">
                                <button
                                    id="toggleSidebarMobileSearch"
                                    type="button"
                                    className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                                >
                                    <span className="sr-only">Search</span>
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="pr-8">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button className="px-4 py-2 text-sm font-medium flex text-gray-700 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <p>{user.name}</p>
                                                <span className="mt-1">
                                                    {" "}
                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar */}
                <div className="flex overflow-hidden bg-white pt-16">
                    <aside
                        id="sidebar"
                        className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-all duration-300 ${
                            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:translate-x-0`}
                        aria-label="Sidebar"
                    >
                        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                                    <ul className="space-y-2 pb-2">
                                        <li>
                                            <form
                                                action="#"
                                                method="GET"
                                                className="lg:hidden"
                                            >
                                                <label
                                                    htmlFor="mobile-search"
                                                    className="sr-only"
                                                >
                                                    Search
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <svg
                                                            className="w-5 h-5 text-gray-500"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="mobile-search"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                                                        placeholder="Search"
                                                    />
                                                </div>
                                            </form>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                            >
                                                <FaHome className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
                                                <span className="ml-3">
                                                    Dashboard
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/books"
                                                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                            >
                                                <FaBook className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
                                                <span className="ml-3">
                                                    Books
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/admin/authors"
                                                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                            >
                                                <FaUser className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
                                                <span className="ml-3">
                                                    Authors
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/admin/categories"
                                                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                            >
                                                <FaTags className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
                                                <span className="ml-3">
                                                    Categories
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/reviews/create"
                                                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                            >
                                                <FaStar className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
                                                <span className="ml-3">
                                                    Reviews
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="space-y-2 pt-2">
                                        <Link
                                            href="/admin/book-articles"
                                            target="_blank"
                                            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                            </svg>
                                            <span className="ml-3">
                                                Articles
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Backdrop for Mobile */}
                    <div
                        className={`bg-gray-900 opacity-50 fixed inset-0 z-10 transition-opacity duration-300 ${
                            isSidebarOpen ? "block lg:hidden" : "hidden"
                        }`}
                        id="sidebarBackdrop"
                        onClick={toggleSidebar} // Close sidebar when clicking backdrop on mobile
                    ></div>

                    {/* Main Content */}
                    <div
                        className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ${
                            isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
                        }`}
                    >
                        <div className="p-6">{children}</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}