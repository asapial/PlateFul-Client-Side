import React, { useEffect, useState } from "react";
import { FaHeart, FaClock, FaUser, FaUtensils } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRatedItems = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/topRecipe?cnt=2")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Error fetching top recipes:", err));
  }, []);

  return (
    <section className="w-full bg-base-100 py-20 px-4 flex flex-col items-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center flex items-center gap-3"
        data-aos="fade-down"
      >
        <FaUtensils className="text-accent drop-shadow" />
        Top Rated Recipe
      </h2>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-2 gap-12">
        {topRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="relative rounded-3xl bg-base-200/80 border border-base-300 shadow-2xl flex flex-col md:flex-row items-center overflow-hidden backdrop-blur-lg"
            data-aos="zoom-in"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-base-100/80 px-3 py-1 rounded-full shadow">
              <FaHeart className="text-error" title="Likes" />
              <span className="text-error font-bold">{recipe.likes}</span>
            </div>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full md:w-64 h-64 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none border-b md:border-b-0 md:border-r border-primary shadow-lg"
              data-aos="fade-right"
            />
            <div className="flex-1 flex flex-col justify-center p-8 gap-4" data-aos="fade-left">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2 flex items-center gap-2">
                {recipe.title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-2">
                <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">
                  <FaUser /> {recipe.recipeOwner}
                </span>
                <span className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-lg text-sm font-medium">
                  <FaClock /> {recipe.prepTime} min
                </span>
                <span className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-medium">
                  {recipe.cuisine}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipe.categories?.map((cat) => (
                  <span
                    key={cat}
                    className="bg-info/10 text-info px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedItems;