import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white dark:bg-slate-900 text-black dark:text-white border-t border-gray-200 dark:border-slate-700 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-body sm:text-center">
        © 2026{" "}
        <Link to="/" className="hover:underline">
          Cinemate™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
          <Link href="https://github.com/withcodeboima?tab=repositories" target="_blank" className="hover:underline me-4 md:me-6">
            Instagram
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/withcodeboima"  target="_blank" className="hover:underline me-4 md:me-6">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://youtube.com/withcodeboima" className="hover:underline me-4 md:me-6">
           Youtube
          </Link>
        </li>
        <li>
          <Link href="https://github.com/withcodeboima" target="_blank" className="hover:underline">
            GitHub
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
