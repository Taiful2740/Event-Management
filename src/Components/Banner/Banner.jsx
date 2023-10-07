const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/CBnbssy/pexels-sergio-souza-1779416.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <p className="mb-5 text-6xl font-medium" id="welcome">
            Welcome to
          </p>
          <h1 className="mb-5 text-7xl font-bold">Wedding Planner</h1>
          <p className="mb-5 text-5xl font-medium" id="welcome">
            Wedding Dream Comes True
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
