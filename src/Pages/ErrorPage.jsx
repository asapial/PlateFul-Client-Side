import { Link } from "react-router";
import { BiErrorCircle } from "react-icons/bi";
import Lottie from "lottie-react";
import errorAnimation from "/src/assets/404.json";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
            <Lottie animationData={errorAnimation}  />;
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-2">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-sm text-gray-400 mb-6">It might have been moved or deleted.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl text-base font-medium shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
