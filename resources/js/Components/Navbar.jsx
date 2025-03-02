import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleSearchClick = () => {
      if (search.trim()) {
          router.get('/store', { search });
      }
  };
  

  return (
    <nav
      className={`bg-white max-w-screen-2xl mx-auto px-6 shadow dark:bg-gray-800 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "-py-1" : "py-0"
      }`}
    >
      <div className="container px-6 py-1 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <img
                className={`sm:h-16 text-2xl w-28 ${
                  isScrolled ? "h-7" : "h-10"
                } transition-all duration-300`}
                src="/storage/images/turas.PNG"
                alt="Logo"
              />
            </Link>

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
            <div className="relative border-gray-200 border-b-2 w-full max-w-lg">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 pr-10 pl-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                placeholder="بحث في محتوى الكتب"
                dir="rtl" // Set direction to RTL
              />
              <button
                type="button"
                onClick={handleSearchClick}
                className="absolute inset-y-0 left-0 flex items-center pl-3"
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
            </div>
          </div>

          {/* Search input for small devices */}
          {isOpen && (
            <div className="lg:hidden mt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearchClick();
                }}
                className="relative flex items-center border-gray-200 border-b-2"
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-2 pr-10 pl-3 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                  placeholder="بحث في محتوى الكتب"
                  dir="rtl" // Set direction to RTL
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 left-0 flex items-center pl-3"
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
            className={`absolute inset-x-0 z-20 w-full px-6 py-6 sm:py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex items-end flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center">
  <Link
    href="/"
    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 relative group"
  >
    الرئيسية
    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
  <Link
    href="/categories"
    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 relative group"
  >
    الأقسام
    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
  <Link
    href="/#about"
    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 relative group"
  >
    من نحن
    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
  <Link
    href="/authors"
    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 relative group"
  >
    فهرس المؤلفين
    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
  <Link
    href="/book-articles"
    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200 relative group"
  >
    مَقال
    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;