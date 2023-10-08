import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" flex justify-center items-center mt-20">
      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 mt-4 h-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            className="h-full w-full"
            src={user?.photoURL}
            alt="profile-picture"
          />
        </div>
        <div class="p-6 text-center">
          <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {user?.displayName}
          </h4>
          <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
