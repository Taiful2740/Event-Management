import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle().then(result => {
      console.log(result.user).catch(error => {
        console.log(error.message);
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-96 mt-4 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
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
                <button className="btn btn-secondary">Login</button>
              </div>
            </div>
          </form>
          <p className="text-center mb-6">
            New here? Please <Link to="/register">Register</Link>
          </p>
          <p className="text-center mb-6">
            <button onClick={handleGoogle} className="btn btn-ghost">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
