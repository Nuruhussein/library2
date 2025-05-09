import FancyTestimonialsSlider from "./ui/FancyTestimonialsSlider";

export function TestimonalSliderDemo({ latestBooks }) {
  // Strip <p> tags and clean the text
  const stripPTags = (text) => {
    return text.replace(/<\/?p>/g, "").replace(/\n/g, " ");
  };

  const prepareQuoteText = (book) => {
    if (!book.reviews?.length || !book.reviews[0].reviewer || !book.reviews[0].comment) {
      return "هذه الإضافة الجديدة تمثل حقاً قيمة فريدة لمجموعة كتب مكتبتنا الغنية";
    }

    const reviewer = book.reviews[0].reviewer;
    const comment = book.reviews[0].comment;

    const safeReviewer = reviewer.length > 30 
      ? reviewer.substring(0, 27) + "..." 
      : reviewer;

    const safeComment = stripPTags(comment.length > 120 
      ? comment.substring(0, 69) + "..." 
      : comment);

    return `<strong>${safeReviewer}:</strong> &ldquo;${safeComment}&rdquo;`;
  };

  const services = latestBooks.map((book) => ({
    img: book.cover_image 
      ? `/storage/${book.cover_image}` 
      : "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000",
    quote: prepareQuoteText(book),
    name: book.title,
    role: book.category?.name || "Book",
    link: `/store/books/${book.id}` // Added book link
  }));

  return (
    <div className="relative h-[500px] w-full overflow-hidden mb-4 rounded-lg bg-background">
      <div className="mt-[64px] px-12 flex justify-center">
        <FancyTestimonialsSlider testimonials={services} />
      </div>
    </div>
  );
}