import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="hero w-[450px] h-[300px]">
        <div className="hero shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/ByvMJ54/wedding-invitation-70x70.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl " id="welcome">
                {" "}
                <Link to="/invitations">Invitations</Link>
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
