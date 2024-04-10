"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section  className=" lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mt-6 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-rose-900">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sahil",
                1000,
                "Web Developer",
                1000,
                "Full-Stack Dev",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full-Stack developer who is dedicated to learning and growing every day. Web development is not just
            a career path for me, it is my passion.
          </p>
          <div className="flex flex-col items-center md:flex-row lg:flex-row">
            <Link
              href="/#contact"
              className="mx-2 bg-gradient-to-r to-sky-400 from-rose-900 text px-8 py-3 inline-block w-full sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3"
            >
              Hire Me
            </Link>
            <Link
              href="/2024-SN.pdf"
              className="border border-white px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r to-sky-400 from-rose-900 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212]   hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  lg:bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:bg-transparent  relative">
            <Image
              src="/images/logo.png"
              alt="hero image"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}

            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;