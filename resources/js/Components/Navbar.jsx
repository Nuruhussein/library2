// import { useState, useRef, useEffect } from "react";

// // Profile Dropdown Component
// const ProfileDropDown = ({ className }) => {
//     const [state, setState] = useState(false);
//     const profileRef = useRef();

//     const navigation = [
//         { title: "Dashboard", path: "/dashboard" },
//         { title: "Settings", path: "/settings" },
//         { title: "Log out", path: "/logout" },
//     ];

//     useEffect(() => {
//         const handleDropDown = (e) => {
//             if (profileRef.current && !profileRef.current.contains(e.target)) {
//                 setState(false);
//             }
//         };
//         document.addEventListener("click", handleDropDown);
//         return () => document.removeEventListener("click", handleDropDown);
//     }, []);

//     return (
//         <div className={`relative ${className}`}>
            
//             <button
//                 ref={profileRef}
//                 className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
//                 onClick={() => setState(!state)}
//             >
//                 <img
//                     src="https://randomuser.me/api/portraits/men/46.jpg"
//                     alt="Profile"
//                     className="w-full h-full rounded-full"
//                 />
//             </button>
//             <ul
//                 className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
//                     state ? "" : "lg:hidden"
//                 }`}
//             >
//                 {navigation.map((item, idx) => (
//                     <li key={idx}>
//                         <a
//                             className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
//                             href={item.path}
//                         >
//                             {item.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// const Navbar = () => {
//     const [menuState, setMenuState] = useState(false);

//     const navigation = [
//         { title: "Customers", path: "/customers" },
//         { title: "Careers", path: "/careers" },
//         { title: "Guides", path: "/guides" },
//         { title: "Partners", path: "/partners" },
//     ];

//     return (
//         <nav className="bg-white border-b">
//             <div className="flex items-center py-3 px-4 max-w-screen-xl mx-auto md:px-8">
//                 {/* Logo */}
//                 <div className="flex-none">
//                     <a href="/">
//                         <img
//                             src="https://www.floatui.com/logo.svg"
//                             width={120}
//                             height={50}
//                             alt="Float UI logo"
//                         />
//                     </a>
//                 </div>

//                 {/* Search Input */}
//                 <div className="flex-1 flex justify-center">
//                     <form className="flex items-center space-x-2 border rounded-md p-2 max-w-md w-full">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 flex-none text-gray-300"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                             />
//                         </svg>
//                         <input
//                             className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
//                             type="text"
//                             placeholder="Search"
//                         />
//                     </form>
//                 </div>

//                 {/* Navigation and Profile */}
//                 <div className="flex items-center space-x-6">
//                     {/* Mobile Menu Button */}
//                     <button
//                         className="outline-none text-gray-400 lg:hidden"
//                         onClick={() => setMenuState(!menuState)}
//                     >
//                         {menuState ? (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 />
//                             </svg>
//                         )}
//                     </button>

//                     {/* Desktop Navigation */}
//                     <ul className="hidden lg:flex space-x-6">
//                         {navigation.map((item, idx) => (
//                             <li key={idx} className="text-gray-600 hover:text-gray-900">
//                                 <a href={item.path}>{item.title}</a>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Profile Dropdown */}
//                     <ProfileDropDown className="hidden lg:block" />
//                 </div>

//                 {/* Mobile Menu */}
//                 <div
//                     className={`absolute bg-white z-20 w-full top-16 left-0 p-4 border-b lg:hidden ${
//                         menuState ? "" : "hidden"
//                     }`}
//                 >
//                     <ul className="space-y-5">
//                         {navigation.map((item, idx) => (
//                             <li key={idx} className="text-gray-600 hover:text-gray-900">
//                                 <a href={item.path}>{item.title}</a>
//                             </li>
//                         ))}
//                     </ul>
//                     <ProfileDropDown className="mt-5 pt-5 border-t" />
//                 </div>
//             </div>
//         </nav>
//     );
// };
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/store?search=${encodeURIComponent(search)}`; // Redirect to the backend route
  };

  const handleSearchClick = () => {
    if (search.trim()) {
      window.location.href = `/store?search=${encodeURIComponent(search)}`;
    }
  };

  return (
    <nav className="bg-white px-6 shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#">
              <img
                className="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/full-logo.svg"
                alt="Logo"
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="Toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Search input for large devices */}
          <div className="hidden lg:flex lg:flex-grow lg:justify-center">
            <form
              onSubmit={handleSearch}
              className="relative border-gray-200 border-b-2 w-full max-w-lg"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                placeholder="بحث في محتوى الكتب"
              />
            </form>
          </div>

          {/* Search input for small devices */}
          {isOpen && (
            <div className="lg:hidden mt-4">
              <form
                onSubmit={handleSearch}
                className="relative flex items-center border-gray-200 border-b-2"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-2 pl-3 pr-10 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                  placeholder="بحث في محتوى الكتب"
                />
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* Menu items */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-6 sm:py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0  lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex items-end flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center">
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
           الرئيسية
              </a>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
           الأقسام
              </a>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
             من نحن
              </a>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
             اتصل بنا

              </a>
              <a
                href="#"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
           فهرس المؤلفين
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
