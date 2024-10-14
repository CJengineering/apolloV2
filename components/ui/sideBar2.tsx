// "use client";

// import { useRef, useEffect } from "react";
// import { useAppProvider } from "@/app/app-provider";
// import { useSelectedLayoutSegments } from "next/navigation";
// import { Transition } from "@headlessui/react";
// import Link from "next/link";
// import SidebarLink from "./sidebar-link";
// import SidebarLinkGroup from "./sidebar-link-group";
// import SidebarLinkSubgroup from "./sidebar-link-subgroup";
// import VectorIcon from "./vectorIcon";
// import GlobeIcon from "./globe-icon";
// import ChipIcon from "./chip-icon";
// import BeakerIcon from "./beaker-icon";
// import { ChevronRightIcon } from '@heroicons/react/24/solid';

"use client";

import { useRef, useEffect, useState } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import SidebarLinkSubgroup from "./sidebar-link-subgroup";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BeakerIcon,
  ChevronRightIcon,
  CpuChipIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SidebarLinkSubChildren from "./sidebar-link-sub-children";

type NavItem = {
  name: string;
  href?: string;
  current?: boolean;
  children?: NavItem[];
  subChildren?: NavItem[];
  targetBlank?: boolean;
};

const navItems: NavItem[] = [
  {
    name: "About",
    children: [
      { name: "Overview", href: "/about/overview" },
      { name: "Team", href: "/about/team" },
      { name: "Family album", href: "/about/family-album" },
      { name: "Brand", href: "/about/brand" },
    ],
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Discover",
    children: [
      { name: "Media", href: "/media" },
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Newsletter", href: "/newsletter" },
      {
        name: "Stories",
        children: [
          { name: "GCC Heat Tracker", href: "/stories/gcc-heat-tracker" },
          { name: "Harvesting Hope", href: "/stories/harvesting-hope" },
          { name: "Jameel Centre", href: "/stories/jameel-centre" },
          {
            name: "KSA Healthcare Timeiline",
            href: "/stories/ksa-healthcare-timeline",
            targetBlank: true,
          },
        ],
      },
      {
        name: "Films",
        children: [
          { name: "Ankur", href: "/films/ankur" },
          { name: "The Collectors", href: "/films/the-collectors" },
        ],
      },
    ],
  },
  {
    name: "Programmes",
    children: [
      {
        name: "J-PAL",
        children: [
          { name: "J-PAL Global", href: "/programmes/j-pal", current: false },
          {
            name: "J-PAL MENA",
            href: "https://www.povertyactionlab.org/middle-east-and-north-africa",
            current: false,
          },
          {
            name: "ESII",
            href: "https://www.povertyactionlab.org/initiative/european-social-inclusion-initiative",
            current: false,
          },
          {
            name: "HAPIE",
            href: "https://www.povertyactionlab.org/page/hub-advanced-policy-innovation-environment-hapie",
            current: false,
          },
          {
            name: "J-PAL Air and Water Labs",
            href: "https://www.povertyactionlab.org/programmes/j-pal/air-and-water-labs",
            current: false,
          },
        ],
      },

      
      {
        name: "J-WAFS",
        href: "/programmes/j-wafs",
        current: false,
      },
      {
        name: "J-WEL",
        href: "/programmes/j-wel",
        current: false,
      },
      {
        name: "Jameel Clinic",
        href: "/programmes/jameel-clinic",
        current: false,
      },
      {
        name: "Jameel Institute",
        children: [
          { name: "Overview", href: "/programmes/jameel-institute", current: false },
          { name: "Jameel Institute Kenneth C. Griffin Intitiative", href: "/programmes/jameel-institute/kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness", current: false },
        ],
      },
      {
        name: "Jameel Observatory",
        children: [
          {
            name: "Food Security Early Action",
            href: "/programmes/jameel-observatory/for-food-security-early-action",
            current: false,
          },
          {
            name: "CREWSNET",
            href: "/programmes/jameel-observatory/crewsnet",
            current: false,
          },
        ],
      },
      {
        name: "Jameel Arts & Health Lab",
        href: "/programmes/jameel-arts-and-health-lab",
        current: false,
      },
      {
        name: "Climavore x Jameel at RCA",
        href: "/programmes/climavore-x-jameel-at-rca",
        current: false,
      },
      {
        name: "Bocelli-Jameel Scholarship",
        children: [
          {
            name: "Overview",
            href: "/programmes/bocelli-jameel-scholarship",
            current: false,
          },
          {
            name: "Scholars",
            subChildren: [
              { "name": "Clara Barbier Serrano (2020)", "href": "/people/clara-barbier-serrano" },
              { "name": "Laura Mekhail (2021)", "href": "/people/laura-mekhail" },
              { "name": "Seonwoo Lee (2022)", "href": "/people/seonwoo lee" },
              { "name": "Anastasia Koorn (2023)", "href": "/people/anatasia-koorn" },
              { "name": "Henna Mun (2023)", "href": "/people/henna-mun" }
            ]
          },
          {
            name: "Performances",
            href: "/search?event=bocelli-jameel-scholarship&open=true",
          },
          //{ "name": "Gallery", "href": "/programmes", "current": false }
        ],
      },

      {
        name: "Jameel House of Traditional Arts in Cairo",
        children: [
          {
            name: "Overview",
            href: "/programmes/jameel-house-of-traditional-arts-in-cairo",
          },
          {
            name: "Graduation collections",
            subChildren: [
              { "name": "2023", "href": "/programmes/jameel-house-of-traditional-arts-in-cairo/2023-graduation-collection"},
              { "name": "2024", "href": "/programmes/jameel-house-of-traditional-arts-in-cairo/2024-graduation-collection"},
            ]
          },
        ],
      },


      {
        name: "Pratham Jameel Second Chance Programme",
        href: "/programmes/pratham-jameel-second-chance",
        current: false,
      },
      {
        name: "Jameel C40 Urban Planning Climate Labs",
        href: "/programmes/jameel-c40-urban-planning-climate-labs",
        current: false,
      },
      { name: "Ejada", href: "/programmes/ejada", current: false },
      {
        name: "Jameel Toyota Scholarship",
        href: "/programmes/jameel-toyota-scholarship",
        current: false,
      },
      {
        name: "Funds",
        children: [
          {
            name: "Jameel Fund",
            href: "/programmes/jameel-fund",
            current: false,
          },
          {
            name: "Iraq Cultural Health Fund",
            href: "/programmes/funds/iraq-cultural-health-fund",
            current: false,
          },
          {
            name: "Covid-19-Excellence Fund",
            href: "/programmes/covid-19-excellence-fund",
            current: false,
          },
        ],
      },

    ],
  },

  // ... (Other nav items here)
];

const NavLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const { setSidebarOpen } = useAppProvider();

  return (
    <Link
      href={href}
      onClick={() => setSidebarOpen(false)}
      className="relative flex items-center font-normal sans-serif text-black py-2 pr-2 hover:text-orange-700 dark:hover:text-orange-400 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </Link>
  );
};

const NavGroup = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const segments = useSelectedLayoutSegments();
  const open = segments.includes(title);

  return (
    <SidebarLinkGroup open={open}>
      {(handleClick, open) => (
        <>
          <div
              // onMouseDown={(e) => {
              //   e.preventDefault();
              //   handleClick();
              // }}
              onTouchStart={(e) => {
                e.preventDefault();
                handleClick();
              }}
            className="relative flex lg:hidden md:w-[230px] justify-between items-center font-normal sans-serif text-black py-2 pr-2 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 cursor-pointer"
          >
            <div className="flex items-center hover:text-orange-700 dark:hover:text-orange-400">
              {icon && <span className="mr-3">{icon}</span>}
              {title}
            </div>
            <div>
              <ChevronRightIcon
                className={`h-3 w-3 text-black dark:text-white shrink-0 ml-2 transition-transform duration-200 ${
                  open ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>


          <div
              onMouseDown={(e) => {
                e.preventDefault();
                handleClick();
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                handleClick();
              }}
            className="hidden lg:flex relative md:w-[230px] justify-between items-center font-normal sans-serif text-black py-2 pr-2 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 cursor-pointer"
          >
            <div className="flex items-center hover:text-orange-700 dark:hover:text-orange-400">
              {icon && <span className="mr-3">{icon}</span>}
              {title}
            </div>
            <div>
              <ChevronRightIcon
                className={`h-3 w-3 text-black dark:text-white shrink-0 ml-2 transition-transform duration-200 ${
                  open ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>


          <div
            className={`mb-3 ml-[11px] pl-4 z-50 border-l sans-serif font-normal border-slate-200 dark:border-slate-800 ${
              !open && "hidden"
            }`}
          >
            {children}
          </div>
        </>
      )}
    </SidebarLinkGroup>
  );
};

export default function Sidebar2() {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useAppProvider();

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  //     if (
  //       !sidebar.current ||
  //       !sidebarOpen ||
  //       sidebar.current.contains(target as Node)
  //     )
  //       return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  useEffect(() => {
    // Handle ESC key to close sidebar
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
  
    // Prevent scrolling of background when sidebar is open
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    // Add event listener for ESC key
    document.addEventListener("keydown", keyHandler);
  
    return () => {
      // Clean up event listener and remove overflow-hidden class on unmount
      document.removeEventListener("keydown", keyHandler);
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen, setSidebarOpen]);

  // const renderNavItems = (navItems: NavItem[]) => {
  //   return navItems.map((item) => (
  //     <div className="mt-3" key={item.name}>
  //       {item.href ? (
  //         <SidebarLink href={item.href}>{item.name}</SidebarLink>
  //       ) : (
  //         <SidebarLinkSubgroup title={item.name} open={useSelectedLayoutSegments().includes(item.name)}>
  //           {renderNavItems(item.children || [])}
  //         </SidebarLinkSubgroup>
  //       )}
  //     </div>
  //   ));
  // };

  // testing the size of the side bar 

  const [divSizes, setDivSizes] = useState<{ sidebar: number; content: number }>({
    sidebar: 0,
    content: 0,
  });

  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // This useEffect will calculate the width of the sidebar and content divs
  useEffect(() => {
    const updateSizes = () => {
      const sidebarHeight = sidebarRef.current?.offsetHeight || 0;
      const contentWidth = contentRef.current?.offsetWidth || 0;

      setDivSizes({
        sidebar: sidebarHeight,
        content: contentWidth,
      });
    };

    // Call the function to set the initial sizes
    updateSizes();

    // Add an event listener to update sizes on window resize
    window.addEventListener('resize', updateSizes);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  const renderNavItems = (navItems: NavItem[]) => {
    return navItems.map((item, index) => (
      <div className="mt-3" key={item.name + "-top" + index}>
        {item.href ? (
          // Ensure href is defined before rendering SidebarLink
          <SidebarLink
            href={item.href ?? "#"}
            key={item.name + "-link" + index}
            targetBlank={item.targetBlank}
            
          >
            {item.name}
          </SidebarLink>
        ) : (
          // First level group (children) case
          <SidebarLinkSubgroup
            key={item.name + "-group" + index}
            title={item.name}
            open={useSelectedLayoutSegments().includes(item.name)}
          >
            {item.children?.map((child) =>
              child.subChildren ? (
                // Render subChildren inside SidebarLinkSubChildren
                <SidebarLinkSubChildren
                  title={child.name}
                  open={useSelectedLayoutSegments().includes(child.name)}
                  key={child.name + "-sub" + index}
                >
                  {renderNavItems(child.subChildren)}
                </SidebarLinkSubChildren>
              ) : // Render SidebarLink if href is present, otherwise handle undefined href
              child.href ? (
                <div className=" mt-3 " key={index + Math.random() + "div-index" + child.name}>
                  <SidebarLink key={index + "b" + child.name+ Math.random()} href={child.href} targetBlank={child.targetBlank}>
                    {child.name}
                  </SidebarLink>
                </div>
              ) : (
                <div key={child.name + "a"+ Math.random() + index}>{child.name}</div> // Handle cases without href
              )
            )}
          </SidebarLinkSubgroup>
        )}
      </div>
    ));
  };

  return (
    <div ref={sidebarRef} className=" overflow-y-auto side-scroll-bar  lg:max-h-screen ">
      {/* Backdrop This is for Mobile */}
      <Transition
        className="md:hidden  fixed sm:static inset-0 z-0 bg-opacity-20 transition-opacity"
        show={sidebarOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      {/* Sidebar here you can change the side bar width etc */}
      <div ref={sidebar} className="">
        <Transition
          show={sidebarOpen}
          unmount={false}
          as="aside"
         
          id="sidebar"
          className="left-0 fixed lg:static top-[64px] dropdown-item lg:top-0 lg:bottom-0  pb-40  w-full pt-6 bg-white lg:w-[233px] h-screen overflow-y-auto md:h-full   lg:shrink-0 z-50 lg:overflow-x-hidden   lg:!opacity-100 lg:!block  dark:bg-slate-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Gradient bg displaying on light layout only background mask */}
          {/* <div
            className="absolute  bg-blackinset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div> */}
          {/* The navigational part on postion fixed */}
          <div className="w-full sm:w-[200px] px-4 sm:px-6 md:pl-2 md:pr-8 ">
          <div className="relative z-30">
              <nav className="sm:block w-full text-sm ">
                {/* This is navigational Link consider it as a link  you can find this on component on top of the file */}
                <NavLink
                  href="/community"
                  icon={
                    <GlobeAltIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />
                  }
                >
                  Community
                </NavLink>
                
                {/* this is a component that is for the dropdown only and has a logo you can find this component on top */}
                <NavGroup
                  title="About"
                  icon={
                    <AcademicCapIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />
                  }
                >
                  {renderNavItems(navItems[0].children || [])}
                </NavGroup>
                <NavGroup
                  title="Programmes"
                  icon={
                    <CpuChipIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />
                  }
                >
                 

                  {renderNavItems(navItems[3].children || [])}
                 
                </NavGroup>
                <NavGroup
                  title="Discover"
                  icon={
                    <BeakerIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />
                  }
                >
                  {renderNavItems(navItems[2].children || [])}
                </NavGroup>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
