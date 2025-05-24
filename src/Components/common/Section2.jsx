import React, { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import cooking from "/src/assets/cooking.json";
import { Fade } from "react-awesome-reveal";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-base-300 py-16 w-10/12 mx-auto">
      <div className="justify-around mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <Lottie animationData={cooking} />;
        </div>

        {/* Content */}
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-light text-accent mb-4">
            <Fade
              delay={1000} // Wait 200ms before starting
              duration={2000} // Animation lasts 1 second
              triggerOnce // Only animate once
              fraction={0.5} // Start animation when element is 50% visible
            >
            <>
                            All About{" "}<span className="font-bold text-green-600">Plateful</span>
            </>

            </Fade>
          </h2>
          <p className="text-accent leading-relaxed mb-6 text-xl">
            Plateful is your ultimate culinary companion — discover, cook, and
            share mouthwatering recipes from around the world. Whether you're a
            home cook or a food enthusiast, Plateful brings flavor to your
            fingertips. One platform. Infinite inspiration.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gradient-to-r from-lime-500 via-emerald-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300">
              JOIN THE PLATEFUL FAMILY
            </button>
            <button className="flex items-center gap-2 text-green-600 hover:underline font-medium">
              <FaPlayCircle className="text-xl" />
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
