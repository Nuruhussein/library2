import { Link } from '@inertiajs/react';
import React, { useRef } from 'react';

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
        <section className="py-12">
            <div className="container max-w-6xl mx-auto">
            <div className="mx-auto flex flex-col items-center gap-6 text-center px-4 md:px-0"> {/* Added responsive padding */}
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
        الفئات الشهيرة
    </div>
    <h2 className="text-4xl font-medium leading-tight md:leading-normal"> {/* Adjusted line height */}
        كتب اسلامية مجانية
    </h2>
    <p className="text-lg text-zinc-600 leading-relaxed"> {/* Adjusted line height */}
        كتب إلكترونية إسلامية مجانية عن القرآن والحديث والعقيدة والتوحيد والصلاح ورمضان والزكاة والحج والملائكة والجن والآخرة وأصحاب النبي وغيرهم الكثير!
    </p>
</div>
                {/* Navigation Arrows and Horizontal Scrolling Container */}
                <div className="relative mt-20">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 border border-orange-400 p-2 rounded-full shadow-2xl z-10"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow-2xl border-blue-6 p-2 border border-orange-400  rounded-full z-10"
                    >
                        &rarr;
                    </button>

                    <div
                        ref={scrollContainer}
                        className="w-full overflow-hidden"
                    >
                        <div className="flex gap-10" style={{ transition: 'scroll 0.3s ease-in-out' }}>
                            {categories.length === 0 ? (
                                <p>No categories available.</p>
                            ) : (
                                categories.map((category) => (
                                    <div key={category.id} className="flex-shrink-0 w-80">
                                        <div className="rounded-lg border bg-zinc-100 p-3">
                                            {category.image && (
                                                <img
                                                    src={`/storage/${category.image}`}
                                                    alt={category.name}
                                                    className="h-72 w-full rounded-lg object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-1 font-semibold">{category.name}</div>
                                            <p className="text-zinc-600">
                                                {category.description && category.description.length > 50
                                                    ? `${category.description.substring(0, 50)}...`
                                                    : category.description}
                                            </p>
                                            <Link
                                                href={`/store/tag/${category.id}`}
                                                className="mt-4 text-blue-400 flex items-center gap-2 font-medium"
                                            >
                                                Learn more
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-chevron-right w-4"
                                                >
                                                    <path d="m9 18 6-6-6-6" />
                                                </svg>
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
