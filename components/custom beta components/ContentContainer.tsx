import React from "react";
import Sidebar2 from "../ui/sideBar2";
import Footer from "../ui/footer";

interface ContentContainerProps {
  children: React.ReactNode;
  width?: "full" | "xl" | "lg" | "md" | "sm";
  desktopWidth?: "full" | "small" | "medium" | "large";
}

export default function ContentContainer({
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
      className={`mx-auto md:mt-8 px-4 2xl:w-[1563px] xl:w-[1280px] lg:w-[1024px]`}
    >
      <div className="flex mb-6">
        <div className="w-[250px] hidden  lg:block">
          <div className="sticky  top-[64px] overflow-auto overflow-x-hidden side-scroll-bar">
            <Sidebar2 />
          </div>
        </div>
        <div className="2xl:max-w-[1283px] xl:max-w-[1030px] lg:max-w-[774px] pl-4 ">
          {children}
        </div>
      </div>
          <Footer />
    </div>
  );
}
