import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../../main";
import Lottie from "lottie-react";
import registerAnimation from "/src/assets/registration.json";


const Register = () => {
  const { createUser, loginWithGoogle } = use(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const [errorMassage, setErrorMassage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // password validation

    if (password.length < 6) {
      setErrorMassage("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMassage("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMassage("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password, name, photo)
      .then((user) => {
        toast("🙌 Account created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((res) => {
        alert(res.message);
      });
  };

  const handleGoogoleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        toast("🙌 Account created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((res) => {
        alert(res.message);
      });
  };

  return (
    <div className="py-10 bg-gradient-to-br from-base-100 to-base-300 flex items-center justify-center px-4">
      <title>Register | PlateFul</title>
      <div className="registerContainer max-w-2/3 shadow-2xl rounded-3xl border border-accent  hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row gap-5 bg-base-300 p-5">
        <div className=" w-2/5  flex items-center justify-center mx-10 ">
          <Lottie animationData={registerAnimation}  className=""/>
        </div>
        <div className=" w-3/5 p-5">
          <h2 className="text-3xl font-bold text-center text-accent-800 my-5">
            Create an Account
          </h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-accent-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-accent-700 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="photo" className="text-accent-700 font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                placeholder="Photo URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="photo"
              />
            </div>

            <div className="relative space-y-2">
              <label
                htmlFor="password"
                className="text-accent-700 font-semibold"
              >
                Password
              </label>
              <input
                type={isShow ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="password"
              />
              {isShow ? (
                <button onClick={() => setIsShow(!isShow)}>
                  <FaEye className="absolute top-10 right-4" />
                </button>
              ) : (
                <button onClick={() => setIsShow(!isShow)}>
                  <FaEyeSlash className="absolute top-10 right-4" />
                </button>
              )}
            </div>
            {
              errorMassage && (
                <div className="flex items-center gap-2 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-lg shadow-sm text-sm">
                  <span>{errorMassage}</span>
                </div>
              )
            }

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-2xl shadow-sm shadow-blue-300/50 hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
            >
              <MdPersonAdd className="text-xl" />
              Register
            </button>
          </form>

          <div className="text-center text-accent-600 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              Login here
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-accent-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button
            className="w-full group flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md rounded-xl py-3 px-4 transition-all duration-300"
            onClick={handleGoogoleLogin}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-accent font-medium group-hover:text-accent">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
