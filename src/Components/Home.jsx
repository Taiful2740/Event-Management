import Banner from "./Banner/Banner";
import { FaRegLightbulb, FaHeadset } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";
import AllServices from "./Pages/AllServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-w-6xl mx-auto">
        <div>
          <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
            What We Do
          </h1>

          <div className="flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div
                className="hero h-[400px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/vYB0xCD/bg-3-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <FaRegLightbulb></FaRegLightbulb>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Planning
                    </h1>
                    <p className="mb-5">
                      Planning is the compass for success. It charts the course,
                      sets the goals, and paves the way to achieve dreams.It
                      charts the course, sets the goals achieve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="hero h-[400px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/zH4dTLY/bg-4-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <BsGearWideConnected></BsGearWideConnected>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Decore
                    </h1>
                    <p className="mb-5">
                      Decor transforms spaces into havens of beauty and
                      personality. With color, texture, and creativity, it
                      breathes life into rooms, making them uniquely yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="hero h-[400px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/y5FDfS3/bg-5-1-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <FaHeadset></FaHeadset>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Consulting
                    </h1>
                    <p className="mb-5">
                      Consulting unlocks insights and solutions. Experts guide
                      businesses to strategic success, offering clarity,
                      dedicated, innovation, and a path to thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllServices></AllServices>
    </div>
  );
};

export default Home;
