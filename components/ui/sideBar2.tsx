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

import { useRef, useEffect } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import SidebarLinkSubgroup from "./sidebar-link-subgroup";
import { AcademicCapIcon, GlobeAltIcon, BeakerIcon, ChevronRightIcon, CpuChipIcon } from '@heroicons/react/24/outline';


type NavItem = {
  name: string;
  href?: string;
  current?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    name: "About",
    children: [
      { name: "Overview", href: "/overview" },
      { name: "Team", href: "/team" },
      { name: "Family album", href: "/family-album" },
    ],
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Discover",
    children: [
      { name: "News", href: "/news" },
      { name: "Announcements", href: "/announcements" },
      { name: "Events", href: "/events" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    name: "Programmes",
    children: [
      {
        name: "J-PAL",
        children: [
          { name: "Overview", href: "#", current: false },
          { name: "J-PAL MENA", href: "#", current: false },
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          {
            name: "People",
            children: [
              { name: "people 1", href: "#" },
              { name: "people 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
      {
        name: "J-WAFS",
        children: [
          { name: "Overview", href: "#", current: false },
          { name: "FACT Alliance", href: "#", current: false },
          { name: "Spinouts", href: "#", current: false },
          { name: "Funding", href: "#", current: false },
          { name: "Jameel Index", href: "#", current: false },
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          {
            name: "People",
            children: [
              { name: "people 1", href: "#" },
              { name: "people 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
      { name: "J-WEL", href: "#", current: false },
      {
        name: "Jameel-Clinic",
        children: [
          { name: "Overview", href: "#", current: false },
          { name: "Press", href: "#", current: false },
          { name: "AI/ML tools", href: "#", current: false },
          { name: "Hospital Network", href: "#", current: false },
          { name: "MIT-Takeda Programme", href: "#", current: false },
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          {
            name: "People",
            children: [
              { name: "people 1", href: "#" },
              { name: "people 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
      {
        name: "Jameel Institute",
        children: [
          { name: "Overview", href: "#", current: false },
          { name: "Kenneth C. Griffin Initiative", href: "#", current: false },
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          {
            name: "People",
            children: [
              { name: "people 1", href: "#" },
              { name: "people 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
      {
        name: "Jameel Observatory",
        children: [
          { name: "Overview", href: "#", current: false },
          {
            name: "Food Security Early Action",
            children: [
              { name: "Overview", href: "#", current: false },
              { name: "Reports", href: "#", current: false },
              {
                name: "Events",
                children: [
                  { name: "event 1", href: "#" },
                  { name: "event 2", href: "#" },
                  { name: "view all", href: "#" },
                ],
              },
              {
                name: "People",
                children: [
                  { name: "people 1", href: "#" },
                  { name: "people 2", href: "#" },
                  { name: "view all", href: "#" },
                ],
              },
            ],
          },
          { name: "CREWSNET", href: "#", current: false },
        ],
      },
      {
        name: "Jameel Arts & Health Lab",
        children: [
          { name: "Overview", href: "#", current: false },
  
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
      {
        name: "Climavore x Jameel at RCA",
        children: [
          { name: "Overview", href: "#", current: false },
  
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
        ],
      },
  
      {
        name: "Jameel House of Traditional Arts in Cairo",
        children: [
          { name: "Overview", href: "#", current: false },
  
          {
            name: "Events",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          { name: "Gallery", href: "#", current: false },
          { name: "Graduates", href: "#", current: false },
        ],
      },
      {
        name: "Pratham Jameel Second Chance",
        children: [{ name: "Overview", href: "#", current: false }],
      },
      {
        name: "Climate Labs",
        children: [
          { name: "Overview", href: "#", current: false },
          { name: "J-PAL Air, Water & Energy Lab", href: "#", current: false },
          { name: "Jameel C40 Urban Climate Lab", href: "#", current: false },
        ],
      },
      { name: "Ejada", href: "#", current: false },
      {
        name: "Funds",
        children: [
          { name: "Jameel Fund", href: "#", current: false },
          { name: "Iraq Cultural Health Fund", href: "#", current: false },
          { name: "Covid-19-Excellence Fund", href: "#", current: false },
        ],
      },
      { name: "Jameel Toyota Scholarship", href: "#", current: false },
      {
        name: "Bocelli-Jameel Scholarship",
        children: [
          { name: "Overview", href: "#", current: false },
          {
            name: "Scholars",
            children: [
              {
                name: "Clara Barbier Serrano (2020)",
                href: "#",
                current: false,
              },
              { name: "Laura Mekhail (2021)", href: "#", current: false },
              { name: "Seonwoo Lee (2022)", href: "#", current: false },
              { name: "Anastasia Koorn (2023)", href: "#", current: false },
              { name: "Henna Mun (2023)", href: "#", current: false },
            ],
          },
          {
            name: "Performances",
            children: [
              { name: "event 1", href: "#" },
              { name: "event 2", href: "#" },
              { name: "view all", href: "#" },
            ],
          },
          { name: "Gallery", href: "#", current: false },
        ],
      },
      { name: "Voxel Lab", href: "#", current: false },
    ],
  },
  // ... (Other nav items here)
];

const NavLink = ({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) => (
  <Link
    href={href}
    className="relative flex items-center font-normal mono text-black py-2 pr-2 uppercase before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200">
    {icon && <span className="mr-3">{icon}</span>}
    {children}
  </Link>
);

const NavGroup = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();
  const open = segments.includes(title);

  return (
<SidebarLinkGroup open={open}>
  {(handleClick, open) => (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="relative flex w-[240px] justify-between items-center font-normal mono text-black py-2 pr-2 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 cursor-pointer"
      >
        <div className="flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </div>
        <ChevronRightIcon
          className={`h-3 w-3 text-black dark:text-white shrink-0 ml-2 transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        />
      </div>
      <div className={`mb-3 ml-[7px] pl-5 border-l mono font-normal border-slate-200 dark:border-slate-800 ${!open && "hidden"}`}>
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
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current || !sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const renderNavItems = (navItems: NavItem[]) => {
    return navItems.map((item) => (
      <div className="mt-3" key={item.name}>
        {item.href ? (
          <SidebarLink href={item.href}>{item.name}</SidebarLink>
        ) : (
          <SidebarLinkSubgroup title={item.name} open={useSelectedLayoutSegments().includes(item.name)}>
            {renderNavItems(item.children || [])}
          </SidebarLinkSubgroup>
        )}
      </div>
    ));
  };

  return (
    <>
      {/* Backdrop This is for Mobile */}
      <Transition
        className="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity"
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
      <div ref={sidebar}>
      <Transition
    show={sidebarOpen}
    unmount={false}
    as="aside"
    id="sidebar"
    className="fixed left-0 top-0 bottom-0 w-full md:w-[250px] h-screen border-r border-slate-200 md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900"
    enter="transition ease-out duration-200 transform"
    enterFrom="opacity-0 -translate-x-full"
    enterTo="opacity-100 translate-x-0"
    leave="transition ease-out duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
          {/* Gradient bg displaying on light layout only background mask */}
          <div
            className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>
          {/* The navigational part on postion fixed */}
          <div className="fixed top-0 bottom-0 w-[272px] px-4 sm:px-6 md:pl-2 md:pr-8 overflow-y-auto scrollbar">
            <div className="pt-24 md:pt-[84px] pb-8">
            <nav className="md:block w-53 text-sm">
                {/* This is navigational Link consider it as a link  you can find this on component on top of the file */}
                <NavLink href="/community" icon={<GlobeAltIcon className="h-4 w-4 text-gray-500 dark:text-gray-500" />}>
                  Community
                </NavLink>
                {/* this is a component that is for the dropdown only and has a logo you can find this component on top */}
                <NavGroup title="About" icon={<AcademicCapIcon className="h-4 w-4 text-gray-500 dark:text-gray-500" />}>
                  {renderNavItems(navItems[0].children || [])}
                </NavGroup>
                <NavGroup title="Programmes" icon={<CpuChipIcon className="h-4 w-4 text-gray-500 dark:text-gray-500" />}>
                  {renderNavItems(navItems[3].children || [])}
                </NavGroup>
                <NavGroup title="Discover" icon={<BeakerIcon className="h-4 w-4 text-gray-500 dark:text-gray-500" />}>
                  {renderNavItems(navItems[2].children || [])}
                </NavGroup>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}