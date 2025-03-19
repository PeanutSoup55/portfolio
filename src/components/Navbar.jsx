import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom
      behavior: 'smooth', // Smooth scroll
    });
  };
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <button
                onClick={scrollToBottom}
                className="font-bold rounded-2xl border-4 border-neutral-800 p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white focus:outline-none hover:scale-105 transition transform shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700"
            >
                CONTACT ME
            </button>
        </div>



        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/eric-blanchette-1a35a12a5/"><FaLinkedin/></a>
          <a href="https://github.com/PeanutSoup55"><FaGithub/></a>
          <a href="https://x.com/soup35582812"><FaSquareXTwitter/></a>
          <a href="https://www.instagram.com/eric_blanchette5/?hl=en"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
