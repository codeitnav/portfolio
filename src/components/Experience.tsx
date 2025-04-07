"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ecell from "../../public/ecell.png";
import kiet from "../../public/kiet.png";
import sl from "../../public/softwarelance.png"

const ExperienceSection = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={sl}
            alt="Reliance Jio"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              Softwarelance <br></br>Full-stack Intern
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: January 2025 - March 2025
            </h3>
            <p className="text-black dark:text-white text-xs sm:text-sm md:text-base mt-2">
            Gained hands-on experience in full-stack development using the MERN stack. Improved data flow efficiency and optimized performance while contributing to real-world web application projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={ecell}
            alt="Startup Template"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              Entrepreneurship Cell<br></br>Corporate Relations Supervisor
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: November 2023 - December 2024
            </h3>
            <p className="text-black dark:text-white text-xs sm:text-sm md:text-base mt-2">
              Built corporate ties with 30+ companies and managed budgets for successful event execution.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-wrap gap-4">
          <Image
            src={kiet}
            alt="Startup Template"
            width={80}
            height={80}
            className="rounded-lg object-cover shadow-md w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div className="flex-1">
            <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg font-bold">
              KIET Group Of Institutions<br></br>Student
            </h2>
            <h3 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
              Duration: October 2023 - March 2027
            </h3>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Senior Secondary
          </h2>
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Patanjali Rishikul
          </h2>
          <h2 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
            2021-22
          </h2>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Higher Secondary
          </h2>
          <h2 className="text-black dark:text-white text-sm sm:text-base md:text-lg">
            Patanjali Rishikul
          </h2>
          <h2 className="text-black dark:text-white text-xs sm:text-sm md:text-base">
            2019-20
          </h2>
        </div>
      ),
    },
  ];

  return (
    <div className="py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12" id="experience" >
      <section className="text-black dark:text-white" >
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience and Education
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base max-w-md">
              Here&apos;s a timeline of my journey.
            </p>
          </div>
        </div>
      </section>
      <Timeline data={data} />
    </div>
  );
}

export default ExperienceSection;
