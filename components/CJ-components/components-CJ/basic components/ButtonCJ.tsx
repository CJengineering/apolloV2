"use client";

import React from "react";

interface ButtonCJProps {
  href: string;
  text: string;
  openInNewTab?: boolean; // Add this prop
}

const ButtonCJ: React.FC<ButtonCJProps> = ({ href, text, openInNewTab = false }) => {
  return (
    <a href={href} target={openInNewTab ? "_blank" : "_self"} className="inline-block">
      <button className="text-tiny rounded-lg border-2 border-blue-500 bg-transparent px-8 py-2 font-bold uppercase text-blue-500 transition duration-150 ease-in-out hover:border-orange-500 hover:text-orange-500">
        {text}
      </button>
    </a>
  );
};

export default ButtonCJ;