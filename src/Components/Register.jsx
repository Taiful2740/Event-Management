import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be least 6 characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      // setRegisterError("Password must be least 6 characters");
      return;
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Should be uppercase & special characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      // setRegisterError("Should be uppercase");
      return;
    }
    // reset error
    // setRegisterError("");
    // setSuccess("");

    // create user in firebase
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        // alert("User Created Successfully");
        swal("Good job!", "User Created Successfully!", "success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create an account!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 mt-4 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </div>
          </form>
          <p className="text-center mb-6">
            Already have account? Please{" "}
            <Link to="/login" className="font-bold text-red-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
