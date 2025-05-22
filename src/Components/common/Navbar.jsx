import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../main";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/");
    });
  };


  return (
    <div className="w-full bg-white shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-green-400">
          Plate<span className=" text-amber-400">Ful</span>
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-700" : "text-slate-600"
              }`
            }
          >
            Home
          </NavLink>
          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-base font-medium hover:underline hover:text-blue-600 transition duration-200 ${
                  isActive ? "text-blue-700" : "text-slate-600"
                }`
              }
            >
              Login
            </NavLink>
          )}
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-700" : "text-slate-600"
              }`
            }
          >
            Register
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/myProfile"
                className="text-base font-medium text-slate-600 hover:underline hover:text-blue-600 transition duration-200"
              >
                MyProfile
              </NavLink>
              <NavLink
                to="/faq"
                className="text-base font-medium text-slate-600 hover:underline hover:text-blue-600 transition duration-200"
              >
                FAQ
              </NavLink>
            </>
          )}

                    <NavLink
            to="/addRecipe"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-700" : "text-slate-600"
              }`
            }
          >
            AddUser
          </NavLink>
        </div>

        {/* Right - Sign Out & Avatar */}
        <div className="flex items-center gap-4 text-black">
          {/* theme controller  */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user && (
            <button
              onClick={handleSignOut}
              className="px-5 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-indigo-200 hover:shadow-lg transition duration-300 flex items-center gap-2"
            >
              <FiLogOut className="text-lg" />
              Sign Out
            </button>
          )}

          {/* Avatar + Name (Always Right-Aligned) */}
          <div className="flex items-center gap-2">
            {user?.photoURL ? (
              <div className="tooltip tooltip-bottom z-10">
                <div className="tooltip-content">
                  <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">
                    {user.displayName}
                  </div>
                </div>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-indigo-200 shadow"
                />
              </div>
            ) : (
              <RxAvatar size={40} className="text-slate-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
