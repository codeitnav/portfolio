"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import about_img from "../../public/About.png";
import about_img_light from "../../public/about_img_lightMode.png";

const AboutSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const currentImg = resolvedTheme === "light" ? about_img_light : about_img;

  return (
    <section className="text-black dark:text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl dark:text-white">
              I&apos;m a second-year Computer Science and Engineering student with a specialisation in Artificial Intelligence passionate about building real-world solutions through tech. 
              <br />
              <br />
              From full-stack development to Web3, I enjoy turning ideas into impactful products. With strong skills in C++, Python, and Next.js, I&apos;m always exploring, learning, and creating. 
              <br />
              <br />
              Let&apos;s collaborate and push the boundaries of what&apos;s
              possible in this exciting journey!
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={currentImg}
              alt="About Me"
              width={400}
              height={400}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
