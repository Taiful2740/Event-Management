const ClientsReview = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
        Our Clients Say
      </h1>

      <div className="flex justify-center mt-5 mb-14">
        <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
      </div>
      <section className="my-10">
        <div className="card card-side bg-base-100 shadow-xl my-10">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim1-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Absolutely thrilled with our wedding experience! The venue was
              stunning, the food exquisite, and the service top-notch. Our dream
              day was brought to life, and we'll cherish these memories forever.
              Thank you to the wonderful team who made it all happen!
            </p>
            <h2 className="text-3xl text-center">Catherine Teresa</h2>
            <p className="text-center">Michael's Cousin</p>
          </div>
        </div>
        <div className="card card-side flex flex-row-reverse bg-base-100 shadow-xl my-10">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim3-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              We couldn't have asked for a better birthday celebration! The
              decorations were perfect, the cake was delicious, and the staff
              went above and beyond to make it special. It was a day filled with
              laughter and joy. Highly recommend this venue for any celebration!
            </p>
            <h2 className="text-3xl text-center">Kristen Stewart</h2>
            <p className="text-center">Michael's Cousin</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl my-10">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim2-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Our anniversary dinner was a delightful experience! The
              restaurant's intimate atmosphere, delectable cuisine, and
              attentive service exceeded our expectations. It was a memorable
              evening, celebrating our love. Thanks to the wonderful staff for
              making our anniversary celebration truly special!
            </p>
            <h2 className="text-3xl text-center">Gabriela Justin</h2>
            <p className="text-center">Michael's Cousin</p>
          </div>
        </div>
        <div className="card card-side flex flex-row-reverse bg-base-100 shadow-xl my-10">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim4-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Our engagement celebration was absolutely magical! The venue's
              ambiance was romantic, the food was superb, and the staff made it
              seamless. It was a night we'll never forget, surrounded by friends
              and family. A heartfelt thanks to everyone who made our engagement
              party so incredible!
            </p>
            <h2 className="text-3xl text-center">Stuart Broad</h2>
            <p className="text-center">Michael's Cousin</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsReview;
