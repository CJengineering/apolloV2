const fs = require('fs');
const path = require('path');

// Array of folder and component names
const pagesName = [
    "ankur",
    "jameel-c40-urban-planning-climate-labs",
    "jpal-air-and-water-labs",
    "pratham-jameel-second-chance-programme",
    "climate-labs",
    "j-pal-mena-scholars-fellowship",
    "climavore-x-jameel-at-rca",
    "bruvs-monaco",
    "jameel-arts-health-lab",
    "european-social-inclusion-inititative",
    "voxel-lab",
    "yazidi-cultural-archive",
    "j-pal-evidence-to-policy",
    "jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness",
    "jameel-house-of-traditional-arts-in-cairo",
    "gcc-health-and-liveability",
    "jameel-observatory-crewsnet",
    "jameel-index",
    "jameel-poverty-action-lab-middle-east-and-north-africa",
    "egypt-impact-lab",
    "covid-19-excellence-fund",
    "bab-rizq-jameel",
    "community-jameel",
    "jameel-observatory",
    "jameel-hardship-fund",
    "jameel-toyota-scholarship",
    "bocelli-jameel-scholarship",
    "scale-up-squared",
    "ejada",
    "sharjah-fund",
    "iraq-cultural-health-fund",
    "jameel-fund",
    "jameel-management-centre",
    "jameel-institute",
    "jameel-clinic",
    "abdul-latif-jameel-world-education-lab",
    "abdul-latif-jameel-water-and-food-systems-lab",
    "jameel-poverty-action-lab"
];

// specify your locale here

// Base path for the folders
const basePath = path.join(__dirname, 'app', '[locale]', 'programmes');

// Function to delete a folder and its contents
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

// Delete folders and files
pagesName.forEach((pageName) => {
  const folderPath = path.join(basePath, pageName);

  // Delete the folder
  deleteFolderRecursive(folderPath);

  console.log(`Deleted ${folderPath}`);
});
