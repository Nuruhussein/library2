import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
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
      <h1 className="text-gray-600 text-xl justify-self-end mr-60 mt-9">
        فهرس المؤلفين
      </h1>

      {/* Search Input with Icon */}
      <div className="flex justify-center my-6">
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
              <h2 className="text-lg text-blue-500 font-semibold">
                {author.name}
              </h2>
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
