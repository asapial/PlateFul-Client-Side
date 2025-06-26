import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Link, Navigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const TopRecipes = () => {

  const [topRecipes, setTopRecipes] = useState([]);


  useEffect(() => {
    fetch("https://assignment10-server-seven-delta.vercel.app/topRecipe?cnt=6")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Error fetching top recipes:", err));
  }, []);


  return (
<div className="max-w-7xl mx-auto px-4 py-16 bg-base-100">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-accent tracking-tight">
    🍽️ Top 
              <Typewriter
            words={[' Recipes', ' Creations', ' Flavors', ' Dishes', ' Delights']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {topRecipes.map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe._id} />
    ))}
  </div>

  <div className="text-center mt-12">
<Link to="/allRecipes" className="inline-block group">
  <button className="relative inline-flex items-center px-7 py-3 
    bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 
    hover:from-lime-600 hover:to-green-700 
    text-white font-semibold rounded-full shadow-lg 
    transition-all duration-300 ease-in-out transform 
    hover:scale-105 hover:shadow-2xl 
    focus:outline-none focus:ring-4 focus:ring-emerald-300">
    
    <span className="mr-2">🍴</span>
    <span>See All Recipes</span>
    
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
  </button>
</Link>

  </div>
</div>

  );
};

export default TopRecipes;
