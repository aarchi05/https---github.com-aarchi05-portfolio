"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';


export default function About() {

  const { ref } = useSectionInView("About", 0.80);
  
  return (

    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8
    cm:mb-40 scroll-mt-28"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about"
   
    >

        <SectionHeading>About me</SectionHeading>

        {/* <p
        className="mb-3"
        >
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p> */}

<p
        className="mb-3"
        >
        I am an 18-year-old aspiring Software Engineer studying Software Engineering at
        the University of Waterloo. I found my passion for coding in a grade 8 Computers & Technology class
        where I was exposed to HTML programming. And well, the rest is all history in the making.
        Welcome to my website, feel free to scroll through and/or contact me!
        

        </p>



    </motion.section>
    
  );
}
