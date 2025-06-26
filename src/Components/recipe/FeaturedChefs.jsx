import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const chefs = [
  {
    name: "Chef Mario",
    specialty: "Italian Cuisine",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Cooking is all about passion and fresh ingredients.",
  },
  {
    name: "Sophie Lee",
    specialty: "Plating & Presentation",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "A beautiful plate is the first step to a delicious meal.",
  },
  {
    name: "Dr. Samir Patel",
    specialty: "Healthy Cooking",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "Healthy food can be tasty and exciting!",
  },
];

const FeaturedChefs = () => (
  <section className="w-full bg-base-100 py-20 px-4 flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 flex items-center gap-3">
      <FaStar className="text-accent" />
      Featured Chefs
    </h2>
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
      {chefs.map((chef, idx) => (
        <div
          key={idx}
          className="rounded-3xl bg-base-200/80 border border-base-300 shadow-xl flex flex-col items-center p-8"
        >
          <img
            src={chef.image}
            alt={chef.name}
            className="w-28 h-28 object-cover rounded-full border-4 border-primary mb-4"
          />
          <h3 className="text-xl font-bold text-secondary mb-1">{chef.name}</h3>
          <p className="text-info font-medium mb-3">{chef.specialty}</p>
          <div className="flex items-center gap-2 text-base-content/70 text-center">
            <FaQuoteLeft className="text-accent" />
            <span className="italic">{chef.quote}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedChefs;