import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div
      className="hero min-h-min md:min-h-screen lg:min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/CBnbssy/pexels-sergio-souza-1779416.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <TypeAnimation
            className="text-2xl "
            id="welcome"
            sequence={[
              "Welcome",
              500,
              "Welcome to Wedding ", //  Continuing previous Text
              500,
              "Welcome to Wedding planner ",
              500,
              "Welcome to Wedding",
              500,
              "Welcome",
              500,
              "",
              500,
            ]}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <br />

          <h1 className="mb-5 text-7xl font-bold mt-10">Wedding Planner</h1>
          <p className="mb-5 text-5xl font-medium" id="welcome">
            Wedding Dream Comes True
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
