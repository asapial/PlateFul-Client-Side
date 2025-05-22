import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Link, Navigate } from "react-router";

const TopRecipes = () => {

  const [topRecipes, setTopRecipes] = useState([]);


  useEffect(() => {
    fetch("https://assignment10-server-seven-delta.vercel.app/topRecipe")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Error fetching top recipes:", err));
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Top Recipes</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>
        ))}
      </div>

      <div className="text-center mt-8">


                          <Link
            to="/allRecipes"
            className={({ isActive }) =>
              `text-base font-medium hover:underline hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-700" : "text-slate-600"
              }`
            }
          >
                <button
          className="btn btn-secondary"
        >
          See All Recipes
        </button>
          </Link>

      </div>
    </div>
  );
};

export default TopRecipes;
