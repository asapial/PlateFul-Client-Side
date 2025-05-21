import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const RecipeCard = ({recipe}) => {
      const navigate = useNavigate();
    return (
          <div
            key={recipe._id}
            className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={recipe.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={recipe.title}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl">{recipe.title}</h3>
              <p className="text-sm text-gray-500">Cuisine: {recipe.cuisine}</p>
              <div className="flex items-center gap-2 text-error mt-2">
                <FaHeart />
                <span className="font-medium">{recipe.likes || 0}</span>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => navigate(`/recipeDetails/${recipe._id}`)}
                  className="btn btn-sm btn-primary w-full"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
    );
};

export default RecipeCard;

