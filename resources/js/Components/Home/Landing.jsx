import React from "react";
import MorphingText from "../ui/morphing-text"; // Import your MorphingText component
import ShinyButton from "../ui/shiny-button";
import { Link } from "@inertiajs/react";

function Landing() {
  const texts = [
    "كتب العقيدة",
    "التفسير",
    "كتب السنة",
    "أصول الفقه",
    "كتب اللغة",
    "أصول الفقه",
    "مسائل فقهية",
    "السيرة النبوية",
    "التاريخ",
  ];

  return (
    <div className="max-w-screen-2xl w-screen mx-auto h-[680px] mb-20 pb-4 relative group overflow-hidden">
      {/* Static Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/storage/images/quran2.png')`, // Your static image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 1.2s ease-in-out",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5),rgba(255,255,255,0.2))",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Overlay Content */}
      <div className="relative w-full h-full flex flex-col justify-center sm:ml-10 items-center text-center z-10">
      <h2 className="font-bold  text-gray-100 pb-4 sm:text-[60px] text-[60px] leading-[56.8px] font-poppins">
المكتبة الــتـراث  
        </h2>
        <MorphingText  texts={texts} />
        <Link href="/store" className="sm:mt-1 mt-4"> <ShinyButton>بحث في المكتبة</ShinyButton></Link>
        {/* Optional static text */}
        {/* <h2 className="font-bold text-white sm:text-[48px] text-[40px] leading-[56.8px] font-poppins">
          Al Mehdi Qur'anic and <br /> Terbiya Center
        </h2>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md">
          Get Started
        </button> */}
      </div>
    </div>
  );
}

export default Landing;
