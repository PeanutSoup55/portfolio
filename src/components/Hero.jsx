import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/KevinRushProfile.png"
import {motion} from "framer-motion"
import TypingEffect from './TypingEffect'  // Import the TypingEffect component

// Container animation variants
const container = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})
const container2 = (delay) =>({
    hidden: {x: 100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Eric Blanchette</motion.h1>
                    <motion.span 
                    variants={container(0.15)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent whitespace-pre-line'>
                        <TypingEffect text={"- Full Stack Developer\n- Cybersecurity Analyst\n- Entrepreneur"} speed={30} />
                    </motion.span>

                    
                    {/* Typing Effect applied here */}
                    <motion.p 
                    variants={container(0.3)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        <TypingEffect text={HERO_CONTENT} speed={3} />
                    </motion.p>
                </div>
            </div>       
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    variants={container2(0.15)}
                    initial="hidden"
                    animate="visible"
                    src={profilePic} alt="" />
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Hero
