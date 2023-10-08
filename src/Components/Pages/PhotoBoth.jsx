import Footer from "../Footer/Footer";

const PhotoBoth = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <section className="flex justify-center items-center flex-col">
          <img
            src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/photobooth-1000x500.jpg"
            alt=""
          />
          <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
            Find Out More About Us
          </h1>

          <div className="flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
          </div>
          <p className="mb-10">
            Our wedding photos are an absolute treasure, capturing every moment
            of our special day with artistic flair and emotion. The
            photographer's talent and creativity brought our love story to life
            in each frame. From candid shots to breathtaking portraits, the
            photos tell a beautiful narrative of our wedding. The attention to
            detail, the play of light and shadow, and the ability to capture
            genuine emotions made our album truly extraordinary. The
            photographer's professionalism and dedication were exemplary. They
            were discreet yet managed to capture every significant moment,
            ensuring we could relive our day over and over again. Their guidance
            during the photoshoots made us feel at ease, resulting in natural
            and heartfelt pictures. The editing and post-production work were
            impeccable, enhancing the visual appeal of every photo. The album
            design was a work of art, elegantly presenting our memories in a way
            that we will cherish for a lifetime. Our wedding photos are not just
            images; they are a timeless testament to our love story. They are
            the window to the most precious moments of our lives. We are
            immensely grateful to the photographer for their talent and
            dedication in preserving our memories so beautifully. If you're
            seeking a photographer to capture the essence of your special day,
            look no further. They will turn your moments into lasting memories.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PhotoBoth;
