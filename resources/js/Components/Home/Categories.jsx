import React from 'react';

const Categories = ({ categories }) => {
    return (
        <section className="py-12">
            <div className="container max-w-6xl mx-auto">
                <div className="mx-auto flex flex-col items-center gap-6 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    الفئات الشهيرة
                    </div>
                    <h2 className="text-4xl font-medium">كتب اسلامية مجانية</h2>
                    <p className="text-lg text-zinc-600">
                    كتب إلكترونية إسلامية مجانية عن القرآن والحديث والعقيدة والتوحيد والصلاح ورمضان والزكاة والحج والملائكة والجن والآخرة وأصحاب النبي وغيرهم الكثير!
                    </p>
                </div>
                <div className="mt-20 grid gap-10 lg:grid-cols-4 xl:gap-20 h-full">
                    {/* Dynamically render categories */}
                    {categories.length === 0 ? (
                        <p>No categories available.</p>
                    ) : (
                        categories.map((category) => (
                            <div key={category.id} className="flex flex-col lg:block h-full">
                                <div className="rounded-lg border bg-zinc-100 p-3">
                                    {/* Display category image if available */}
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
                                    <p className="text-zinc-600">{category.description}</p>
                                    <a     href={`/category/${category.id}`} className="mt-4 flex items-center gap-2 font-medium">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Categories
