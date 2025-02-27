
import React from 'react';

import { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon
import { Link } from '@inertiajs/react';

export default function Aside({ categories }) {


       const [selectedCategory, setSelectedCategory] = useState(null);



    return (
        <>
            


            
                        {/* Main Content Section */}
                      
                        <aside className="top-20 mb-8 m-6 w-full self-start pr-8 pt-8 md:sticky md:ml-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:ml-32 lg:max-w-[18rem] lg:shrink-0 2xl:w-full ">
    <div className="flex flex-col h-screen rounded-xl border border-gray-200 bg-white shadow-lg py-6 md:py-4">
        <ul className="md:mb-4.5 mb-6 py-6 px-2 font-medium leading-5 overflow-y-auto">
            {/* Section Title */}
            <span className="flex items-center py-3 px-2">
                <span className="h-px flex-1 bg-gray-300"></span>
                <span className="shrink-0 text-gray-600 px-6 text-lg font-semibold">التصنيفات</span>
                <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            {/* Categories List */}
            {categories.map((category) => (
                <Link href={`/store/tag/${category.id}`} key={category.id}>
                    <li className="flex items-center justify-between text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 cursor-pointer transition-all duration-200">
                        <div className="flex gap-2 items-center">
                            <FaBook className="w-5 h-5 text-orange-200 mr-3" />
                            <span className="text-base">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {category.books_count} كتب
                        </span>
                    </li>
                </Link>
            ))}

            {/* All Books Link */}
            <Link href="/store">
                <li className="flex items-center text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 cursor-pointer transition-all duration-200">
                    <FaBook className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-base">جميع الكتب</span>
                </li>
            </Link>
        </ul>
    </div>
</aside>
            

                        
       
         
        </>
    );
}