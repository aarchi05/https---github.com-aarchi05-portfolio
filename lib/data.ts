import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ecommercethatgirl from "@/public/ecommercethatgirl.png"
import adminpage from "@/public/adminpage.png"

//import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Waterloo's Engineering Society - EngSoc Website Director",
    location: "Waterloo, ON | Dec 2023 - Present",
    description:
      "After being chosen for the role of a Website Director for EngSoc, I have been working to improve the EngSoc website alongside other upper-year engineering students. We are currently working on implementing a website traffic tracker as well as an automated Google Sheets system to help increase EngSoc's productivity.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  
  {
    title: "That Girl Catalogue Site",
    description:
      "That Girl is an online catalogue where users can quickly find links for the most popular products on the market.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "shadcn/ui"],
    imageUrl: ecommercethatgirl,
  },
  
  {
    title: "E-Commerce Admin",
    description:
      "I developed this e-commerce admin backend while developing That Girl, and my catalogue site uses this dashboard to process products, etc.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MySQL", "shadcn/ui"],
    imageUrl: adminpage,
  },

  {
    title: "UWeddit",
    description:
      "This is a reddit clone I developed specifically for the University of Waterloo's students (and faculty haha).",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MySQL", "shadcn/ui"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Swift (iOS)",
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MySQL",
  
] as const;