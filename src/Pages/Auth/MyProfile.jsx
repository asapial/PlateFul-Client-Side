import React from "react";
import { Link, useNavigate } from "react-router";
import { FiRefreshCcw } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../../main";
import { SuccessToast } from "../../utilities/ToastMaker";

const MyProfile = () => {
  const { updateUser, user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser(name, photo)
      .then(() => {
        SuccessToast("🧑‍💻 Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Error updating profile");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <title>MyProfile | PlateFul</title>
      <div className="bg-base-100 shadow-2xl rounded-3xl p-8 max-w-md w-full space-y-6 border border-primary/20">
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || "https://i.ibb.co/2kR5zq0/avatar.png"} alt="Profile" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">My Profile</h2>
        </div>
        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Email Field */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-base-content/70"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content/60 cursor-not-allowed"
              defaultValue={user?.email}
              disabled
            />
          </div>
          {/* Full Name Field */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-base-content/70"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
              defaultValue={user?.displayName}
            />
          </div>
          {/* Photo URL Field */}
          <div className="space-y-1">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-base-content/70"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
              defaultValue={user?.photoURL}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <FiRefreshCcw className="text-lg" />
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;