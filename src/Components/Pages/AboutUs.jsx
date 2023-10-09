import Footer from "../Footer/Footer";
import AllServices from "./AllServices";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
          Hello! We're Wedding Team
        </h1>

        <div className="flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
        </div>
        <p className="px-10 ">
          A "wedding term" typically refers to the language, jargon, or
          specialized terminology associated with weddings and the wedding
          industry. It encompasses a wide range of terms and phrases used to
          describe various aspects of wedding planning, ceremonies, traditions,
          and customs. For example, terms like "bridal party," "save-the-date,"
          "wedding vows," "reception," and "wedding planner" are all part of the
          wedding lexicon. Each of these terms has a specific meaning and plays
          a crucial role in the planning and execution of a wedding.
          Understanding wedding terms is essential for couples and wedding
          professionals alike. It facilitates clear communication and ensures
          that everyone involved in the wedding process is on the same page.
          Wedding terms also help individuals navigate the complexities of
          wedding planning, from selecting the right vendors to choosing the
          perfect wedding dress. Moreover, wedding terms can vary by culture and
          region, reflecting the diversity of wedding traditions worldwide.
          Therefore, being well-versed in wedding terminology is not only
          practical but also a way to appreciate the rich tapestry of customs
          and practices that make each wedding unique. Whether you're a bride
          and groom-to-be or a wedding industry professional, mastering wedding
          terms is a key step in creating a memorable and seamless wedding
          experience.
        </p>
        <AllServices></AllServices>
        <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
          Testimonials
        </h1>

        <div className="flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
        </div>
        <p className="px-10 ">
          1. "Our wedding was a fairytale come true, and it wouldn't have been
          possible without the incredible support of our family, friends, and
          the talented team of vendors who made our dreams a reality. We are
          forever grateful for the love and memories we created on that special
          day." - Emily and James <br />
          2. "The moment we said 'I do' was pure magic, and our hearts
          overflowed with joy. Thank you to everyone who celebrated with us and
          made our wedding day so unforgettable. Here's to a lifetime filled
          with love and laughter!" - Sarah and David <br />
          3. "Our wedding was more beautiful than we could have ever imagined.
          The venue, the flowers, the food—everything was perfect. But what
          truly made it special was the love and presence of our family and
          friends. Thank you for sharing in our happiness!" - Jessica and
          Michael <br />
          4. "To the incredible team behind our wedding, you turned our vision
          into a reality. Every detail was executed flawlessly, and our guests
          were in awe. Your dedication and expertise made our day truly
          magical." - Amanda and Mark <br />
          5. "Our wedding day was a dream come true, and we are so grateful for
          the love and support from our loved ones. We want to thank our
          families, our bridal party, and all our vendors for making it the best
          day of our lives." - Lauren and Daniel <br />- Emma and Christopher
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
