import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../main";
import { FaBookOpen, FaClock, FaGlobeAsia, FaHeart, FaImage, FaListUl, FaPen, FaPlusCircle, FaTags, FaTimes, FaTrash, FaUtensils } from "react-icons/fa";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://assignment10-server-seven-delta.vercel.app/myRecipes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);

      });
  }, [user]);

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm(
  //     "Are you sure you want to delete this recipe?"
  //   );
  //   if (!confirm) return;

  //   const res = await fetch(`https://assignment10-server-seven-delta.vercel.app/recipes/${id}`, {
  //     method: "DELETE",
  //   });
  //   const result = await res.json();

  //   if (result.deletedCount > 0) {
  //     toast.success("Recipe deleted");
  //     setRecipes((prev) => prev.filter((r) => r._id !== id));
  //   }
  // };

  const handleUpdate = async (e) => {


    e.preventDefault();
    const form = e.target;
    const updatedData = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisine: form.cuisine.value,
      prepTime: form.prepTime.value,
      categories: form.categories.value.split(",").map((cat) => cat.trim()),
    };

    const res = await fetch(
      `https://assignment10-server-seven-delta.vercel.app/recipes/${selectedRecipe._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );

    if (res.ok) {
      toast.success("Recipe updated");
      setSelectedRecipe(null); // Close modal
      // Refresh list
      fetch(`https://assignment10-server-seven-delta.vercel.app/myRecipes?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <title>UpdateRecipes | PlateFul</title>

      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Recipes
      </h2>

      {/* display the data card  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-sm text-gray-700 whitespace-pre-line">
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
                  onClick={() => setSelectedRecipe(recipe)}
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
      {selectedRecipe && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md border border-white/20 
  flex items-center justify-center z-50 shadow-2xl rounded-xl p-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Update Recipe</h3>
                  <button
        onClick={() => setSelectedRecipe(null)} // Update this to your state handler
        className="absolute top-3 right-10 text-red-500 hover:text-red-700 transition text-xl"
        aria-label="Close Modal"
      >
        <FaTimes />
      </button>
        <form
          onSubmit={handleUpdate}
          className="w-full grid grid-cols-2 gap-5 "
        >
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
      )}
    </div>
  );
};

export default MyRecipes;
