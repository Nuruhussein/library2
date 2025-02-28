import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeftCircle, BookAIcon, BookCopy } from 'lucide-react';

export default function Articles({remainingArticles}) {




    return (
        <>
            
  <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-16 m-4 md:grid-cols-2 xl:grid-cols-3">
  {remainingArticles.map(bookArticle => (
      <div key={bookArticle.id}>
          <div className="inline-block p-3 text-white bg-orange-200 rounded-lg">
            <ArrowLeftCircle/>
          </div>
          <div>
              <Link href={`/book-articles/${bookArticle.id}`}>
                  <h1 className="text-xl font-semibold text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                      {bookArticle.title}
                  </h1>
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  {bookArticle.subtitle || 'بواسطة ' + bookArticle.author}
                  {bookArticle.category && ` | ${bookArticle.category}`}
              </p>
          </div>
      </div>
  ))}
</div>
</>
    );
}