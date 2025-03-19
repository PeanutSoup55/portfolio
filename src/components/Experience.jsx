import React, { useState, useEffect, useRef } from 'react';
import TypingEffect from './TypingEffect'; // Import TypingEffect
import { EXPERIENCES } from '../constants';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true }); // Triggers once when in view
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        if (isTitleInView) {
            setStartTyping(true);
        }
    }, [isTitleInView]);

    return (
        <div className='border-b border-neutral-900 pb-4'>
            {/* Typing effect only starts when in view */}
            <h1 ref={titleRef} className='my-20 text-center text-4xl'>
                {startTyping ? <TypingEffect text="Experience" speed={120} /> : "Experience"}
            </h1>
            
            <div>
                {EXPERIENCES.map((experience, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true }); // Ensures animation happens only once
                    const [hasAnimated, setHasAnimated] = useState(false);

                    useEffect(() => {
                        if (isInView) {
                            setHasAnimated(true);
                        }
                    }, [isInView]);

                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div 
                                ref={ref}
                                initial={{ opacity: 0, x: -100 }}
                                animate={hasAnimated ? { opacity: 1, x: 0 } : {}} // Only animate once
                                transition={{ duration: 0.5 }}
                                className='w-full lg:w-1/4'
                            >
                                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            </motion.div>

                            <motion.div 
                                ref={ref}
                                initial={{ opacity: 0, x: 100 }}
                                animate={hasAnimated ? { opacity: 1, x: 0 } : {}} // Only animate once
                                transition={{ duration: 0.5 }}
                                className='w-full max-w-xl lg:w-3/4'
                            >
                                <h6 className='mb-2 font-semibold'>
                                    {experience.role} - <span className='text-sm text-purple-100'>
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;
