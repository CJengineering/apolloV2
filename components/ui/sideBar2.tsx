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
      { name: "Overview", href: "/about/overview" },
      { name: "Team", href: "/about/team" },
      { name: "Family album", href: "/about/family-album" },
    ],
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Discover",
    children: [
      { name: "Press", href: "/press" },
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Newsletter", href: "/newsletter" },
      {name:'Stories', children:[
        {name:'GCC Heat Tracker', href:'/stories/gcc-heat-tracker'},
        {name:'Harvesting Hope', href:'/stories/harvesting-hope'},
        {name:'Jameel Centre', href:'/stories/jameel-centre'},
        {name:'KSA Healthcare Timeiline', href:'/stories/ksa-healthcare-timeline'},
      ]},

      
    ],
  },
  {
    "name": "Programmes",
    "children": [
      {
        "name": "J-PAL",
        "children": [
          { "name": "Overview", "href": "/programmes/j-pal", "current": false },
          { "name": "J-PAL MENA", "href": "/programmes/j-pal/j-pal-mena", "current": false },
          {
            "name": "People",
            "href": "/search?people=jameel-poverty-action-lab&open=true"
          }
        ]
      },
      {
        "name": "J-WAFS",
        "children": [
          { "name": "Overview", "href": "/programmes/j-wafs", "current": false },
          { "name": "FACT Alliance", "href": "/programmes/j-wafs/fact-alliance", "current": false },
         // { "name": "Jameel Index", "href": "/programmes/j-wafs/jameel-index", "current": false },
          {
            "name": "People",
            "href": "/search?people=j-wafs&open=true"
          }
        ]
      },
      { "name": "J-WEL", "href": "/programmes/abdul-latif-jameel-world-education-lab", "current": false },
      {
        "name": "Jameel-Clinic",
        "children": [
          { "name": "Overview", "href": "/programmes/jameel-clinic", "current": false },
          // { "name": "Press", "href": "/programmes", "current": false },
          // { "name": "AI/ML tools", "href": "/programmes", "current": false },
          // { "name": "Hospital Network", "href": "/programmes", "current": false },
          // { "name": "MIT-Takeda Programme", "href": "/programmes", "current": false },
          {
            "name": "Events",
            "href": "/search?event=jameel-clinic&open=true"
          },
          {
            "name": "People",
            "href": "/search?people=jameel-clinic&open=true"
          }
        ]
      },
      {
        "name": "Jameel Institute",
        "children": [
          { "name": "Overview", "href": "/programmes/jameel-institute", "current": false },
          { "name": "Kenneth C. Griffin Initiative", "href": "/programmes/jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness", "current": false },
          {
            "name": "Events",
            "href": "/search?event=jameel-institute&open=true"
          },
          {
            "name": "People",
            "href": "/search?people=jameel-institute&open=true"
          }
        ]
      },
      {
        "name": "Jameel Observatory",
        "children": [
          { "name": "Overview", "href": "/programmes/jameel-observatory", "current": false },
          {
            "name": "Food Security Early Action",
            "children": [
              { "name": "Overview", "href": "/programmes/jameel-observatory/for-food-security-early-action", "current": false },
             // { "name": "Reports", "href": "/programmes", "current": false },
              {
                "name": "Events",
                "href": "/search?event=jameel-observatory&open=true"
              },
              {
                "name": "People",
                "href": "/search?people=jameel-observatory&open=true"
              }
            ]
          },
          { "name": "CREWSNET", "href": "/programmes/jameel-observatory/crewsnet", "current": false }
        ]
      },
      {
        "name": "Jameel Arts & Health Lab",
        "children": [
          { "name": "Overview", "href": "/programmes/jameel-arts-health-lab", "current": false },
          {
            "name": "Events",
            "href": "/search?event=jameel-arts-health-lab&open=true"
          }
        ]
      },
      {
        "name": "Climavore x Jameel at RCA",
        "children": [
          { "name": "Overview", "href": "/programmes/climavore-x-jameel-at-rca", "current": false },
          {
            "name": "Events",
            "href": "/search?event=climavore-x-jameel-at-rca&open=true"
          }
        ]
      },
      {
        "name": "Jameel House of Traditional Arts in Cairo",
        "children": [
          { "name": "Overview", "href": "/programmes/jameel-house-of-traditional-arts-in-cairo", "current": false },
          {
            "name": "Events",
            "href": "/search?event=jameel-house-of-traditional-arts-in-cairo&open=true"
          },
         // { "name": "Gallery", "href": "/programmes", "current": false },
          //{ "name": "Graduates", "href": "/programmes", "current": false }
        ]
      },
      {
        "name": "Pratham Jameel Second Chance",
        "children": [{ "name": "Overview", "href": "/programmes/pratham-jameel-second-chance-programme", "current": false }]
      },
      {
        "name": "Climate Labs",
        "children": [
          { "name": "Overview", "href": "/programmes/climate-labs", "current": false },
          //{ "name": "J-PAL Air, Water & Energy Lab", "href": "/programmes/jpal-air-and-water-labs", "current": false },
          //{ "name": "Jameel C40 Urban Climate Lab", "href": "/programmes/jameel-c40-urban-planning-climate-labs", "current": false }
        ]
      },
      { "name": "Ejada", "href": "/programmes/ejada", "current": false },
      {
        "name": "Funds",
        "children": [
          { "name": "Jameel Fund", "href": "/programmes/jameel-fund", "current": false },
          { "name": "Iraq Cultural Health Fund", "href": "/programmes/iraq-cultural-health-fund", "current": false },
          { "name": "Covid-19-Excellence Fund", "href": "/programmes/covid-19-excellence-fund", "current": false }
        ]
      },
      { "name": "Jameel Toyota Scholarship", "href": "/programmes/jameel-toyota-scholarship", "current": false },
      {
        "name": "Bocelli-Jameel Scholarship",
        "children": [
          { "name": "Overview", "href": "/programmes/bocelli-jameel-scholarship", "current": false },
          // {
          //   "name": "Scholars",
          //   "children": [
          //     { "name": "Clara Barbier Serrano (2020)", "href": "/programmes" },
          //     { "name": "Laura Mekhail (2021)", "href": "/programmes" },
          //     { "name": "Seonwoo Lee (2022)", "href": "/programmes" },
          //     { "name": "Anastasia Koorn (2023)", "href": "/programmes" },
          //     { "name": "Henna Mun (2023)", "href": "/programmes" }
          //   ]
          // },
          {
            "name": "Performances",
            "href": "/search?event=bocelli-jameel-scholarship&open=true"
          },
          //{ "name": "Gallery", "href": "/programmes", "current": false }
        ]
      },
      { "name": "Voxel Lab", "href": "/programmes/voxel-lab", "current": false }
    ]
  }
  

  
  
  // ... (Other nav items here)
];

