"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [


  {
    id: 6,
    title: "Imaginify",
    description: "AI image editor Project",
    image: "/images/imaginify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SharoSN/imaginify",
    previewUrl: "https://imaginify-psi-nine.vercel.app/",
  },

  {
    id: 1,
    title: "Job Tracking Application",
    description: "A web application designed to track and mange your job applications progress, providing comprehensive insights into your application statistics.",
    image: "/images/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nftGambler/jobify",
    previewUrl: "https://jobify-ny52dy44d-redshanks-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Currency Markeplace",
    description: "A Crypto Marketplace to follow your favourite crypto coin.",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://crypto-project-portfolio.netlify.app",
  },
  {
    id: 3,
    title: "Client Project",
    description: "A project to help the client in promoting and hiring for his trucking company",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nftGambler/shuhabtruck",
    previewUrl: "https://shuhabtruck.vercel.app/",
  },
  {
    id: 4,
    title: "Amazon Clone Project",
    description: "Amazone clone web application",
    image: "/images/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nftGambler/Amazon-Project",
    previewUrl: "https://amazon-portfolio-project.netlify.app/",
  },
  {
    id: 5,
    title: "Price Wise E-Commerce",
    description: "An E-Commerce web application that lets you follow the best sales on your favourite products.",
    image: "/images/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nftGambler/pricewise",
    previewUrl: "https://pricewise-six-rho.vercel.app/",
  },
  {
    id: 6,
    title: "Mini Game",
    description: "Rock paper scissors. ",
    image: "/images/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SharoSN/Game",
    previewUrl: "https://sharosn.github.io/Game/",
  },



  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;