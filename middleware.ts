
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from './i18nConfig';
import { revalidatePath } from 'next/cache';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for '/ar/about/overview' and set the locale cookie
  if (pathname === '/ar/about/overview') {
    

    // Create a response with a redirect
    const response = NextResponse.redirect(new URL('/about/overview', request.url));
    response.cookies.set('NEXT_LOCALE', 'en', { path: '/' }); // Ensure the cookie is set for all paths
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
