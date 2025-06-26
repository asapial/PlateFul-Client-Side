import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../main";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { ThemeContext } from "../../Context/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { FaSun, FaUtensils } from "react-icons/fa";
import PlateFulNamePlate from "../../Atoms/PlateFulNamePlate";

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
    <div className="w-full bg-base-300 shadow-sm">
      <div className="w-10/12 mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-green-400 flex justify-center items-center
    "
        >
          <PlateFulNamePlate></PlateFulNamePlate>
        </Link>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-info transition duration-200 ${
                isActive ? "text-info" : "text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/allRecipes"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-info transition duration-200 ${
                isActive ? "text-info" : "text-primary"
              }`
            }
          >
            All Recipe
          </NavLink>

          {user && (
            <NavLink
              to="/dashboard"
              className="text-base font-medium text-primary hover:underline hover:text-info transition duration-200"
            >
              Dashboard
            </NavLink>
          )}
          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-base font-medium hover:underline hover:text-info transition duration-200 ${
                    isActive ? "text-info" : "text-primary"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `text-base font-medium hover:underline hover:text-info transition duration-200 ${
                    isActive ? "text-info" : "text-primary"
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Right - Sign Out & Avatar */}
        <div className="flex items-center gap-4 text-base-content">
          {/* theme controller */}
          <button onClick={toggleTheme} className="">
            {theme === "platefulDark" ? (
              <FaSun size={30} />
            ) : (
              <IoMoon size={30} />
            )}
          </button>

          {user && (
            <button
              onClick={handleSignOut}
              className="px-5 py-2 bg-info text-info-content font-semibold rounded-xl shadow-md hover:bg-info/80 hover:shadow-lg transition duration-300 flex items-center gap-2"
            >
              <FiLogOut className="text-lg" />
              Sign Out
            </button>
          )}

          {/* Avatar + Name */}
          <div className="flex items-center gap-2">
            {user?.photoURL ? (
              <div className="tooltip tooltip-bottom z-10">
                <div className="tooltip-content">
                  <div className="animate-bounce text-warning -rotate-10 text-2xl font-black">
                    {user.displayName}
                  </div>
                </div>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-primary shadow"
                />
              </div>
            ) : (
              <RxAvatar size={40} className="text-primary" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
