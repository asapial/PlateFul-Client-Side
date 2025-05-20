import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
  return (
<footer className="bg-gradient-to-br from-[#0d0d0d] via-[#111827] to-[#1f2937] text-gray-400 pt-16 pb-12 px-4 sm:px-10 w-full flex  flex-col items-center justify-center ">
  <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left  justify-around">
    
    {/* Brand Section */}
    <div>
      <h2 className="text-white text-3xl font-bold tracking-wide">BoxaBly</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-sm mx-auto md:mx-0">
        Your gateway to unlimited entertainment — Movies, Shows, Originals.
        Anytime, Anywhere.
      </p>
    </div>

    {/* Explore Links */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-5">Explore</h3>
      <ul className="space-y-3 text-sm font-medium">
        <li><Link to={'/termsAndCondition'} className="hover:text-white transition-all duration-300 hover:underline underline-offset-4">Terms and Condition</Link></li>
        <li><Link to={'/privacyPolicy'} className="hover:text-white transition-all duration-300 hover:underline underline-offset-4">Privacy Policy</Link></li>
      </ul>
    </div>

    {/* Social Media Icons */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-5">Follow Us</h3>
      <div className="flex justify-center md:justify-start gap-6 text-white text-xl">
        <a href="https://www.x.com/" aria-label="Twitter" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-red-500 hover:scale-110 transition-all duration-300">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-blue-600 hover:scale-110 transition-all duration-300">
          <FaFacebookF />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 w-full">
    <p>
      &copy; {new Date().getFullYear()} <span className="text-white font-semibold tracking-wide">BoxaBly</span>. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
