import { useState, useRef, useEffect } from "react";

// Profile Dropdown Component
const ProfileDropDown = ({ className }) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Dashboard", path: "/dashboard" },
        { title: "Settings", path: "/settings" },
        { title: "Log out", path: "/logout" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setState(false);
            }
        };
        document.addEventListener("click", handleDropDown);
        return () => document.removeEventListener("click", handleDropDown);
    }, []);

    return (
        <div className={`relative ${className}`}>
            
            <button
                ref={profileRef}
                className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                onClick={() => setState(!state)}
            >
                <img
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full"
                />
            </button>
            <ul
                className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <a
                            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                            href={item.path}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Navbar Component
const Navbar = () => {
    const [menuState, setMenuState] = useState(false);

    const navigation = [
        { title: "Customers", path: "/customers" },
        { title: "Careers", path: "/careers" },
        { title: "Guides", path: "/guides" },
        { title: "Partners", path: "/partners" },
    ];

    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="/">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div
                        className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
                            menuState ? "" : "hidden"
                        }`}
                    >
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-gray-900">
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <ProfileDropDown className="mt-5 pt-5 border-t lg:hidden" />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-none text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        <ProfileDropDown className="hidden lg:block" />
                        <button
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {menuState ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
