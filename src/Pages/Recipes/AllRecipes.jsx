import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeCard from "../../Components/recipe/RecipeCard";

const AllRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const cuisineTypes = [
    "All", "Italian", "Mexican", "Chinese", "Indian", "Others"
  ];

  // Fetch recipes when search is triggered
  const fetchRecipes = async () => {
    setLoading(true);
    let url = "https://assignment10-server-seven-delta.vercel.app/allRecipe";
    const params = [];
    if (selectedCuisine && selectedCuisine !== "All") {
      params.push(`cuisine=${selectedCuisine}`);
    }
    if (searchTerm) {
      params.push(`search=${encodeURIComponent(searchTerm)}`);
    }
    if (params.length) {
      url += "?" + params.join("&");
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopRecipes(data);
    } catch (err) {
      console.error("Error fetching top recipes:", err);
    }
    setLoading(false);
  };

  // Handle cuisine change and trigger search
  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setTimeout(fetchRecipes, 0); // Ensure searchTerm is updated before fetch
  };

  // Fetch when cuisine or searchTerm changes
  React.useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line
  }, [selectedCuisine, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <title>AllRecipes | PlateFul</title>
      <h2 className="text-4xl font-extrabold text-center mb-10 text-primary tracking-tight">
        <span className="inline-flex items-center gap-2">
          <FaSearch className="text-secondary" /> All Recipes
        </span>
      </h2>

      {/* Search & Filter */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
      >
        <select
          value={selectedCuisine}
          onChange={handleCuisineChange}
          className="select select-bordered select-primary w-full max-w-xs"
        >
          {cuisineTypes.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            className="input input-bordered input-secondary w-full rounded-r-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary rounded-l-none"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {/* Recipes Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : topRecipes.length === 0 ? (
          <div className="col-span-full text-center text-lg text-error font-semibold">
            No recipes found.
          </div>
        ) : (
          topRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllRecipes;