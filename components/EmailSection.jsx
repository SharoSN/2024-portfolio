"use client";
import React, { useState } from "react";
import GithubIcon from "../public/images/github-icon.svg"
import LinkedinIcon from "../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";




const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError(error.message);
    }

  };


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m actively seeking new opportunities and welcome any inquiries or messages you may have. Whether you have a question or simply want to say hello, feel free to reach out, and I&apos;ll do my best to respond promptly!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/nftGambler">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sahil-noorzai-0a2b87300/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-lg font-medium"
              >
                Email: 
              </label>
              {/* <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              /> */}
            <span className="text-[#ADB7BE]">sharo.s.n@hotmail.com</span>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-lg mb-2 font-medium"
              >
                Phone: 

              </label>
              {/* <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              /> */}

              <span className="text-[#ADB7BE]">+1 438-528-6982</span>

              
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-lg mb-2 font-medium"
              >
                Location: 

              </label>
              {/* <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              /> */}

              <span className="text-[#ADB7BE]">Canada, QC, Montreal</span>

              
            </div>
 
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;