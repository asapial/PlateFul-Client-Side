import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../main";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
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
                to="/myRecipes"
                className="text-base font-medium text-slate-600 hover:underline hover:text-blue-600 transition duration-200"
              >
                My Recipe
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
            AddRecipe
          </NavLink>
        </div>

        {/* Right - Sign Out & Avatar */}
        <div className="flex items-center gap-4 text-black">
          {/* theme controller  */}
                <button
        onClick={toggleTheme}
        className="btn btn-sm btn-primary"
      >
        {theme === "platefulDark" ? "Switch to Light" : "Switch to Dark"}
      </button>

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
