import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const RecipeCard = ({recipe}) => {
      const navigate = useNavigate();
    return (
<div
      key={recipe._id}
      className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
    >
      <figure className="h-48 overflow-hidden rounded-t-2xl">
        <img
          src={recipe.image || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={recipe.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mt-1">Cuisine: {recipe.cuisine}</p>

        <div className="flex items-center gap-2 text-rose-500 mt-3">
            <button>
                <FaHeart className="text-lg hover:scale-110 transition-transform duration-200" />
            </button>
          <span className="font-medium">{recipe.likes || 0}</span>
        </div>

        <button
          onClick={() => navigate(`/recipeDetails/${recipe._id}`)}
          className="mt-5 w-full bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 
              hover:from-lime-600 hover:to-green-700 text-white py-2 rounded-xl text-sm font-medium shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
    );
};

export default RecipeCard;

