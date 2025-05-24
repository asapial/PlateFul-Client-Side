import { FaHeart, FaClock, FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const RecipeDetails = () => {
  const data=useLoaderData();

  const { image, title, cuisine, prepTime, likes, ingredients, instructions, categories } = data;
  const navigate = useNavigate();
  

  return (
 <div className="max-w-7xl mx-auto px-4 py-12">
     <title>RecipeDetails | PlateFul</title>

      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
      >
        <FaArrowLeft className="text-base" /> Back
      </button>

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        <div className="h-64 md:h-auto">
          <img
            src={image || "https://via.placeholder.com/500x300?text=No+Image"}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">
            Cuisine: <span className="font-medium">{cuisine}</span>
          </p>

          <div className="flex items-center gap-3 text-red-500 text-lg">
            <FaHeart />
            <span className="font-semibold">{likes || 0} Likes</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <FaClock />
            <span>{prepTime} mins</span>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Ingredients</h3>
            <p className="text-gray-700 whitespace-pre-line">{ingredients}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Instructions</h3>
            <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
          </div>

          {categories && (
            <div>
              <h3 className="font-semibold text-lg">Categories</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {(Array.isArray(categories) ? categories : [categories]).map((cat, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