const NavLink = ({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) => (
  <Link
    href={href}
    className="relative flex items-center font-normal mono text-black py-2 pr-2 uppercase hover:text-orange-700 dark:hover:text-orange-400 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200">
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
        <div className="flex uppercase items-center hover:text-orange-700 dark:hover:text-orange-400">

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
          <div className="fixed top-0 bottom-0 w-full sm:w-[272px] px-4 sm:px-6 md:pl-2 md:pr-8 overflow-y-auto scrollbar">
            <div className="pt-20 sm:pt-[84px] pb-8">
            <nav className="sm:block w-full sm:w-53 text-sm">
                {/* This is navigational Link consider it as a link  you can find this on component on top of the file */}
                <NavLink href="/community" icon={<GlobeAltIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />}>
                  Community
                </NavLink>
                {/* this is a component that is for the dropdown only and has a logo you can find this component on top */}
                <NavGroup title="About" icon={<AcademicCapIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />}>
                  {renderNavItems(navItems[0].children || [])}
                </NavGroup>
                <NavGroup title="Programmes" icon={<CpuChipIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />}>
                  {renderNavItems(navItems[3].children || [])}
                </NavGroup>
                <NavGroup title="Discover" icon={<BeakerIcon className="h-4 w-4 text-gray-500 dark:text-gray-500 hover:text-orange-700 dark:hover:text-orange-700" />}>
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