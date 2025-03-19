import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiWireshark } from "react-icons/si";
import { FiFigma } from 'react-icons/fi';


const Card = ({ Icon, title, iconClassName, cardClassName }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);
    const [shadow, setShadow] = useState("shadow-lg");

    // Function to calculate tilt effect based on cursor position
    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        
        const x = (clientX - left) / width - 0.5; // Normalize to -0.5 to 0.5
        const y = (clientY - top) / height - 0.5; // Normalize to -0.5 to 0.5
        
        setRotateX(y * -60); // Tilt stronger
        setRotateY(x * 60);
        setScale(1.1); // Slightly enlarge on hover
        setShadow("shadow-2xl shadow-blue-500/90"); // Add 3D shadow effect
    };

    return (
        <motion.div 
            style={{ perspective: 1000 }} // Ensures 3D depth
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { 
                setRotateX(0); 
                setRotateY(0); 
                setScale(1); // Reset size
                setShadow("shadow-lg"); // Reset shadow
            }}
            animate={{ rotateX, rotateY, scale }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className={`rounded-2xl border-4 border-neutral-600 p-4 flex flex-col items-center justify-center bg-[#1a1f2b] ${shadow} ${cardClassName}`}
        >
            <Icon className={iconClassName} />
            <p className="text-lg font-semibold text-neutral-300 mt-2 text-center">{title}</p>
        </motion.div>
    );
};

const Technologies = () => {
    return (
<div className='border-b border-neutral-800 pb-24'>
    <h1 className='my-20 text-center text-4xl'>Technologies</h1>

    {/* Frontend Technologies */}
    <h2 className="text-center text-2xl mt-8 mb-4 text-neutral-300">Frontend</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <Card 
            Icon={RiReactjsLine} 
            title="React.js" 
            iconClassName="text-7xl text-cyan-400" 
            cardClassName="p-4"
        />
        <Card 
            Icon={TbBrandNextjs} 
            title="Next.js" 
            iconClassName="text-7xl" 
            cardClassName="p-4"
        />
        <Card 
            Icon={RiTailwindCssFill} 
            title="Tailwind CSS" 
            iconClassName="text-7xl text-sky-700" 
            cardClassName="p-4"
        />
        <Card 
            Icon={IoLogoJavascript} 
            title="JavaScript" 
            iconClassName="text-7xl text-yellow-400" 
            cardClassName="p-4"
        />
        <Card 
            Icon={FiFigma} 
            title="Figma" 
            iconClassName="text-7xl text-red-600" 
            cardClassName="p-4"
        />
    </div>

    {/* Backend Technologies */}
    <h2 className="text-center text-2xl mt-8 mb-4 text-neutral-300">Backend</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <Card 
            Icon={FaNodeJs} 
            title="Node.js" 
            iconClassName="text-7xl text-green-500" 
            cardClassName="p-4"
        />
        <Card 
            Icon={FaLaravel} 
            title="Laravel" 
            iconClassName="text-7xl text-red-700" 
            cardClassName="p-4"
        />
        <Card 
            Icon={FaPython} 
            title="Python" 
            iconClassName="text-7xl text-black-700" 
            cardClassName="p-4"
        />
        <Card 
            Icon={FaPhp} 
            title="PHP" 
            iconClassName="text-7xl text-purple-500" 
            cardClassName="p-4"
        />
    </div>

    {/* Database Technologies */}
    <h2 className="text-center text-2xl mt-8 mb-4 text-neutral-300">Databases</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <Card 
            Icon={SiMongodb} 
            title="MongoDB" 
            iconClassName="text-7xl text-green-500" 
            cardClassName="p-4"
        />
        <Card 
            Icon={GrMysql} 
            title="MySQL" 
            iconClassName="text-7xl text-sky-700" 
            cardClassName="p-4"
        />
        <Card 
            Icon={BiLogoPostgresql} 
            title="PostgreSQL" 
            iconClassName="text-7xl text-sky-700" 
            cardClassName="p-4"
        />

        <Card 
            Icon={IoLogoFirebase} 
            title="Firebase" 
            iconClassName="text-7xl text-orange-500" 
            cardClassName="p-4"
        />
    </div>

    {/* DevOps & Security */}
    <h2 className="text-center text-2xl mt-8 mb-4 text-neutral-300">DevOps & Security</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <Card 
            Icon={SiKalilinux} 
            title="Kali Linux" 
            iconClassName="text-7xl text-gray-400" 
            cardClassName="p-4"
        />
        <Card 
            Icon={SiWireshark} 
            title="Wireshark" 
            iconClassName="text-7xl text-gray-400" 
            cardClassName="p-4"
        />
    </div>
</div>

    );
};

export default Technologies;
