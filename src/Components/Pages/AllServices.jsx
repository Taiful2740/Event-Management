import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10">
      <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
        Our Services
      </h1>

      <div className="flex justify-center mt-5 mb-14">
        <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {/* card-1  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/ByvMJ54/wedding-invitation-70x70.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  Invitations
                </h1>
                <p className="py-6">
                  Invitations are more than just pieces of paper; they are the
                  keys that unlock the doors to some of life's most treasured
                  moments. Whether it's a wedding, a birthday celebration, a
                  graduation, or a simple gathering of friends, invitations play
                  a vital.
                </p>
                <div className="flex justify-center">
                  <Link to="/evocation">
                    <button className="btn bg-[#b378d4] text-white">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/q0f3JqS/dress70x70.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  Wedding Dresses
                </h1>
                <p className="py-6">
                  The wedding dress, a symbol of love, commitment, and
                  tradition, has long held a place of honor in the hearts of
                  brides and grooms worldwide. Its journey through time is a
                  fascinating tale of evolving styles, cultures, and personal
                  expressions of love.
                </p>
                <div className="flex justify-center">
                  <Link to="/wedding-dresses">
                    <button className="btn bg-[#b378d4] text-white">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card-3  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <div className="ml-1">
                <img
                  src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/ring-70x70.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/restaurant">Best Restaurant</Link>
                </h1>
                <p className="py-6">
                  Every city boasts its culinary gems, but there's always one
                  place that stands out among the rest, earning the coveted
                  title of the Best Restaurant. It's not just about exceptional
                  food; it's a complete experience that tantalizes the senses
                  and creates.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-4  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/wedding-cake-70x70.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/wedding-cake">Wedding Cake</Link>
                </h1>
                <p className="py-6">
                  Wedding cakes have long been a centerpiece of joy and
                  celebration at weddings worldwide. Beyond their delectable
                  taste, these towering confections are steeped in tradition and
                  symbolism, representing love, unity, and the sweet journey
                  that lies ahead for the newlyweds.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-5  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <div className="ml-1">
                <img
                  src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/flowers-70x70.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/flower-design">Flower Design</Link>
                </h1>
                <p className="py-6">
                  Flowers have always held a special place in our hearts. Beyond
                  their natural beauty, they possess the magical ability to
                  convey emotions, set moods, and enhance the aesthetics of any
                  space. This is where the art of flower design comes into play,
                  transforming simple blooms.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-6  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <div className="ml-1">
                <img
                  src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/makeup-70x70.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl hover:text-[#b378d4] " id="welcome">
                  {" "}
                  <Link to="/beauty-makeup">Beauty & Makeup</Link>
                </h1>
                <p className="py-6">
                  Beauty and makeup have long been a cherished form of
                  self-expression, enhancing natural features and allowing
                  individuals to unleash their inner confidence. Beyond the
                  superficial, makeup is an art form that empowers and
                  transforms, highlighting the unique.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-7  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/ring-70x70.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/jewellery">Ring & Jewellery</Link>
                </h1>
                <p className="py-6">
                  Jewelry has been an integral part of human culture for
                  centuries, adorning the necks, wrists, and fingers of
                  individuals from all walks of life. Among these cherished
                  adornments, rings hold a special place, symbolizing love,
                  commitment, achievement, and personal style.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-8  */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <div className="ml-1">
                <img
                  src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/photobooth-70x70.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/photobooth">Photobooth</Link>
                </h1>
                <p className="py-6">
                  Over time, photobooth technology evolved, becoming more
                  compact and user-friendly. By the mid-20th century, they had
                  become a ubiquitous presence at amusement parks, malls, and
                  even street corners. People flocked to these booths to capture
                  candid moments memories.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card-9 */}
        <div className="hero w-[400px] h-[350px]">
          <div className="hero shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
              <div className="ml-1">
                <img
                  src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/honeymoon-70x70.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl hover:text-[#b378d4]" id="welcome">
                  {" "}
                  <Link to="/honeymoon">Honeymoon</Link>
                </h1>
                <p className="py-6">
                  The honeymoon, a time-honored tradition, is not just a
                  vacation; it's a celebration of love, the beginning of a new
                  chapter, and a journey into the unknown. It's the magical
                  period immediately following the wedding, where newlyweds
                  embark on a that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
