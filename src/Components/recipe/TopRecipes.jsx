
import { use, useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../../main";
import RecipeCard from "./RecipeCard";

const TopRecipes = () => {

  const [topRecipes, setTopRecipes] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/topRecipe")
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
        <button
          onClick={() => navigate("/recipes")}
          className="btn btn-secondary"
        >
          See All Recipes
        </button>
      </div>
    </div>
  );
};

export default TopRecipes;
