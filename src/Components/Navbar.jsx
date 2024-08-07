import React from "react";
import logo from "../assets/logo1.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/"><img className="mx-2  w-28" src={logo} alt="" /></a>
         
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.instagram.com/khan.anish_15?igsh=NHFwaWEwdGZkdzNl" target="_blank" rel="noopener noreferrer">
          <FaInstagram  className="cursor-pointer hover:text-red-400"/></a>
          <a  href="https://www.linkedin.com/in/anish-khan-054488273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn   className="cursor-pointer hover:text-blue-500"/>
          </a>
         <a  href="https://github.com/Anishkhan15" target="_blank" rel="noopener noreferrer">
         <FaGithub  className="cursor-pointer hover:text-white" />
         </a>
        <a  href="https://x.com/anishk015?s=09" target="_blank" rel="noopener noreferrer">
        <FaTwitter  className="cursor-pointer hover:text-blue-300"/>
        </a>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
