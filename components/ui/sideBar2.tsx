"use client";

import { useRef, useEffect } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import SidebarLinkSubgroup from "./sidebar-link-subgroup";
type NavItem = {
  name: string;
  href?: string;
  current?: boolean;
  children?: NavItem[];
};

const aboutNav: NavItem = {
  name: "About",
  current: false,
  children: [
    { name: "Overview", href: "/overview" },
    { name: "Team", href: "#" },
    { name: "Family", href: "#" },
  ],
};
const mediatNav: NavItem = {
  name: "Media",
  current: false,
  children: [
    { name: "News", href: "#" },
    { name: "Press", href: "#" },
    { name: "Events", href: "#" },
  ],
};
const programmesNav: NavItem = {
  name: "PROGRAMMES",
  current: false,
  children: [
    {
      name: 'J-PAL',
      children: [
        { name: 'Overview', href: '#', current: false },
        { name: 'J-PAL MENA', href: '#', current: false },
        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        {
          name: 'People',
          children: [
            { name: 'people 1', href: '#' },
            { name: 'people 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'J-WAFS',
      children: [
        { name: 'Overview', href: '#', current: false },
        { name: 'FACT Alliance', href: '#', current: false },
        { name: 'Spinouts', href: '#', current: false },
        { name: 'Funding', href: '#', current: false },
        { name: 'Jameel Index', href: '#', current: false },
        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        {
          name: 'People',
          children: [
            { name: 'people 1', href: '#' },
            { name: 'people 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },
    { name: 'J-WEL', href: '#', current: false },
    {
      name: 'Jameel-Clinic',
      children: [
        { name: 'Overview', href: '#', current: false },
        { name: 'Press', href: '#', current: false },
        { name: 'AI/ML tools', href: '#', current: false },
        { name: 'Hospital Network', href: '#', current: false },
        { name: 'MIT-Takeda Programme', href: '#', current: false },
        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        {
          name: 'People',
          children: [
            { name: 'people 1', href: '#' },
            { name: 'people 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'Jameel Institute',
      children: [
        { name: 'Overview', href: '#', current: false },
        { name: 'Kenneth C. Griffin Initiative', href: '#', current: false },
        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        {
          name: 'People',
          children: [
            { name: 'people 1', href: '#' },
            { name: 'people 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'Jameel Observatory',
      children: [
        { name: 'Overview', href: '#', current: false },
        {
          name: 'Food Security Early Action',
          children: [
            { name: 'Overview', href: '#', current: false },
            { name: 'Reports', href: '#', current: false },
            {
              name: 'Events',
              children: [
                { name: 'event 1', href: '#' },
                { name: 'event 2', href: '#' },
                { name: 'view all', href: '#' },
              ],
            },
            {
              name: 'People',
              children: [
                { name: 'people 1', href: '#' },
                { name: 'people 2', href: '#' },
                { name: 'view all', href: '#' },
              ],
            },
          ],
        },
        { name: 'CREWSNET', href: '#', current: false },
      ],
    },
    {
      name: 'Jameel Arts & Health Lab',
      children: [
        { name: 'Overview', href: '#', current: false },

        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'Climavore x Jameel at RCA',
      children: [
        { name: 'Overview', href: '#', current: false },

        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
      ],
    },

    {
      name: 'Jameel House of Traditional Arts in Cairo',
      children: [
        { name: 'Overview', href: '#', current: false },

        {
          name: 'Events',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        { name: 'Gallery', href: '#', current: false },
        { name: 'Graduates', href: '#', current: false },
      ],
    },
    {
      name: 'Pratham Jameel Second Chance',
      children: [{ name: 'Overview', href: '#', current: false }],
    },
    {
      name: 'Climate Labs',
      children: [
        { name: 'Overview', href: '#', current: false },
        { name: 'J-PAL Air, Water & Energy Lab', href: '#', current: false },
        { name: 'Jameel C40 Urban Climate Lab', href: '#', current: false },
      ],
    },
    { name: 'Ejada', href: '#', current: false },
    {
      name: 'Funds',
      children: [
        { name: 'Jameel Fund', href: '#', current: false },
        { name: 'Iraq Cultural Health Fund', href: '#', current: false },
        { name: 'Covid-19-Excellence Fund', href: '#', current: false },
      ],
    },
    { name: 'Jameel Toyota Scholarship', href: '#', current: false },
    {
      name: 'Bocelli-Jameel Scholarship',
      children: [
        { name: 'Overview', href: '#', current: false },
        {
          name: 'Scholars',
          children: [
            {
              name: 'Clara Barbier Serrano (2020)',
              href: '#',
              current: false,
            },
            { name: 'Laura Mekhail (2021)', href: '#', current: false },
            { name: 'Seonwoo Lee (2022)', href: '#', current: false },
            { name: 'Anastasia Koorn (2023)', href: '#', current: false },
            { name: 'Henna Mun (2023)', href: '#', current: false },
          ],
        },
        {
          name: 'Performances',
          children: [
            { name: 'event 1', href: '#' },
            { name: 'event 2', href: '#' },
            { name: 'view all', href: '#' },
          ],
        },
        { name: 'Gallery', href: '#', current: false },
      ],
    },
    { name: 'Voxel Lab', href: '#', current: false },
  ],
};

export default function Sidebar2() {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useAppProvider();
  const segments = useSelectedLayoutSegments();

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
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
          <SidebarLink href={item.href}>
            {item.name}
          </SidebarLink>
        ) : (
          <SidebarLinkSubgroup title={item.name} open={segments.includes(item.name)}>
            {renderNavItems(item.children || [])}
          </SidebarLinkSubgroup>
        )}
      </div>
    ));
  };
  return (
    <>
      {/* Backdrop */}
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

      {/* Sidebar */}
      <div ref={sidebar}>
        <Transition
          show={sidebarOpen}
          unmount={false}
          as="aside"
          id="sidebar"
          className="fixed left-0 top-0 bottom-0 w-64 h-screen border-r border-slate-200 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Gradient bg displaying on light layout only */}
          <div
            className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="fixed top-0 bottom-0 w-64  px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
            <div className="pt-24 md:pt-28 pb-8">
              {/* Docs nav */}
              <nav className="md:block">
                <div className="text-sm">
                  {/* 1st level */}
                  <SidebarLinkGroup open={segments.includes("About")}>
                    {(handleClick, open) => {
                      return (
                        <>
                          <Link
                            href="#0"
                            className={`relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 ${
                              !segments.includes("About") && "before:hidden"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick();
                            }}
                          >
                            <svg
                              className="mr-3 shrink-0"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-[#8B0000]"
                                d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                              />
                              <path
                                className="fill-white dark:fill-slate-800"
                                d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                              />
                              <path
                                className="fill-[#B22222]"
                                d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                              />
                            </svg>
                            <span>About</span>
                          </Link>
                          <div
                            className={`mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800 ${
                              !open && "hidden"
                            }`}
                          >
                              {renderNavItems(aboutNav.children || [])}
                          </div>
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                  <SidebarLinkGroup open={segments.includes("About")}>
                    {(handleClick, open) => {
                      return (
                        <>
                          <Link
                            href="#0"
                            className={`relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-20 before:pointer-events-none dark:text-slate-200 ${
                              !segments.includes("About") && "before:hidden"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick();
                            }}
                          >
                            <svg
                              className="mr-3 shrink-0"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-[#FF0000]"
                                d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                              />
                              <path
                                className="fill-white dark:fill-slate-800"
                                d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                              />
                              <path
                                className="fill-[#DC143C]"
                                d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                              />
                            </svg>
                            <span>Programmes</span>
                          </Link>
                          <div
                            className={`mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800 ${
                              !open && "hidden"
                            }`}
                          >
                                {renderNavItems(programmesNav.children || [])}
                          </div>
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                  <SidebarLinkGroup open={segments.includes("Media")}>
                    {(handleClick, open) => {
                      return (
                        <>
                          <Link
                            href="#0"
                            className={`relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 ${
                              !segments.includes("About") && "before:hidden"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick();
                            }}
                          >
                            <svg
                              className="mr-3 shrink-0"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-[#DC143C]"
                                d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                              />
                              <path
                                className="fill-white dark:fill-slate-800"
                                d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                              />
                              <path
                                className="fill-[#B22222]"
                                d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                              />
                            </svg>
                            <span>Media</span>
                          </Link>
                          <div
                            className={`mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800 ${
                              !open && "hidden"
                            }`}
                          >
                                {renderNavItems( mediatNav.children || [])}
                          </div>
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                </div>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
