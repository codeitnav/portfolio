"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import linkedin from "../../public/linkedin.png";
import linkedin_dark from "../../public/linkedin_dark.png";
import github from "../../public/github.png";
import github_dark from "../../public/github_dark.png";
import hashnode from "../../public/hashnode.png";
import hashnode_dark from "../../public/hashnode_dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();

  const linkedinIcon = resolvedTheme === 'light' ? linkedin_dark : linkedin;
  const githubIcon = resolvedTheme === 'light' ? github_dark : github;
  const hashnodeIcon = resolvedTheme === 'light' ? hashnode_dark : hashnode;

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg px-6 mb-4" id="footer">
      <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col text-center md:text-left">
          <span>Copyright &copy; {currentYear} Navya Srivastava.</span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://www.linkedin.com/in/navya-srivastava-7365a1282/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://github.com/codeitnav" target="_blank" rel="noopener noreferrer">
            <Image src={githubIcon} alt="GitHub" width={32} height={32} />
          </Link>
          <Link href="https://hashnode.com/@navya01" target="_blank" rel="noopener noreferrer">
            <Image src={hashnodeIcon} alt="YouTube" width={32} height={32} />
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <span className="font-bold">Get in touch</span>
          <Link href="mailto:navya.srivas03@gmail.com" className="text-blue-500 hover:underline">
            navya.srivas03@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
