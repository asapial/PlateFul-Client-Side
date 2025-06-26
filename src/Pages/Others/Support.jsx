import React from "react";
import { FaRegEnvelope, FaPhoneAlt, FaRegCommentDots, FaRegSmile } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import PlateFulNamePlate from "../../Atoms/PlateFulNamePlate";

const Support = () => {
  return (
    <div className="max-w-7xl min-h-[85vh] flex flex-col items-center justify-center bg-base-100 px-4 py-16">
      <div className="max-w-7xl w-full mx-auto rounded-3xl shadow-2xl bg-base-200/80 border border-base-300 p-10 md:p-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <MdSupportAgent className="text-primary text-6xl mb-2" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 flex items-center gap-2">
            Support <PlateFulNamePlate></PlateFulNamePlate>
          </h1>
          <p className="text-lg md:text-xl text-base-content/80 text-center max-w-2xl">
            Need help or have questions? Our team is here to assist you. Reach out to us anytime and we’ll make sure your PlateFul experience is smooth and delightful.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center bg-primary/10 rounded-xl px-6 py-8 shadow">
            <FaRegEnvelope className="text-primary text-3xl mb-3" />
            <h2 className="font-bold text-base-content mb-1">Email Us</h2>
            <a href="mailto:support@plateful.com" className="text-primary underline">
              support@plateful.com
            </a>
          </div>
          <div className="flex flex-col items-center bg-secondary/10 rounded-xl px-6 py-8 shadow">
            <FaPhoneAlt className="text-secondary text-3xl mb-3" />
            <h2 className="font-bold text-base-content mb-1">Call Us</h2>
            <a href="tel:+1234567890" className="text-secondary underline">
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex flex-col items-center bg-accent/10 rounded-xl px-6 py-8 shadow">
            <FaRegCommentDots className="text-accent text-3xl mb-3" />
            <h2 className="font-bold text-base-content mb-1">Live Chat</h2>
            <span className="text-accent">Chat with us 24/7</span>
          </div>
        </div>
        <div className="mt-12 text-center">
          <FaRegSmile className="text-success text-4xl mb-2 inline-block" />
          <h2 className="text-2xl md:text-3xl font-bold text-success mb-3">We're Here For You</h2>
          <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            Your satisfaction is our top priority. Whether you have feedback, need technical support, or just want to say hello, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;