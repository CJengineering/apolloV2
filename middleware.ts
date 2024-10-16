
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from './i18nConfig';
import { revalidatePath } from 'next/cache';


export function middleware(request: NextRequest) {
  const redirects: { [key: string]: string } = {
    '/tes': '/',
    '/programmes/jameel-index': '/programmes/j-wafs/jameel-index',
    '/programmes/jameel-arts-health-lab': '/programmes/jameel-arts-and-health-lab',
    '/programme/jameel-arts-health-lab': '/programmes/jameel-arts-and-health-lab',
    '/programmes/jameel-observatory': '/programmes/jameel-observatory/for-food-security-early-action',
    '/programme/jameel-house-of-world-traditional-arts-in-scotland': '/programmes/',
    '/programme/ankur': '/programmes/ankur',
    '/programme/jameel-c40-urban-planning-climate-labs': '/programmes/jameel-c40-urban-planning-climate-labs',
    '/programme/jpal-air-and-water-labs': '/programmes/j-pal',
    '/programme/pratham-jameel-second-chance': '/programmes/pratham-jameel-second-chance',
    '/programme/climate-labs': '/programmes/jameel-c40-urban-planning-climate-labs',
    '/programme/j-pal-mena-scholars-fellowship': '/programmes/j-pal',
    '/programme/climavore-x-jameel-at-rca': '/programmes/climavore-x-jameel-at-rca',
    '/programme/bruvs-monaco': '/programmes/bruvs-monaco',
    '/programme/european-social-inclusion-inititative': '/programmes/j-pal',
    '/programme/voxel-lab': '/community/',
    '/programme/yazidi-cultural-archive': '/programmes/funds/iraq-cultural-health-fund',
    '/programme/j-pal-evidence-to-policy': '/programmes/j-pal',
    '/programme/jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness': '/programmes/jameel-institute/kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness',
    '/programme/jameel-house-of-traditional-arts-in-cairo': '/programmes/jameel-house-of-traditional-arts-in-cairo',
    '/programme/gcc-health-and-liveability': '/documents/gcc-climate-liveability-report/TheStateOfClimateAndHealthResearchInGCC_FullReport_PDF.pdf',
    '/programme/jameel-observatory-crewsnet': '/programmes/jameel-observatory/crewsnet',
    '/programme/jameel-index': 'https://jameelindex.mit.edu',
    '/programme/jameel-poverty-action-lab-middle-east-and-north-africa': '/programmes/j-pal',
    '/programme/egypt-impact-lab': '/programmes/j-pal',
    '/programme/covid-19-excellence-fund': '/programmes/funds/covid-19-excellence-fund',
    '/programme/bab-rizq-jameel': '/community',
    '/programme/community': '/programmes/',
    '/programme/community-jameel': '/',
    '/programme/jameel-observatory': '/programmes/jameel-observatory/for-food-security-early-action',
    '/programme/jameel-hardship-fund': '/programmes/funds/jameel-hardship-fund',
    '/programme/jameel-toyota-scholarship': '/programmes/jameel-toyota-scholarship',
    '/programme/bocelli-jameel-scholarship': '/programmes/bocelli-jameel-scholarship',
    '/programme/scale-up-squared': '/community',
    '/programme/ejada': '/programmes/ejada',
    '/programme/iraq-cultural-health-fund': '/programmes/iraq-cultural-health-fund',
    '/programme/jameel-fund': '/programmes/funds/jameel-fund',
    '/programme/jameel-management-centre': '/programmes/jameel-management-centre',
    '/programme/jameel-institute': '/programmes/v',
    '/programme/jameel-clinic': '/programmes/jameel-clinic',
    '/programme/j-wel': '/programmes/j-wel',
    '/programme/j-wafs': '/programmes/j-wafs',
    '/programme/j-pal': '/programmes/j-pal',
    '/whats-on': '/events'
  };
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host')

  // Check if the request is for '/ar/about/overview' and set the locale cookie
  // if (pathname === '/ar/about/overview') {
    

  //   // Create a response with a redirect
  //   const response = NextResponse.redirect(new URL('/about/overview', request.url));
  //   response.cookies.set('NEXT_LOCALE', 'en', { path: '/' }); // Ensure the cookie is set for all paths
  //   return response;
  // }
  if (redirects[pathname]) {
    const redirectUrl = redirects[pathname];

    // Create a response with a redirect to the mapped URL
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));
  
    return response;
    
  }

  if (pathname === '/ar') {
    

    // Create a response with a redirect
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('NEXT_LOCALE', 'en', { path: '/' }); // Ensure the cookie is set for all paths
    return response;
  }

  // Use i18nRouter for other requests
  return i18nRouter(request, i18nConfig);
}

// Configure the matcher to include paths you want the middleware to run on
export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next).*)','/ar/about/overview' // This ensures middleware runs on all paths except for the specified ones
  ],
};
