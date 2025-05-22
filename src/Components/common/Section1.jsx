import React from "react";
import { FaUtensils } from "react-icons/fa";

const Section1 = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen w-full" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
          Savor Every Bite with <span className="text-lime-400">Plateful</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-2xl mt-6 max-w-2xl">
          Explore hundreds of handpicked recipes shared by food lovers across the globe.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="flex items-center gap-3 bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300">
            <FaUtensils className="text-xl" />
            Browse Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
