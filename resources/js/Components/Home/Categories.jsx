import { Link } from '@inertiajs/react';
import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Categories = ({ categories }) => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section id='cats' className="py-12" style={{ direction: 'rtl' }}>
            <div className="container max-w-6xl mx-auto">
                <div className="mx-auto flex flex-col items-center gap-6 text-center px-4 md:px-0">
                    <div className="inline-flex items-center text-orange-200 rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        الفئات الشهيرة
                    </div>
                    <h2 className="text-4xl font-medium leading-tight md:leading-normal">
                        كتب اسلامية مجانية
                    </h2>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        مجموعة متميزة من الكتب الإسلامية المجانية تضم التفسير والحديث والعقيدة والفقه والسيرة النبوية والتاريخ الإسلامي والتنمية الروحية، بالإضافة إلى مؤلفات العلماء والمفكرين المسلمين.
                    </p>
                </div>

                {/* Navigation Arrows and Horizontal Scrolling Container */}
                <div className="relative mt-20">
                    {/* Left Arrow (will appear on the right in RTL) */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Scroll right"
                    >
                        <FiChevronLeft className="w-6 h-6 text-orange-500" />
                    </button>

                    {/* Right Arrow (will appear on the left in RTL) */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Scroll left"
                    >
                        <FiChevronRight className="w-6 h-6 text-orange-500" />
                    </button>

                    <div
                        ref={scrollContainer}
                        className="w-full overflow-x-auto pb-6 scrollbar-hide" // Added scrollbar-hide to hide scrollbar
                    >
                        <div className="flex gap-6 px-4" style={{ transition: 'scroll 0.3s ease-in-out' }}>
                            {categories.length === 0 ? (
                                <p className="text-center w-full py-8">لا توجد فئات متاحة</p>
                            ) : (
                                categories.map((category) => (
                                    <div key={category.id} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="rounded-t-lg overflow-hidden">
                                            {category.image && (
                                                <img
                                                    src={`/storage/${category.image}`}
                                                    alt={category.name}
                                                    className="h-72 w-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="mb-2 text-xl font-semibold text-gray-800">{category.name}</h3>
                                            <p className="text-zinc-600 text-right">
                                                {category.description && category.description.length > 50 ? (
                                                    <span dangerouslySetInnerHTML={{
                                                        __html: `${category.description.substring(0, 50)}...`,
                                                    }} />
                                                ) : (
                                                    <span dangerouslySetInnerHTML={{
                                                        __html: category.description || "لا يوجد وصف متاح.",
                                                    }} />
                                                )}
                                            </p>
                                            <Link
                                                href={`/store/tag/${category.id}`}
                                                className="mt-4 text-orange-500 flex items-center gap-2 font-medium hover:text-orange-600 transition-colors"
                                            >
                                                اعرف المزيد
                                                <FiChevronLeft className="w-4 h-4" /> {/* Icon direction matches RTL */}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;