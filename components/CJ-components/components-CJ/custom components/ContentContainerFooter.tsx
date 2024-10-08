import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
  width?: "full" | "xl" | "lg" | "md" | "sm";
  desktopWidth?: "full" | "small" | "medium" | "large";
}

export default function ContentFooterContainer({
  children,
  width = "full",
  desktopWidth,
}: ContentContainerProps) {
  let widthClass = "";

  switch (width) {
    case "full":
      widthClass = "w-full";
      break;
    case "xl":
      widthClass = "max-w-screen-xl";
      break;
    case "lg":
      widthClass = "max-w-screen-lg";
      break;
    case "md":
      widthClass = "max-w-screen-md";
      break;
    case "sm":
      widthClass = "max-w-screen-sm";
      break;
    default:
      widthClass = "max-w-screen-xl";
  }

  let desktopWidthClass = "";
  switch (desktopWidth) {
    case "full":
      desktopWidthClass = "w-full";
      break;
    case "small":
      desktopWidthClass = "max-w-[1250px]";
      break;
    case "medium":
      desktopWidthClass = "max-w-[1440px]";
      break;
    case "large":
      desktopWidthClass = "max-w-[1920px]";
      break;
    default:
      desktopWidthClass = "";
  }

  return (
    <div
      className={`mx-auto md:mt-8 mt-4 lg:px-4 2xl:w-[1563px] xl:w-[1280px] lg:w-[1024px]`}
    >
      <div className="flex mb-3 px-5">{children}</div>
    </div>
  );
}
