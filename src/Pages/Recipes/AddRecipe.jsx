import React, { useContext } from "react";
import {
  FaImage,
  FaUtensils,
  FaListUl,
  FaBookOpen,
  FaGlobeAsia,
  FaClock,
  FaTags,
  FaPlusCircle,
} from "react-icons/fa";
import { AuthContext } from "../../main";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddRecipe = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddRecipe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recipeData = Object.fromEntries(formData.entries());

    // Get all checked categories as an array
    recipeData.categories = formData.getAll("categories");
    recipeData.likes = 0;

    recipeData.recipeOwner = user.displayName;
    recipeData.recipeOwnerEmail = user.email;

    try {
      const res = await fetch(
        "https://assignment10-server-seven-delta.vercel.app/addRecipe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        }
      );

      const data = await res.json();
      console.log("Response:", data);

      if (data.acknowledged) {
        Swal.fire("✅ Recipe added successfully!");
        form.reset();
        navigate("/myRecipes");
      } else {
        Swal.fire("❌ Failed to add recipe.");
      }
    } catch (error) {
      console.error("Error submitting recipe:", error);
      Swal.fire("⚠️ Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="my-20   w-11/12 mx-auto">
      <div className="formContainer bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-gray-200 w-full">
        <h2 className="text-4xl font-extrabold text-center text-primary flex items-center justify-center gap-3">
          <FaUtensils /> Add a New Recipe
        </h2>
        <form
          className="w-full flex flex-col lg:grid  lg:grid-cols-2 gap-5 "
          onSubmit={handleAddRecipe}
        >
          {/* Title */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaUtensils /> Recipe Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Creamy Alfredo Pasta"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaImage /> Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          {/* Ingredients */}
          <div className="space-y-2 col-span-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaListUl /> Ingredients
            </label>
            <textarea
              name="ingredients"
              placeholder="• Pasta\n• Cream\n• Garlic"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
            />
          </div>

          {/* Instructions */}
          <div className="space-y-2 col-span-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaBookOpen /> Instructions
            </label>
            <textarea
              name="instructions"
              placeholder="1. Boil pasta...\n2. Make the sauce..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
            />
          </div>

          {/* Cuisine Type */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaGlobeAsia /> Cuisine Type
            </label>
            <select
              name="cuisine"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            >
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaClock /> Preparation Time (mins)
            </label>
            <input
              type="number"
              name="prepTime"
              placeholder="45"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>

          {/* Categories */}
          <div className="space-y-2 col-span-2">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
              <FaTags /> Categories
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                (cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="categories"
                      value={cat}
                      className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary transition"
                    />
                    <span className="text-gray-700">{cat}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:col-span-2 py-4 px-6 text-lg font-semibold text-white 
             rounded-full bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 
              hover:from-lime-600 hover:to-green-700
             flex items-center justify-center gap-3
             
             hover:shadow-xl hover:scale-[1.02]
             transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-4 focus:ring-lime-200 shadow-lg"
          >
            <FaPlusCircle className="text-2xl" />
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

// Image.
// Title
// Ingredients.
// Instructions.
// Cuisine Type (dropdown: Italian, Mexican, Indian, Chinese, Others).
// Preparation Time (number).
// Categories (checkboxes: Breakfast, Lunch, Dinner, Dessert, Vegan etc).
// Like count. (initially 0)
// Add recipe button
