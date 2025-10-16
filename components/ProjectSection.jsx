"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ ProjectTag";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSwipeable } from "react-swipeable";

const projectsData = [
  {
    id: 1,
    title: "React Native App",
    description:
      "An AI-powered mobile expense tracker that I am currently developing.",
    images: [
      "/images/react-native-1.png",
      "/images/react-native-2.png",
      "/images/react-native-3.png",
      "/images/react-native-4.png",
      "/images/react-native-5.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SharoSN/react-native-expense-tracker",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Job Tracking Application",
    description:
      "A web application designed to track and manage your job applications' progress, providing comprehensive insights into your application statistics.",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nftGambler/jobify",
    previewUrl: "https://jobify-ny52dy44d-redshanks-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Crypto Currency Marketplace",
    description: "A crypto marketplace to follow your favourite crypto coins.",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://crypto-project-portfolio.netlify.app",
  },
  {
    id: 4,
    title: "Client Project",
    description:
      "A project to help the client promote and hire for his trucking company.",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nftGambler/shuhabtruck",
    previewUrl: "https://shuhabtruck.vercel.app/",
  },
  {
    id: 5,
    title: "Amazon Clone Project",
    description: "An Amazon clone web application.",
    image: "/images/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nftGambler/Amazon-Project",
    previewUrl: "https://amazon-portfolio-project.netlify.app/",
  },
  {
    id: 6,
    title: "Price Wise E-Commerce",
    description:
      "An E-Commerce web application that lets you follow the best sales on your favourite products.",
    image: "/images/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nftGambler/pricewise",
    previewUrl: "https://pricewise-six-rho.vercel.app/",
  },
  {
    id: 7,
    title: "Mini Game",
    description: "Rock paper scissors.",
    image: "/images/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SharoSN/Game",
    previewUrl: "https://sharosn.github.io/Game/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const openModal = (index, images) => {
    setSelectedImageIndex(index);
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handlePrev = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedImages.length) % selectedImages.length,
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedImages.length,
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Filter */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={setTag} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={setTag} name="Web" isSelected={tag === "Web"} />
        <ProjectTag
          onClick={setTag}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) =>
          project.title === "React Native App" ? (
            <div key={project.id} className="w-full max-w-3xl mx-auto">
              <Carousel className="relative">
                <CarouselContent className="items-center">
                  {project.images.map((img, idx) => (
                    <CarouselItem key={idx} className="w-full">
                      <div className="p-2">
                        <Card className="bg-transparent border-none shadow-none">
                          <CardContent className="flex flex-col items-center justify-center p-0">
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className="w-full max-h-56 object-contain rounded-md cursor-pointer"
                              onClick={() => openModal(idx, project.images)}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="absolute inset-y-1/2 left-0 transform -translate-y-1/2 z-10">
                  <CarouselPrevious className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200" />
                </div>
                <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 z-10">
                  <CarouselNext className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200" />
                </div>
              </Carousel>

              {/* Title */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <div className="flex justify-center gap-4">
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      className="text-green-500 hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ),
        )}
      </ul>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
          {...handlers}
        >
          <div
            className="relative max-w-3xl w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImages[selectedImageIndex]}
              alt="Enlarged"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
            >
              ▶
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
