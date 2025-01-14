import React from "react";

const SocialButtons = () => {
  return (
    <ul className="flex justify-center mt-5 space-x-10">
      <li className="relative group">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#1877F2] dark:text-gray-400"
        >
          <i className="fa-brands fa-facebook text-3xl"></i>
        </a>
        <span className="absolute hidden group-hover:flex justify-center items-center text-sm text-white bg-black bg-opacity-75 px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2">
          Facebook
        </span>
      </li>
      <li className="relative group">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#E1306C] dark:text-gray-400"
        >
          <i className="fab fa-instagram text-3xl"></i>
        </a>
        <span className="absolute hidden group-hover:flex justify-center items-center text-sm text-white bg-black bg-opacity-75 px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2">
          Instagram
        </span>
      </li>
      <li className="relative group">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#DB4437] dark:text-gray-400"
        >
          <i className="fa-regular fa-envelope text-3xl"></i>
        </a>
        <span className="absolute hidden group-hover:flex justify-center items-center text-sm text-white bg-black bg-opacity-75 px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2">
          Email
        </span>
      </li>
    </ul>
  );
};

export default SocialButtons;
