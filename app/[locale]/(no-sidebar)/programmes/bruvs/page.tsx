


import React from 'react'

export default function page() {
  const navItems = [
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
            { name: "Overview", href: "/programmes/j-pal", current: false },
            {
              name: "J-PAL MENA",
              href: "/programmes/j-pal/j-pal-mena",
              current: false,
            },
            {
              name: "People",
              href: "/search?people=jameel-poverty-action-lab&open=true",
            },
          ],
        },
        {
          name: "J-WAFS",
          children: [
            { name: "Overview", href: "/programmes/j-wafs", current: false },
            {
              name: "FACT Alliance",
              href: "/programmes/j-wafs/fact-alliance",
              current: false,
            },
            // { "name": "Jameel Index", "href": "/programmes/j-wafs/jameel-index", "current": false },
            {
              name: "People",
              href: "/search?people=j-wafs&open=true",
            },
          ],
        },
        {
          name: "J-WEL",
          href: "/programmes/abdul-latif-jameel-world-education-lab",
          current: false,
        },
        {
          name: "Jameel-Clinic",
          children: [
            {
              name: "Overview",
              href: "/programmes/jameel-clinic",
              current: false,
            },
            // { "name": "Press", "href": "/programmes", "current": false },
            // { "name": "AI/ML tools", "href": "/programmes", "current": false },
            // { "name": "Hospital Network", "href": "/programmes", "current": false },
            // { "name": "MIT-Takeda Programme", "href": "/programmes", "current": false },
            {
              name: "Events",
              href: "/search?event=jameel-clinic&open=true",
            },
            {
              name: "People",
              href: "/search?people=jameel-clinic&open=true",
            },
          ],
        },
        {
          name: "Jameel Institute",
          children: [
            {
              name: "Overview",
              href: "/programmes/jameel-institute",
              current: false,
            },
            {
              name: "Kenneth C. Griffin Initiative",
              href: "/programmes/jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness",
              current: false,
            },
            {
              name: "Events",
              href: "/search?event=jameel-institute&open=true",
            },
            {
              name: "People",
              href: "/search?people=jameel-institute&open=true",
            },
          ],
        },
        {
          name: "Jameel Observatory",
          children: [
            {
              name: "Overview",
              href: "/programmes/jameel-observatory",
              current: false,
            },
            {
              name: "Food Security Early Action",
              subChildren: [
                {
                  name: "Overview",
                  href: "/programmes/jameel-observatory/for-food-security-early-action",
                  current: false,
                },
                // { "name": "Reports", "href": "/programmes", "current": false },
                {
                  name: "Events",
                  href: "/search?event=jameel-observatory&open=true",
                },
                {
                  name: "People",
                  href: "/search?people=jameel-observatory&open=true",
                },
              ],
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
          children: [
            {
              name: "Overview",
              href: "/programmes/jameel-arts-health-lab",
              current: false,
            },
            {
              name: "Events",
              href: "/search?event=jameel-arts-health-lab&open=true",
            },
          ],
        },
        {
          name: "Climavore x Jameel at RCA",
          children: [
            {
              name: "Overview",
              href: "/programmes/climavore-x-jameel-at-rca",
              current: false,
            },
            {
              name: "Events",
              href: "/search?event=climavore-x-jameel-at-rca&open=true",
            },
          ],
        },
        {
          name: "Jameel House of Traditional Arts in Cairo",
          children: [
            {
              name: "Overview",
              href: "/programmes/jameel-house-of-traditional-arts-in-cairo",
              current: false,
            },
            {
              name: "Events",
              href: "/search?event=jameel-house-of-traditional-arts-in-cairo&open=true",
            },
            // { "name": "Gallery", "href": "/programmes", "current": false },
            //{ "name": "Graduates", "href": "/programmes", "current": false }
          ],
        },
        {
          name: "Pratham Jameel Second Chance",
          children: [
            {
              name: "Overview",
              href: "/programmes/pratham-jameel-second-chance-programme",
              current: false,
            },
          ],
        },
        {
          name: "Climate Labs",
          children: [
            {
              name: "Overview",
              href: "/programmes/climate-labs",
              current: false,
            },
            //{ "name": "J-PAL Air, Water & Energy Lab", "href": "/programmes/jpal-air-and-water-labs", "current": false },
            //{ "name": "Jameel C40 Urban Climate Lab", "href": "/programmes/jameel-c40-urban-planning-climate-labs", "current": false }
          ],
        },
        { name: "Ejada", href: "/programmes/ejada", current: false },
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
              href: "/programmes/iraq-cultural-health-fund",
              current: false,
            },
            {
              name: "Covid-19-Excellence Fund",
              href: "/programmes/covid-19-excellence-fund",
              current: false,
            },
          ],
        },
        {
          name: "Jameel Toyota Scholarship",
          href: "/programmes/jameel-toyota-scholarship",
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
              name: "Performances",
              href: "/search?event=bocelli-jameel-scholarship&open=true",
            },
            //{ "name": "Gallery", "href": "/programmes", "current": false }
          ],
        },
        { name: "Voxel Lab", href: "/programmes/voxel-lab", current: false },
      ],
    },
  
    // ... (Other nav items here)
  ];
  return (
    <>
    <div className='text-4xl'>hello nat</div>
    test

    </>
  )
}
