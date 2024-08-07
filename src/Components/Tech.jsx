import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        },
    },
    
});


const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0 ,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex justify-center gap-4 flex-wrap items-center">
            <motion.div  variants={iconVariants(2.5)} initial="initial" animate="animate"  className="rounded-2xl cursor-pointer border-4 border-neutral-800 p-4">
               <FaHtml5 className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl  cursor-pointer border-4 border-neutral-800 p-4">
               <IoLogoCss3 className='text-7xl text-red-400'/>
            </motion.div>

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl  cursor-pointer border-4 border-neutral-800 p-4">
               <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl  cursor-pointer border-4 border-neutral-800 p-4">
               <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl  cursor-pointer border-4 border-neutral-800 p-4">
               <FaBootstrap className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div  variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl  cursor-pointer border-4 border-neutral-800 p-4">
               <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>


        </motion.div>

    </div>
  )
}

export default Tech