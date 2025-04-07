"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import cImg from "../../public/C_img.png";
import react from "../../public/react.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import cpp from "../../public/c++.png"
import js from "../../public/js.png";
import express from "../../public/express.png";
import mongo from "../../public/mongoDB.png";
import node from "../../public/nodeJs.png";
import tailwind from "../../public/tailwind.png";
import postman from "../../public/postman.png";
import solidity from "../../public/solidity.png"

const SkillsSection = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section className="text-black dark:text-white" id="skills">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              Skills
            </h2>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] md:max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 md:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col gap-4 overflow-auto dark:text-neutral-400 h-40 pb-10"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col items-center md:flex-row justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-all"
          >
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-24 w-24 md:h-14 md:w-14 rounded-lg object-cover"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

const cards = [
  {
    title: "C",
    src: cImg,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        I have a solid understanding of the language&apos;s syntax and core concepts, including data types, control structures, functions, and pointers. I have applied my knowledge to develop efficient algorithms and data structures, enhancing my problem-solving skills.
      </p>
    ),
  },
  {
    title: "C++",
    src: cpp,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Proficient in C++ with a strong grasp of object-oriented programming, data structures, and algorithmic problem-solving.
      </p>
    ),
  },
  {
    title: "React",
    src: react,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Proficient in building dynamic and responsive user interfaces using React with component-based architecture.
      </p>
    ),
  },
  {
    title: "JavaScript",
    src: js,
    ctaText: "More",
    content: () => (
      <p>
        Solid understanding of core JavaScript concepts including ES6+, DOM manipulation, and asynchronous programming.
      </p>
    ),
  },
  {
    title: "Express.js",
    src: express,
    ctaText: "More",
    content: () => (
      <p>
        Proficient in developing RESTful APIs and middleware logic using Express.js in Node.js environments.
      </p>
    ),
  },
  {
    title: "MongoDB",
    src: mongo,
    ctaText: "More",
    content: () => (
      <p>
        Hands-on experience with MongoDB for designing and managing NoSQL databases in full-stack applications.
      </p>
    ),
  },
  {
    title: "Node.js",
    src: node,
    ctaText: "More",
    content: () => (
      <p>
        Skilled in building scalable backend applications and RESTful APIs using Node.js and event-driven architecture.
      </p>
    ),
  },
  {
    title: "Postman",
    src: postman,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Proficient in using Postman for testing, debugging, and documenting RESTful APIs with a focus on efficient backend integration.
      </p>
    ),
  },
  {
    title: "HTML 5",
    src: html,
    ctaText: "More",
    content: () => (
      <p>
        I focus on writing clean, accessible code and ensuring compatibility across different browsers and devices. My work prioritizes SEO and accessibility for a user-friendly experience.
      </p>
    ),
  },
  {
    title: "CSS",
    src: css,
    ctaText: "More",
    content: () => (
      <p>
        I specialize in creating visually appealing designs, animations, and transitions while ensuring cross-browser compatibility and optimized performance.
      </p>
    ),
  },
  {
    title: "Tailwind CSS",
    src: tailwind,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Experienced in building modern, responsive UIs using Tailwind CSS with a utility-first approach for rapid and clean design.
      </p>
    ),
  },
  {
    title: "Solidity",
    src: solidity,
    ctaText: "More",
    ctaLink: "#",
    content: () => (
      <p>
        Familiar with writing and deploying smart contracts on the Ethereum and Solana-compatible blockchains using Solidity.
      </p>
    ),
  },
];

export default SkillsSection;
