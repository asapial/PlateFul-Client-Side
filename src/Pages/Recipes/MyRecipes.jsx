import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../main";
import { FaClock, FaHeart, FaPen, FaTrash } from "react-icons/fa";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://assignment10-server-seven-delta.vercel.app/myRecipes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirm) return;

    const res = await fetch(`https://assignment10-server-seven-delta.vercel.app/recipes/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();

    if (result.deletedCount > 0) {
      toast.success("Recipe deleted");
      setRecipes((prev) => prev.filter((r) => r._id !== id));
    }
  };

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
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Recipes
      </h2>

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Update Recipe</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                defaultValue={selectedRecipe.image}
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={selectedRecipe.title}
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
              <textarea
                defaultValue={selectedRecipe.ingredients}
                name="ingredients"
                placeholder="Ingredients"
                className="textarea textarea-bordered w-full"
              />
              <textarea
                defaultValue={selectedRecipe.instructions}
                name="instructions"
                placeholder="Instructions"
                className="textarea textarea-bordered w-full"
              />
              <input
                defaultValue={selectedRecipe.cuisine}
                name="cuisine"
                placeholder="Cuisine"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={selectedRecipe.prepTime}
                name="prepTime"
                placeholder="Prep Time"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={selectedRecipe.categories.join(", ")}
                name="categories"
                placeholder="Categories (comma separated)"
                className="input input-bordered w-full"
              />

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(null)}
                  className="btn"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
