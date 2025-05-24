import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { FiRefreshCcw } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../../main";

const MyProfile = () => {

        const {updateUser,user}= use(AuthContext);
        const navigate=useNavigate();

        const handleRegister=(e)=>{
            e.preventDefault();
            const name=e.target.name.value;
            const photo=e.target.photo.value;
            updateUser(name,photo).then(()=>{
                navigate('/');
                toast('🧑‍💻 Profile updated successfully!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
            }).catch(()=>{
                alert("Error")
            })
    
        }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center px-4">
    <title>MyProfile | PlateFul</title>

      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          My Profile
        </h2>

        <form className="space-y-6" onSubmit={handleRegister}>
  {/* Email Field */}
  <div className="space-y-1">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email Address"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-500 cursor-not-allowed"
      defaultValue={user?.email}
      disabled
    />
  </div>

  {/* Full Name Field */}
  <div className="space-y-1">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Full Name"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      defaultValue={user?.displayName}
    />
  </div>

  {/* Photo URL Field */}
  <div className="space-y-1">
    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
      Photo URL
    </label>
    <input
      type="text"
      id="photo"
      name="photo"
      placeholder="Photo URL"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      defaultValue={user?.photoURL}
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-2xl shadow-lg shadow-blue-300/50 hover:shadow-blue-400/50 transition-all duration-300 ease-in-out"
  >
    <FiRefreshCcw className="text-xl" />
    Update
  </button>
</form>


      </div>
    </div>
  );
};

export default MyProfile;








