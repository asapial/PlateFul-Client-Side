import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../main";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";


const Login = () => {

  const navigate=useNavigate();
  const location = useLocation();



    const {loginUser,loginWithGoogle}= use(AuthContext);
    const [isShow,setIsShow]=useState(false);
    const [errorMassage,setErrorMassage]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        setErrorMassage('');
        const email=e.target.email.value;
        const password=e.target.password.value;

        if (password.length < 6) {
          setErrorMassage("❌ Password must be at least 6 characters long.");
          return;
        }
        if (!/[A-Z]/.test(password)) {
          setErrorMassage("🔠 Password must include at least one uppercase letter.");
          return;
        }
        if (!/[a-z]/.test(password)) {
          setErrorMassage("🔡 Password must include at least one lowercase letter.");
          return;
        }

        loginUser(email,password)
        .then(user=>{
          toast('🎉 Welcome back! Login successful.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            navigate(`${location.state ? location.state : "/"}`);
          })
        .catch(res=>{
            setErrorMassage(res.code)
        })
    }

    const handleGoogoleLogin=()=>{
      loginWithGoogle()
      .then(user=>{
        toast('🎉 Welcome back! Login successful.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          navigate(`${location.state ? location.state : "/"}`);

      })
      .catch(res=>{
          setErrorMassage(res.code)
      })
    }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center px-4">
    <title>Login | BoxaBly</title>

      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
  {/* Email Field */}
  <div className="space-y-1">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Password Field */}
  <div className="space-y-1 relative">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      type={isShow ? "text" : "password"}
      id="password"
      name="password"
      placeholder="Enter your password"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="button"
      onClick={() => setIsShow(!isShow)}
      className="absolute top-10 right-4 "
    >
      {isShow ? <FaEye /> : <FaEyeSlash />}
    </button>
  </div>

  {/* Error Message */}
  {errorMassage && (
    <div className="flex items-center gap-2 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-lg shadow-sm text-sm">
      <span>{errorMassage}</span>
    </div>
  )}

  {/* Forgot Password Link */}
  <div className="text-right">
    <Link
      to="/resetPassword"
      className="text-blue-600 text-sm font-medium hover:underline"
    >
      Forgot Password?
    </Link>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
  >
    <FiLogIn className="text-lg" />
    Login
  </button>
</form>


        <div className="text-center text-gray-600 text-sm">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline ml-1"
          >
            Register here
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
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
          <span className="text-gray-700 font-medium group-hover:text-gray-900">
            Continue with Google
          </span>
        </button>

      </div>
    </div>
  );
};

export default Login;
