import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/Profile.png";
import { motion } from "framer-motion";
import { FaRegThumbsUp } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Anish Khan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-xl font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <button
              onClick={handleScrollToContact}
              className="flex items-center gap-2  bg-gradient-to-r from-pink-500 via-slate-900 font-bold bg-purple-800 border-dotted rounded-full  px-4 py-4 "
            >
              Let's Get Started <FaRegThumbsUp />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
