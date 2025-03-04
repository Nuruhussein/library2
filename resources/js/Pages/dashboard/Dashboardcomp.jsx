import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard';

const Dashboardcomp = ({
    totalBooks,
    draftBooks,
    pendingBooks,
    postedBooks,
    totalCategories,
    totalAuthors
}) => {
    return (
           <Dashboard>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-20 sm:ml-64 mb-8">
            {/* Total Books */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-blue-100">
                    <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Books</h3>
                    <p className="text-2xl font-semibold text-gray-800">{totalBooks}</p>
                </div>
            </div>

            {/* Draft Books */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-yellow-100">
                <svg
             className="w-6 h-6 text-yellow-600"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"
         >
             <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
             />
         </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Draft Books</h3>
                    <p className="text-2xl font-semibold text-gray-800">{draftBooks}</p>
                </div>
            </div>

            {/* Pending Books */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-orange-100">
                    <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Pending Books</h3>
                    <p className="text-2xl font-semibold text-gray-800">{pendingBooks}</p>
                </div>
            </div>

            {/* Posted Books */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-green-100">
                    <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Posted Books</h3>
                    <p className="text-2xl font-semibold text-gray-800">{postedBooks}</p>
                </div>
            </div>

            {/* Total Categories */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-purple-100">
                    <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Categories</h3>
                    <p className="text-2xl font-semibold text-gray-800">{totalCategories}</p>
                </div>
            </div>

            {/* Total Authors */}
            <div className="bg-white rounded-lg shadow-md p-12 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 xl:col-span-1 sm:col-span-2">
                <div className="p-3 rounded-full bg-indigo-100">
                    <svg
                        className="w-6 h-6 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Authors</h3>
                    <p className="text-2xl font-semibold text-gray-800">{totalAuthors}</p>
                </div>
            </div>
        </div>
        </Dashboard>
    );
};

// PropTypes for type checking
Dashboardcomp.propTypes = {
    totalBooks: PropTypes.number.isRequired,
    draftBooks: PropTypes.number.isRequired,
    pendingBooks: PropTypes.number.isRequired,
    postedBooks: PropTypes.number.isRequired,
    totalCategories: PropTypes.number.isRequired,
    totalAuthors: PropTypes.number.isRequired,
};

export default Dashboardcomp;