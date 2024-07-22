const fs = require('fs');
const path = require('path');

// Array of folder and component names
const pagesName = [
  'jameel-poverty-action-lab',
  'abdul-latif-jameel-water-and-food-systems-lab',
  'abdul-latif-jameel-world-education-lab',
  'jameel-clinic',
  'jameel-institute',
  'jameel-observatory',
  'jameel-observatory-crewsnet',
  'jameel-arts-health-lab',
  'climavore-x-jameel-at-rca',
  'bocelli-jameel-scholarship',
  'jameel-house-of-traditional-arts-in-cairo',
  'jameel-c40-urban-planning-climate-labs',
  'jpal-air-and-water-labs',
  'pratham-jameel-second-chance-programme',
  'jameel-management-centre'
];

 // specify your locale here

// Function to convert string to CamelCase
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toUpperCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
}

// Base path for the folders
const basePath = path.join(__dirname, 'app', '[locale]', 'programmes');

// Create folders and files
pagesName.forEach((pageName) => {
  const folderPath = path.join(basePath, pageName);
  const componentName = toCamelCase(pageName);
  const filePath = path.join(folderPath, 'page.tsx');

  // Content for the page.tsx file
  const pageContent = `
import React from 'react';

export default function ${componentName}({
    params,
  }: {
    params: { slug: string; locale: string };
  }) {
  return (
    <div className='pt-36'>${componentName}</div>
  )
}
`;

  // Create the folder
  fs.mkdirSync(folderPath, { recursive: true });

  // Write the page.tsx file
  fs.writeFileSync(filePath, pageContent.trim());

  console.log(`Created ${filePath}`);
});
