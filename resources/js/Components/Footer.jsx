import { Link } from "@inertiajs/react"

export default () => {
    const footerNavs = [
        {
            href: '/',
            name: 'الرئيسية'
        },
        {
            href: '/categories',
            name: 'الأقسام'
        },
        {
            href: '/#about',
            name: 'من نحن'
        },
        {
            name: 'مؤلفين',
            href: '/authors'
        },
        {
            href: '/book-articles',
            name: 'مَقال'
        },
        {
            href: '/#cats',
            name: 'الفئات الشهيرة'
        }
    ]

    return (
        <footer className="text-gray-500 border-t-2 bg-gray-50 px-4 py-5 max-w-screen-2xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="/storage/images/turas.PNG" className="w-32 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    المكتبة التراثية هي وجهتك لاكتشاف كنوز المعرفة والثقافة، حيث نجمع بين الماضي والحاضر من خلال توفير الكتب والمخطوطات القيمة للحفاظ على التراث ونشر الوعي الثقافي.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className="hover:text-gray-800 relative group">
                            <Link href={item.href} className="inline-block">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    © 2025 turath.info 
                </div>
                <div className="mt-6 sm:mt-0">
                    <p className="text-gray-500"> developed by <a className="text-blue-700 text-lg" href="https://nuruhussen.vercel.app/">Nuru Hussen.</a></p>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}