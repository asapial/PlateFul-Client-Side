import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import RecipeCard from "../../Components/recipe/RecipeCard";

const AllRecipes = () => {

  const [topRecipes, setTopRecipes] = useState([]);


  useEffect(() => {
    fetch("https://assignment10-server-seven-delta.vercel.app/allRecipe")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Error fetching top recipes:", err));
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">All Recipes</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>
        ))}
      </div>

    </div>
  );
};

export default AllRecipes;
