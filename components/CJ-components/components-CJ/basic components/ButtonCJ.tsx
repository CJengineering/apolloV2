"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonCJProps {
  href: string;
  text: string;
  openInNewTab?: boolean;
  styleType?: "primary" | "secondary"; // Add this prop for styles
}

const ButtonCJ: React.FC<ButtonCJProps> = ({
  href,
  text,
  openInNewTab = false,
  styleType = "primary",
}) => {
  const styles = {
    primary: "text-tiny sans-serif rounded-lg border-2 border-[#ab2332] bg-transparent px-8 py-2 font-bold uppercase text-[#ab2332] transition duration-150 ease-in-out hover:border-orange-600 dark:hover-border-orange-500 hover:text-orange-600 dark:hover:text-orange-500 dark:border-blue-400 dark:hover:border-orange-500 dark:text-blue-400",
    secondary: "text-base sans-serif underline transition duration-150 ease-in-out hover:text-blue-800 dark:hover:text-blue-400 flex items-center group",
    tertiary: "text-base sans-serif bg-transparent font-bold text-blue transition duration-150 ease-in-out hover:underline",
  };

  return (
    <a href={href} target={openInNewTab ? "_blank" : "_self"} className="inline-block">
      <button className={styles[styleType]}>
        <span>{text}</span>
        {styleType === "secondary" && (
          <ArrowRightIcon className="h-5 w-5 ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        )}
      </button>
    </a>
  );
};

export default ButtonCJ;