import Footer from "../Footer/Footer";

const BestRestaurant = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <section className="flex justify-center items-center flex-col">
          <img
            src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/restaurant-1000x500.jpg"
            alt=""
          />
          <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
            Find Out More About Us
          </h1>

          <div className="flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
          </div>
          <p className="mb-10">
            Dining at this restaurant was an unforgettable experience that
            exceeded all expectations. From the moment we entered, we were
            enveloped in an atmosphere of sophistication and warmth. The service
            was impeccable, with an attentive staff that catered to our every
            need. Their knowledge of the menu and wine pairings enhanced the
            culinary journey. We felt like valued guests throughout the evening.
            Now, let's talk about the food. Each dish was a masterpiece, a
            fusion of flavors and textures that delighted the senses. From the
            appetizers to the desserts, it was a culinary adventure that left us
            in awe. The presentation was exquisite, elevating the dining
            experience to an art form. The restaurant's commitment to quality
            and sustainability was evident in every bite. Locally sourced
            ingredients and an ever-changing seasonal menu showcased their
            dedication to responsible dining. The ambiance was equally
            impressive, with a cozy yet elegant setting that set the stage for a
            romantic evening. The soft lighting, live music, and a breathtaking
            view added to the overall charm. Our visit to this restaurant was
            not just a meal; it was a celebration of life, love, and exceptional
            cuisine. We left with hearts full of gratitude and palates craving
            more. It's no wonder this place holds the title of the best
            restaurant. It truly is a culinary gem that should not be missed.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BestRestaurant;
