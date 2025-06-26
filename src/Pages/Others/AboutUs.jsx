import React from "react";
import { FaUsers, FaRegLightbulb, FaRegHeart } from "react-icons/fa";
import PlateFulNamePlate from "../../Atoms/PlateFulNamePlate";


const AboutUs = () => {
  return (
    <div className="max-w-7xl min-h-[80vh] flex flex-col items-center justify-center bg-base-100 px-4 py-12 mx-auto">
      <div className="max-w-7xl w-full mx-auto rounded-3xl shadow-2xl bg-base-200/80 border border-base-300 p-10 md:p-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 flex items-center gap-2">
              <PlateFulNamePlate></PlateFulNamePlate>
            </h1>
            <p className="text-lg md:text-xl text-base-content/80 mb-6">
              PlateFul is your premium destination for discovering, sharing, and enjoying the world’s best recipes. Our mission is to bring food lovers together, inspire creativity in the kitchen, and make every meal a memorable experience.
            </p>
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-2 shadow">
                <FaUsers className="text-primary text-2xl" />
                <span className="font-semibold text-base-content">Community Driven</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/10 rounded-xl px-4 py-2 shadow">
                <FaRegLightbulb className="text-secondary text-2xl" />
                <span className="font-semibold text-base-content">Inspiring Ideas</span>
              </div>
              <div className="flex items-center gap-3 bg-accent/10 rounded-xl px-4 py-2 shadow">
                <FaRegHeart className="text-accent text-2xl" />
                <span className="font-semibold text-base-content">Passion for Food</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="About PlateFul"
              className="rounded-2xl shadow-lg border-4 border-primary w-full max-w-xs md:max-w-sm object-cover"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Vision</h2>
          <p className="text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
            We believe food is more than just sustenance—it's a way to connect, celebrate, and create memories. PlateFul is committed to providing a premium, user-friendly platform where everyone can share their culinary journey and discover new favorites every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;