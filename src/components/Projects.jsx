import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-12'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div className='space-y-12'>
        {PROJECTS.map((project, index) => {
          // Determine slide-in direction
          const isEven = index % 2 === 0;
          const variants = {
            hidden: { opacity: 0, x: isEven ? -100 : 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          };

          return (
            <motion.div
              key={index}
              className='mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 rounded-lg border-2 border-neutral-800 bg-neutral-900 p-6 shadow-lg'
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Ensures it only animates once
            >
              <div className='w-full lg:w-1/3 flex justify-center'>
                <img
                  src={project.image}
                  width={350}
                  height={250}
                  alt={project.title}
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='w-full max-w-md lg:w-2/3 flex flex-col justify-center text-center lg:text-left'>
                <h6 className='mb-3 text-xl font-semibold'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <div className='flex flex-wrap justify-center lg:justify-start gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-500'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block w-fit rounded-lg bg-purple-800 px-4 py-2 text-white font-medium transition hover:bg-purple-700 hover:scale-105"
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

