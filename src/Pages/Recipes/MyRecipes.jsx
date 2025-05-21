import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../main";
import { FaClock, FaHeart, FaPen, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const MyRecipe = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/myRecipes?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirm) return;

    const res = await fetch(`http://localhost:3000/recipes/${id}`, { method: "DELETE" });
    const result = await res.json();

    if (result.deletedCount > 0) {
      toast.success("Recipe deleted");
      setRecipes(prev => prev.filter(r => r._id !== id));
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
      categories: form.categories.value.split(",").map(cat => cat.trim()),
    };

    const res = await fetch(`http://localhost:3000/recipes/${selectedRecipe._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      toast.success("Recipe updated");
      setSelectedRecipe(null); // Close modal
      // Refresh list
      fetch(`http://localhost:3000/myRecipes?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setRecipes(data));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Recipes</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe._id} className="bg-white shadow-md rounded-xl overflow-hidden border">
            <img
              src={recipe.image || "https://via.placeholder.com/400x250?text=No+Image"}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-bold">{recipe.title}</h3>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p className="text-sm text-gray-600 whitespace-pre-line">{recipe.ingredients}</p>
              <p className="text-sm text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
              <p className="flex items-center text-sm gap-1"><FaClock /> {recipe.prepTime} mins</p>
              <p className="flex items-center text-sm gap-1 text-red-500"><FaHeart /> {recipe.likes || 0} likes</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {(Array.isArray(recipe.categories) ? recipe.categories : [recipe.categories]).map((cat, i) => (
                  <span key={i} className="bg-primary text-white px-2 py-1 rounded-full text-xs">{cat}</span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="btn btn-sm btn-info flex items-center gap-1"
                >
                  <FaPen /> Update
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="btn btn-sm btn-error flex items-center gap-1"
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
              <input defaultValue={selectedRecipe.image} name="image" placeholder="Image URL" className="input input-bordered w-full" />
              <input defaultValue={selectedRecipe.title} name="title" placeholder="Title" className="input input-bordered w-full" />
              <textarea defaultValue={selectedRecipe.ingredients} name="ingredients" placeholder="Ingredients" className="textarea textarea-bordered w-full" />
              <textarea defaultValue={selectedRecipe.instructions} name="instructions" placeholder="Instructions" className="textarea textarea-bordered w-full" />
              <input defaultValue={selectedRecipe.cuisine} name="cuisine" placeholder="Cuisine" className="input input-bordered w-full" />
              <input defaultValue={selectedRecipe.prepTime} name="prepTime" placeholder="Prep Time" className="input input-bordered w-full" />
              <input defaultValue={selectedRecipe.categories.join(", ")} name="categories" placeholder="Categories (comma separated)" className="input input-bordered w-full" />

              <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => setSelectedRecipe(null)} className="btn">Cancel</button>
                <button type="submit" className="btn btn-success">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipe;
