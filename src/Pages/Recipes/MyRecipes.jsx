import { useContext, useEffect, useState } from "react";
import {
  FaHeart,
  FaTrash,
  FaEdit,
  FaClock,
  FaPen,
  FaTimes,
  FaImage,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import {
  FaBookOpen,
  FaGlobeAsia,
  FaListUl,
  FaPlusCircle,
  FaTags,
  FaUtensils,
} from "react-icons/fa";

import { AuthContext } from "../../main";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoadingSpinner from "../../Components/common/LoadingSpinner";

const MyRecipe = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null);

  useEffect(() => {
    <LoadingSpinner></LoadingSpinner>
    if (user?.email) {
      fetch(`https://assignment10-server-seven-delta.vercel.app/myRecipes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  }, [user]);

const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure you want to delete this recipe?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    denyButtonText: `No, keep it`,
  });

  if (result.isConfirmed) {
    try {
      const res = await fetch(`https://assignment10-server-seven-delta.vercel.app/recipes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        
        Swal.fire("Recipe deleted successfully");
        setRecipes((prev) => prev.filter((r) => r._id !== id));
      } else {
        Swal.fire("Failed to delete the recipe.");
      }
    } catch (err) {
      Swal.fire("An error occurred while deleting.");
    }
  } else if (result.isDenied) {
    Swal.fire("Ok, your recipe is safe!");
  }
};

const handleUpdateSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const updatedData = {
    title: formData.get("title"),
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    cuisine: formData.get("cuisine"),
    prepTime: formData.get("prepTime"),
    image: formData.get("image"),
    categories: formData.getAll("categories"), // ✅ Gets all checked values
  };

  const res = await fetch(`https://assignment10-server-seven-delta.vercel.app/recipes/${editRecipe._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (res.ok) {

    Swal.fire("✅ Recipe updated successfully");


    setRecipes(
      recipes.map((r) =>
        r._id === editRecipe._id ? { ...r, ...updatedData } : r
      )
    );
    setEditRecipe(null);
  } else {
        Swal.fire("❌ Failed to update recipe");

  }
};


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">My Recipes</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <img
              src={
                recipe.image ||
                "https://via.placeholder.com/400x250?text=No+Image"
              }
              alt={recipe.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-6 space-y-3">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {recipe.title}
              </h3>

              {/* Cuisine */}
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Cuisine:</span>{" "}
                {recipe.cuisine}
              </p>

              {/* Ingredients */}
              <p className="text-sm text-gray-600 whitespace-pre-line">
                <span className="font-medium text-gray-700">Ingredients:</span>{" "}
                {recipe.ingredients}
              </p>

              {/* Instructions */}
              <p className="text-sm  text-gray-700 whitespace-pre-line">
                <span className="font-medium text-gray-700">Instructions:</span>{" "}
                {recipe.instructions}
              </p>

              {/* Time & Likes */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="flex items-center gap-1">
                  <FaClock className="text-blue-600" /> {recipe.prepTime} mins
                </p>
                <p className="flex items-center gap-1 text-rose-500">
                  <FaHeart /> {recipe.likes || 0} likes
                </p>
              </div>

              {/* Categories */}
              {recipe.categories && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {(Array.isArray(recipe.categories)
                    ? recipe.categories
                    : [recipe.categories]
                  ).map((cat, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 border-t mt-4">
                <button
                  onClick={() => setEditRecipe(recipe)}
                  className="flex items-center gap-1 text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md shadow"
                >
                  <FaPen /> Update
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="flex items-center gap-1 text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md shadow"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {editRecipe && (
<div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center px-4 h-screen ">
          {/* Overlay animation */}
<div className="animate-fadeInUp relative w-full max-w-3xl max-h-[95vh] overflow-y-auto my-10">

            {/* Modal Content */}
            <div className="bg-white dark:bg-base-100 rounded-3xl shadow-xl p-10 border border-neutral/20 transition-all duration-300 my-10">
              <h2 className="text-3xl font-semibold mb-6 text-center text-accent-800 ">
                ✨ Update Recipe
              </h2>
              <form
                className="w-full grid grid-cols-2 gap-5  "
                onSubmit={handleUpdateSubmit}
              >
                {/* Image URL */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaImage /> Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    defaultValue={editRecipe.image}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaUtensils /> Recipe Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Creamy Alfredo Pasta"
                    defaultValue={editRecipe.title}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Ingredients */}
                <div className="space-y-2 col-span-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaListUl /> Ingredients
                  </label>
                  <textarea
                    name="ingredients"
                    defaultValue={editRecipe.ingredients}
                    placeholder="• Pasta\n• Cream\n• Garlic"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                  />
                </div>

                {/* Instructions */}
                <div className="space-y-2 col-span-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaBookOpen /> Instructions
                  </label>
                  <textarea
                    name="instructions"
                    defaultValue={editRecipe.instructions}
                    placeholder="1. Boil pasta...\n2. Make the sauce..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                  />
                </div>

                {/* Cuisine Type */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaGlobeAsia /> Cuisine Type
                  </label>
                  <select
                    name="cuisine"
                    defaultValue={editRecipe.cuisine}
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
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
                    <FaClock /> Preparation Time (mins)
                  </label>
                  <input
                    type="number"
                    name="prepTime"
                    placeholder="45"
                    defaultValue={editRecipe.prepTime}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                {/* Categories */}
                <div className="space-y-2 col-span-2">
                  <label className="flex items-center gap-2 text-lg font-semibold text-accent-800">
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
                            defaultChecked={editRecipe.categories?.includes(
                              cat
                            )}
                            className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary transition"
                          />
                          <span className="text-accent-800">{cat}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex justify-end gap-4 mt-6">
                  {/* Cancel Button */}
                  <button
                    type="button"
                    onClick={() => setEditRecipe(null)}
                    className="inline-flex items-center gap-2 justify-center px-6 py-2 rounded-full border border-red-400 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all duration-200 shadow-sm"
                  >
                    <FaTimesCircle className="text-lg" />
                    Cancel
                  </button>

                  {/* Update Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 justify-center px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 hover:from-lime-600 hover:to-green-700 transition-all duration-200 shadow-md"
                  >
                    <FaCheckCircle className="text-lg" />
                    Update Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipe;
