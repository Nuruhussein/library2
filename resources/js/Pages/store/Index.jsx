import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';
import { FaBook } from 'react-icons/fa'; // Import the book icon
export default function Index({categories}) {
    return (
        <>
            <Navbar />
            <section className='container mx-auto max-w-7xl '>
  <div className="container flex w-full flex-col items-center pb-8 pt-4 md:flex-row md:pb-10 md:pt-8 lg:pb-16">
    <aside
      className="top-20 mb-8 w-full self-start pt-8 md:sticky md:mr-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:mr-32 lg:max-w-[18rem] lg:shrink-0 2xl:w-full">
      <div className="mb-8 flex w-full max-w-fit shrink-0 flex-col md:mb-10">
        <div className="hidden w-full md:mt-1 md:block">
          <div className="flex w-full items-center space-x-6">
            <a href="#" className="hover:-tranzinc-y-0.5"><img src="/images/placeholders/logos/instagram-icon.svg"
                alt="Instagram" className="size-5 text-zinc-600" /></a><a href="#" className="hover:-tranzinc-y-0.5"><img
                src="/images/placeholders/logos/linkedin-icon.svg" alt="LinkedIn" className="size-5 text-zinc-600" /></a><a
              href="#" className="hover:-tranzinc-y-0.5"><img src="/images/placeholders/logos/producthunt-icon.svg"
                alt="Product Hunt" className="size-5 text-zinc-600" /></a><a href="#" className="hover:-tranzinc-y-0.5"><img
                src="/images/placeholders/logos/twitter-icon.svg" alt="Twitter" className="size-5 text-zinc-600" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-xl border border-border bg-zinc-100 py-6 md:py-4">

        <ul className="md:mb-4.5 mb-6 py-6 px-6 font-medium leading-5">
            {categories.map((category) => (
                <li key={category.id} className="flex items-center text-zinc-600 py-3 px-3">
                    <FaBook className="mr-3 rotate-45  text-blue-500" /> {/* Icon with margin and color */}
                    {category.name} - 
                    <span className="text-center flex justify-center items-start ml-2">
                        {category.books_count} books
                    </span>
                </li>
            ))}
        </ul>
      </div>
    </aside>
    <article className="prose prose-sm mx-auto pt-8">
      <h1>The Joke Tax Chronicles</h1>
      <p>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging
        on his throne. One day, his advisors came to him with a problem: the kingdom was running out
        of money.
      </p>
      <h2>The King&#x27;s Plan</h2>
      <p>
        The king thought long and hard, and finally came up with
        <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
      </p>
      <blockquote>
        “After all,” he said, “everyone enjoys a good joke, so it&#x27;s only fair that they should
        pay for the privilege.”
      </blockquote>
      <h3>The Joke Tax</h3>
      <p>
        The king&#x27;s subjects were not amused. They grumbled and complained, but the king was
        firm:
      </p>
      <ul>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p>
        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was
        one person who refused to let the king&#x27;s foolishness get him down: a court jester named
        Jokester.
      </p>
      <h3>Jokester&#x27;s Revolt</h3>
      <p>
        Jokester began sneaking into the castle in the middle of the night and leaving jokes all
        over the place: under the king&#x27;s pillow, in his soup, even in the royal toilet. The
        king was furious, but he couldn&#x27;t seem to stop Jokester.
      </p>
      <p>
        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were
        so funny that they couldn&#x27;t help but laugh. And once they started laughing, they
        couldn&#x27;t stop.
      </p>
      <h3>The People&#x27;s Rebellion</h3>
      <p>
        The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns
        again, and soon the entire kingdom was in on the joke.
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>King&#x27;s Treasury</th>
              <th>People&#x27;s happiness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empty</td>
              <td>Overflowing</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-zinc-100">
              <td>Modest</td>
              <td>Satisfied</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-zinc-100">
              <td>Full</td>
              <td>Ecstatic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The king, seeing how much happier his subjects were, realized the error of his ways and
        repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever
        after.
      </p>
      <p>
        The moral of the story is: never underestimate the power of a good laugh and always be
        careful of bad ideas.
      </p>
    </article>
  </div>
</section>
            <Footer />
        </>
    );
}
