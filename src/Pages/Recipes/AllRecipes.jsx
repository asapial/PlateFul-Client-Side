import { useEffect, useState } from "react";
import RecipeCard from "../../Components/recipe/RecipeCard";

const AllRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [cuisineTypes, setCuisineTypes] = useState([
    "All", "Italian", "Mexican", "Chinese", "Indian", "Others"
  ]);

  useEffect(() => {
    let url = "https://assignment10-server-seven-delta.vercel.app/allRecipe";
    // let url = "http://localhost:3000/allRecipe";
    if (selectedCuisine && selectedCuisine !== "All") {
      url += `?cuisine=${selectedCuisine}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Error fetching top recipes:", err));
  }, [selectedCuisine]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">All Recipes</h2>

      {/* Cuisine Filter */}
      <div className="mb-6 text-center">
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {cuisineTypes.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Recipes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
