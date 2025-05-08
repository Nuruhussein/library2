import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon

const Indexclient = ({ authors }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter authors based on search query
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to trigger search when icon is clicked
  const handleSearch = () => {
    setSearchTerm(searchQuery);
  };

  return (
    <>
      <Navbar />
      <Head title="authors" />
      <nav
                className="flex max-w-screen-2xl mx-auto  items-center justify-center h-20 py-16 px-8 shadow-md bg-cover bg-center text-white"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-islamic-background-design-with-geometric-shape-white-background-vector_51543-1098.jpg?semt=ais_hybrid')" }}
                aria-label="Breadcrumb"
            >
                <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center">
                      <Link
                            href="/"
                            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="ms-1.5 text-xs font-medium"> Home </span>
                        </Link>
                    </li>
                    <li className="relative flex items-center">
                        <span
                            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                        ></span>
                      <Link
                            href="#"
                            className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                        >
                               فهرس المؤلفين
                        </Link>
                    </li>
                </ol>
            </nav>
      <h1 className="text-gray-600 text-xl justify-self-end mr-60 mt-9">
        فهرس المؤلفين
      </h1>

      {/* Search Input with Icon */}
      <div className="flex items-center  justify-center my-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="ابحث عن مؤلف..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-blue-500"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Authors List */}
      <div className="flex flex-col justify-self-center w-full gap-4 py-8 my-7 max-w-4xl">
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author) => (
            <div
              key={author.id}
              className="flex flex-row-reverse justify-start px-8 mr-20 items-end gap-4 border-b-2 border-gray-50 w-full"
            >
              <Link href={`/authors/${author.id}`} className="">
              <h2 className="text-lg text-blue-500 font-semibold">
                {author.name}
              </h2>
              </Link>
              <p>
                <span className="text-gray-600">
                  [ {author.books_count} :عدد الكتب]
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">لا توجد نتائج</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Indexclient;
