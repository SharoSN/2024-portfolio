"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2  ">
        <li>Next.Js</li>
        <li>React.Js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>CSS/Tailwind</li>
        <li>Langchain.js (LLMs)</li>
        <li>Pinecone</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>Sheridan College Architectural Technology</li>
        <li>Meadowvale Secondary High School</li>
        <li>Adolf-Reichwein-Schule Middle School Germany</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-2">
        <li>Coursera Front-End Developer Professional Certificate</li>
        <li>Coursera Back-End Developer Professional Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about.png" alt="logo" width={450} height={450} />

          <div className=" mt-6 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-whie mb-4">About Me</h2>

            <p className="text-base lg:text-lg">
              As a passionate Full-Stack developer, I have embarked on an
              inspiring journey for the past 2 years. Motivated by deep
              curiosity for web development and a desire to expand my skillset,
              I have dedicated countless hours to honing my craft independently.
            </p>

            <div className="flex flex-row mt-8">
              {TAB_DATA.map((tab) => (
                <TabButton
                  key={tab.id}
                  selectTab={() => handleTabChange(tab.id)}
                  active={tab.id === tab}
                >
                  {tab.title}
                </TabButton>
              ))}
            </div>

            <div className="mt-8">{selectTab?.content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
