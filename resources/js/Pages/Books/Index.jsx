import BookTable from "@/Components/books/BookTable";
import CreateBookForm from "@/Components/books/CreateBookForm";

import React from "react";
import Dashboard from "../Dashboard";

const BooksIndex = ({ books, authors, categories }) => {
    // console.log(authors);
    return (
        <Dashboard>
            <div className="mt-20 ml-52">
                {/* <CreateBookForm authors={authors} categories={categories} /> */}

                <BookTable books={books} />
            </div>
        </Dashboard>
    );
};

export default BooksIndex;
