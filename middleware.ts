import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./i18nConfig";
import { revalidatePath } from "next/cache";
import { getIdByDisplayName } from "./functions/utils/findCollectionId";
import { getData } from "./functions/api/getData";

export async function  middleware(request: NextRequest) {
 

 
  const slugs = [
    'pratham-jameel-second-chance-programme-supports-11-399-girls-and-women-in-india-in-first-year',
    'jameel-toyota-scholarship-at-mit-marks-30th-anniversary-with-more-than-215-students-supported',
    'abdul-latif-jameel-water-and-food-systems-lab-at-mit-marks-its-10th-anniversary-with-a-call-for-increased-attention-on-vital-water-and-food-security-needs',
    'save-the-children-supports-thousands-of-palestinians-including-newborn-babies-medically-evacuated-to-egypt-with-funding-from-community-jameel',
    'new-pilot-hand-pump-filter-could-enhance-drinking-water-safety-in-india',
    'bocelli-jameel-scholar-henna-mun-wins-the-prestigious-john-christie-award-at-glyndebourne',
    'jameel-house-of-traditional-arts-in-cairo-opens-call-for-applications-for-2024-intake',
    'egyptian-and-indonesian-governments-exchange-best-practices-for-evidence-based-policymaking',
    'atelier-jameel-and-bayt-yakan-partner-to-deliver-traditional-art-and-crafts-summer-programme-in-support-of-al-darb-al-ahmar-community',
    'talk-tv-host-trisha-goddard-interviews-jameel-institutes-katharina-hauck-about-her-role-as-co-convenor-in-the-uk-infected-blood-inquiry',
    'cyclone-remal-batters-ankur-programme-communities-in-the-sundarbans',
    'cities-1-5-podcast-clea-daridan-and-former-toronto-mayor-david-miller-discuss-how-the-jameel-c40-climate-labs-are-integrating-climate-action-and-urban-development',
    'abdul-latif-jameel-poverty-action-lab-j-pal-mena-scholars-fellowship-opens-call-for-2024-applications',
    'the-jameel-arts-health-labs-christopher-bailey-describes-how-johnny-cashs-music-helps-dementia-patients-in-ireland',
    'imperial-opens-major-new-building-for-school-of-public-health',
    'new-cancer-grand-challenges-global-team-matchmakers-includes-the-mit-jameel-clinics-regina-barzilay',
    'in-the-arts-there-is-no-time-christopher-bailey-on-the-jameel-arts-health-lab',
    'community-jameel-marks-maternal-health-awareness-day-2024',
    'j-pal-announces-new-multi-year-training-partnership-in-cote-divoire-to-increase-use-of-rigorous-evidence-in-national-policies-and-programmes',
    'j-pal-co-founder-esther-duflo-elected-president-of-the-paris-school-of-economics',
    'sukhet-dhir-reflects-on-designing-abhijit-banerjees-outfit-for-the-2019-nobel-prize-ceremony',
    'new-partnership-with-the-centre-for-paediatric-blast-injury-studies-at-imperial-college-london-launched-by-community-jameel-as-part-of-gaza-emergency-response',
    'fadel-adib-wins-inaugural-great-arab-minds-award-for-engineering-and-technology',
    'who-director-general-dr-tedros-speaks-about-the-jameel-arts-health-lab-at-cop28-health-day-reception',
    'fady-jameel-bill-gates-and-guyo-roba-discuss-the-future-of-farming-and-climate-resilience-at-cop28',
    'bill-gates-and-fady-jameel-discuss-food-and-farming-with-scientists-farmers-and-chefs-at-the-farming-for-our-future-breakfast-event-on-the-sidelines-of-cop28-in-dubai',
    'university-of-edinburgh-and-the-international-livestock-research-institute-renew-partnership',
    'africa-climate-summit-sees-community-jameel-and-j-pal-announce-a-new-initiative-to-improve-access-to-clean-air-and-water-and-reliable-energy-in-cape-town',
    'young-researchers-pursue-nobel-prize-winning-approach-to-alleviating-poverty-in-middle-east-and-north-africa-with-support-from-new-fellowship',
    'abdul-latif-jameel-world-education-lab-at-mit-pilots-innovation-cohort-to-launch-startsmart-programme',
    'jameel-observatory-early-warning-system-selected-by-us-and-uae-governments-for-accelerated-deployment-at-climate-change-summit-in-washington-dc',
    'world-health-organization-nyu-steinhardt-community-jameel-and-culturunners-launch-the-jameel-arts-health-lab-to-measure-the-impact-of-the-arts-on-health',
    'world-renowned-tenor-andrea-bocelli-and-egyptian-soprano-laura-mekhail-to-perform-in-alula-saudi-arabia',
    'new-digital-archives-created-by-yazidi-survivors-of-genocide-published-to-day-by-un-highlighting-the-role-of-art-in-psychological-recovery',
    'south-korean-soprano-seonwoo-lee-announced-as-the-third-andrea-bocelli-foundation-community-jameel-scholar',
    'jameel-fund-second-round-accelerates-projects-combatting-global-threats-from-respiratory-disease',
    'dangerous-delay-2-the-cost-of-inaction',
    'open-learning-in-the-arab-world-takes-centre-stage-at-expo-2020-rewired-summit',
    'jameel-observatory-launches-to-tackle-climate-related-food-insecurity',
    'the-healing-arts-2021-campaign-launched-to-address-mental-health-crisis-caused-by-covid-19',
    'to-face-the-impact-of-covid-19-bab-rizq-jameel-microfinance-postpones-beneficiary-payments-for-nine-months',
    'the-5th-mitef-saudi-startup-competition-kicks-off',
    'abdul-latif-jameel-poverty-action-lab-launches-new-regional-research-center-in-cairo-to-help-improve-lives-across-mena-region',
    'new-comedy-jameel-competition-supports-and-inspires-comedic-performers-in-saudi-arabia-and-beyond',
    'first-recipient-of-andrea-bocelli-foundation-community-jameel-scholarship-to-start-at-the-royal-college-of-music',
    'saudi-general-investment-authority-sagia-and-bab-rizq-jameel-join-forces-to-support-entrepreneurs-through-mitef-saudi-arabia-startup-competition',
    'andrea-bocelli-foundation-and-community-jameel-launch-international-scholarship-at-the-royal-college-of-music-in-london',
    'amman-meeting-attended-by-queen-rania-al-abdullah-explores-ways-to-drive-forward-global-response-to-refugee-education-crisis',
    'mamluk-brasswork-traditional-ceramics-are-highlights-in-graduation-show-for-21-students-at-the-jameel-house-in-cairo',
    'jameel-house-of-traditional-arts-jeddah-invites-the-public-to-attend-its-annual-exhibition-of-artisanal-craft-and-design',
    'the-jameel-prize-marks-its-tenth-anniversary-with-exhibition-debut-at-jameel-arts-centre',
    'jameel-arts-centre-dubai-celebrates-its-opening-week-with-close-to-11-000-visitors',
    'social-charity-fund-nafisa-shams-reopen-applications-for-womens-empowerment-initiative',
    'first-public-access-arts-library-in-the-united-arab-emirates-to-open-pioneering-resource-centre-launches-alongside-novembers-inauguration-of-jameel-arts-centre-dubai',
    'regina-barzilay-james-collins-and-phil-sharp-to-lead-the-j-clinic-at-mit',
    'jameel-house-of-traditional-arts-cairo-launches-open-call-for-applications-to-2018-2020-diploma-programme',
    'j-wafs-researchers-develop-new-way-to-clear-pollutants-from-water'
  ]
  console.log(slugs.length);
  const redirects: { [key: string]: string } = {
    "/tes": "/",
    "/programmes/jameel-index": "/programmes/j-wafs/jameel-index",
    "/programmes/jameel-arts-health-lab":
      "/programmes/jameel-arts-and-health-lab",
    "/programme/jameel-arts-health-lab":
      "/programmes/jameel-arts-and-health-lab",
    "/programmes/jameel-observatory":
      "/programmes/jameel-observatory/for-food-security-early-action",
    "/programme/jameel-house-of-world-traditional-arts-in-scotland":
      "/programmes/",
    "/programme/ankur": "/programmes/ankur",
    "/programme/jameel-c40-urban-planning-climate-labs":
      "/programmes/jameel-c40-urban-planning-climate-labs",
    "/programme/jpal-air-and-water-labs": "/programmes/j-pal",
    "/programme/pratham-jameel-second-chance":
      "/programmes/pratham-jameel-second-chance",
    "/programme/climate-labs":
      "/programmes/jameel-c40-urban-planning-climate-labs",
    "/programme/j-pal-mena-scholars-fellowship": "/programmes/j-pal",
    "/programme/climavore-x-jameel-at-rca":
      "/programmes/climavore-x-jameel-at-rca",
    "/programme/bruvs-monaco": "/programmes/bruvs-monaco",
    "/programme/european-social-inclusion-inititative": "/programmes/j-pal",
    "/programme/voxel-lab": "/community/",
    "/programme/yazidi-cultural-archive":
      "/programmes/funds/iraq-cultural-health-fund",
    "/programme/j-pal-evidence-to-policy": "/programmes/j-pal",
    "/programme/jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness":
      "/programmes/jameel-institute/kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness",
    "/programme/jameel-house-of-traditional-arts-in-cairo":
      "/programmes/jameel-house-of-traditional-arts-in-cairo",
    "/programme/gcc-health-and-liveability":
      "/documents/gcc-climate-liveability-report/TheStateOfClimateAndHealthResearchInGCC_FullReport_PDF.pdf",
    "/programme/jameel-observatory-crewsnet":
      "/programmes/jameel-observatory/crewsnet",
    "/programme/jameel-index": "https://jameelindex.mit.edu",
    "/programme/jameel-poverty-action-lab-middle-east-and-north-africa":
      "/programmes/j-pal",
    "/programme/egypt-impact-lab": "/programmes/j-pal",
    "/programme/covid-19-excellence-fund":
      "/programmes/funds/covid-19-excellence-fund",
    "/programme/bab-rizq-jameel": "/community",
    "/programme/community": "/programmes/",
    "/programme/community-jameel": "/",
    "/programme/jameel-observatory":
      "/programmes/jameel-observatory/for-food-security-early-action",
    "/programme/jameel-hardship-fund": "/programmes/funds/jameel-hardship-fund",
    "/programme/jameel-toyota-scholarship":
      "/programmes/jameel-toyota-scholarship",
    "/programme/bocelli-jameel-scholarship":
      "/programmes/bocelli-jameel-scholarship",
    "/programme/scale-up-squared": "/community",
    "/programme/ejada": "/programmes/ejada",
    "/programme/iraq-cultural-health-fund":
      "/programmes/iraq-cultural-health-fund",
    "/programme/jameel-fund": "/programmes/funds/jameel-fund",
    "/centres/jameel-management-centre":
      "/programmes/auc-jameel-centre",
    "/programme/jameel-institute": "/programmes/v",
    "/programme/jameel-clinic": "/programmes/jameel-clinic",
    "/programme/j-wel": "/programmes/j-wel",
    "/programme/j-wafs": "/programmes/j-wafs",
    "/programme/j-pal": "/programmes/j-pal",
    "/whats-on": "/events",
    "/team/george-richards": "/about/team/george-richards",
    "/team/theo-mackenzie": "/about/team/theo-mackenzie",
    "/team/suzan-wadnomiry": "/about/team/suzan-wadnomiry",
    "/team/karim-sedky": "/about/team/karim-sedky",
    "/team/basma-hamza": "/about/team/basma-hamza",
    "/team/melissa-howell": "/about/team/melissa-howell",
    "/team/omar-zaki": "/about/team/omar-zaki",
    "/team/ambreen-shaikh": "/about/team/ambreen-shaikh",
    "/team/timour-spiridonov": "/about/team/timour-spiridonov",
    "/team/sabrina-gilby": "/about/team/sabrina-gilby",
    "/team/nader-diab": "/about/team/nader-diab",
    "/team/salma-zeid": "/about/team/salma-zeid",
    "/team/youssef-azzam": "/about/team/youssef-azzam",
    "/team/hala-el-masri": "/about/team/hala-el-masri",
    "/team/dalia-atallah": "/about/team/dalia-atallah",
    "/team/james-kidner": "/about/team/james-kidner",
    "/team/shobhini-mukerji": "/about/team/shobhini-mukerji",
    "/team/dr-elfatih-eltahir": "/about/team/dr-elfatih-eltahir",
    "/team/dr-erum-mariam": "/about/team/dr-erum-mariam",
    "/team/lord-darzi": "/about/team/lord-darzi",
    "/team/yara-sakr": "/about/team/yara-sakr",
    "/team/nathaniel-daudrich": "/about/team/nathaniel-daudrich",
    "/team/clea-daridan": "/about/team/clea-daridan",
    "/team/hassan-jameel": "/about/team/hassan-jameel",
    "/team/fady-jameel": "/about/team/fady-jameel",
    "/team/uzma-sulaiman": "/about/team/uzma-sulaiman",
    "/team/mohammed-jameel": "/about/team/mohammed-jameel",
    "/team/amna-fatani": "/about/team/amna-fatani",
    '/community/centres': '/community',
    "/community/projects": "/community",
    "centres/jameel-arts-health-lab": "/programmes/jameel-arts-and-health-lab",

  };
  const noArabicSlugs = ['/about/brand','/media','/events','/contact','/about','/about/overview','/about/team[slug]'] 
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host");

  // Check if the request is for '/ar/about/overview' and set the locale cookie
  const slugMatch = slugs.find((slug) => pathname === `/ar/news/${slug}`);
  if (slugMatch) {
    const response = NextResponse.redirect(new URL(`/news/${slugMatch}`, request.url));
    response.cookies.set("NEXT_LOCALE", "en", { path: "/" });
    return response;
  }
  
  if (redirects[pathname]) {
    const redirectUrl = redirects[pathname];

    // Create a response with a redirect to the mapped URL
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));

    return response;
  }
  const noArabicMatch = noArabicSlugs.find((slug) => pathname.startsWith(`/ar${slug}`));
  if (noArabicMatch) {
    const redirectUrl = noArabicMatch.replace('/ar', ''); // Remove the '/ar' from the path for the redirect
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));
    response.cookies.set('NEXT_LOCALE', 'en', { path: '/' });
    return response;
  }
  if (pathname === '/ar/about/overview') {

    // Create a response with a redirect
    const response = NextResponse.redirect(new URL('/about/overview', request.url));
    response.cookies.set('NEXT_LOCALE', 'en', { path: '/' }); // Ensure the cookie is set for all paths
    return response;
  }
  if (redirects[pathname]) {
    const redirectUrl = redirects[pathname];

    // Create a response with a redirect to the mapped URL
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));

    return response;
  }

  if (pathname === "/ar") {
    // Create a response with a redirect
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("NEXT_LOCALE", "en", { path: "/" }); // Ensure the cookie is set for all paths
    return response;
  }

  // Use i18nRouter for other requests
  return i18nRouter(request, i18nConfig);
}

// Configure the matcher to include paths you want the middleware to run on
export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next).*)",
 // This ensures middleware runs on all paths except for the specified ones
  ],
};
