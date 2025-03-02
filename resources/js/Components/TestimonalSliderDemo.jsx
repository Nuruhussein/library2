import FancyTestimonialsSlider from "./ui/FancyTestimonialsSlider";


export function TestimonalSliderDemo() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg", // Example image of a scholar
      quote: "مكونات المكتبة التراث تجعل بناء الواجهات سهلاً وممتعًا. عمل رائع!",
      name: "الشيخ أحمد",
      role: "مدرس علوم شرعية",
    },
    {
      img: "https://randomuser.me/api/portraits/men/34.jpg", // Example image of a student
      quote:
        "المكتبة التراث تبسط التصاميم المعقدة بمكونات جاهزة للاستخدام.",
      name:"عمر خالد",
      role: "طالبة علوم إسلامية",
    },
    {
      img: "https://randomuser.me/api/portraits/men/21.jpg", // Example image of an imam
      quote: "مع المكتبة التراث، أصبح إنشاء واجهات تفاعلية أمرًا في غاية السهولة.",
      name: "عمر عبد الله",
      role: "إمام وخطيب",
    },
  ];
  return (
    <div className="relative h-[500px] w-full overflow-hidden mb-4 rounded-lg  bg-background">
      <div className="mt-[64px] px-12 flex justify-center">

       
        {/* <FancyTestimonialsSlider  testimonials={testimonials}/> */}
        <FancyTestimonialsSlider  testimonials={testimonials}/>

      </div>
    </div>
  );
}