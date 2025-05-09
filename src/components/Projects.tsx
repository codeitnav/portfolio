"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import finance from "../../public/finance_img.png";
import blog from "../../public/blogging.png";
import pass_img from "../../public/password_img.png";
import curr_img from "../../public/currency_img.png";

const projects = [
  {
    title: "Expenze - Finance Tracker",
    description:
      "Your all-in-one solution to effortlessly manage, analyze, and optimize your personal finances with powerful AI-driven features",
    image: finance,
    link: "https://expenze-finance-tracker.vercel.app/",
    github: "https://github.com/codeitnav/Expenze_Finance_Tracker",
  },
  {
    title: "Scribe - Blogging Website",
    description:
      "A minimal and modern blogging website to share stories, insights, and creative content with readers around the world",
    image: blog,
    link: "https://scribeblog.vercel.app/",
    github: "https://github.com/codeitnav/Scribe",
  },
  {
    title: "Password Generator",
    description:
      "An interactive web app that lets users create secure, random passwords with customizable options like numbers and special characters, and copy them with a click",
    image: pass_img,
    link: "https://strong-password-generator-tool.vercel.app/",
    github: "https://github.com/codeitnav/Password-Generator",
  },
  {
    title: "Currency Converter",
    description:
      "A responsive and user-friendly web app enabling real-time conversion between 300+ global currencies",
    image: curr_img,
    link: "https://free-currency-converter-tool.vercel.app/",
    github: "https://github.com/codeitnav/currency-converter",
  },
];

const ProjectsSection = () => {
  return (
    <div className="px-4 py-8" id="projects">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-center">
        {projects.map((project, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ={100} className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${project.title} thumbnail`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Link →
                  </CardItem>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Github Repo
                  </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
