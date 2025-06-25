import React from "react";
import { motion } from "framer-motion";
import { FaRegThumbsUp } from "react-icons/fa";

const container = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="border-b border-neutral-900 pb-12 min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          Anish Khan
        </motion.h1>

        <motion.span
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl lg:text-4xl font-semibold tracking-tight"
        >
          Web Developer
        </motion.span>

        <motion.p
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg lg:text-xl font-light leading-relaxed"
        >
          Hi, I’m Anish 👋🏻 <br />
          Passionate about web development, startups, and clean design. I’m a Web Developer, building products that blend code with creativity.
          <br />
          <br />
          On weekends, you’ll find me learning new tech, creating side projects, or exploring new food spots in the city.
        </motion.p>

        <motion.button
          variants={container(0.9)}
          initial="hidden"
          animate="visible"
          onClick={handleScrollToContact}
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-slate-900 to-purple-800 text-white font-bold rounded-full px-6 py-3"
        >
          Let's Get Started <FaRegThumbsUp />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
