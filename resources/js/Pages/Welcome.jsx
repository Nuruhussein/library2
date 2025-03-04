import AccordiantwoDemo from "@/Components/AccordiantwoDemo";
import Samplebooks from "@/Components/books/Samplebooks";
import Footer from "@/Components/Footer";
import Categories from "@/Components/Home/Categories";
import Landing from "@/Components/Home/Landing";
import Review from "@/Components/Home/Review";
import Navbar from "@/Components/Navbar";
import { TestimonalSliderDemo } from "@/Components/TestimonalSliderDemo";
import Marquee from "@/Components/ui/marquee";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion, categories }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    // State to control button visibility
    const [showButton, setShowButton] = useState(false);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Effect to handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // Show button when scrolled down more than 100px
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Welcome" />
            
            <Navbar />
            <Landing />
            <Categories categories={categories} />
            
            {/* <Samplebooks/> */}
            
            <div className="my-16 md:ml-12">
                <AccordiantwoDemo />
            </div>
            
            <TestimonalSliderDemo />
            <Review />
            {/* <Marquee/> */}
            <Footer />
            
            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-9 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition-all duration-300 z-50 p-2 sm:p-2.5 md:p-3"
                    title="Scroll to top"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}