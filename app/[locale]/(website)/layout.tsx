import "../../css/style.css";

import { EB_Garamond, Nothing_You_Could_Do } from "next/font/google";
import localFont from "next/font/local";

import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Sidebar2 from "@/components/ui/sideBar2";

import { get } from "http";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getData } from "@/functions/api/getData";
import Footer from "@/components/ui/footer";
import { DivideCircle, Weight } from "lucide-react";
import {
  eb_garamond,
  ibm_plex_mono,
  ibm_plex_sans,
  ibm_plex_serif,
  libre_baskerville,
  vollkorn,
} from "@/app/fonts";
import Theme from "@/app/theme-provider";
import AppProvider from "@/app/app-provider";
import { Suspense } from "react";
import LoadingLogo from "@/components/CJ-components/components-CJ/test components/LoadingLogo";

const nycd = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nycd",
  weight: "400",
  display: "swap",
});

const arial = localFont({
  src: [
    { path: "../../../public/fonts/arial/ArialCE.ttf", weight: "400" },
    { path: "../../../public/fonts/arial/ArialMdm.ttf", weight: "600" },
  ],
  variable: "--font-arial",
  display: "swap",
});
const aspekta = localFont({
  src: [
    {
      path: "../../../public/fonts/Aspekta-350.woff2",
      weight: "350",
    },
    {
      path: "../../../public/fonts/Aspekta-400.woff2",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../../../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});
const costa = localFont({
  src: [
    {
      path: "../../../public/fonts/Costa Ptf Bold.otf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/Costa Ptf Regular.otf",
      weight: "500",
    },
  ],
  variable: "--font-costa",
  display: "swap",
});
const zain = localFont({
  src: [
    { path: "../../../public/fonts/Zain-Black.ttf", weight: "900" },
    { path: "../../../public/fonts/Zain-ExtraBold.ttf", weight: "800" },
    { path: "../../../public/fonts/Zain-ExtraLight.ttf", weight: "200" },
    { path: "../../../public/fonts/Zain-Regular.ttf", weight: "400" },
  ],
  variable: "--font-zain",
  display: "swap",
});

export const metadata = {
  title: "Community Jameel",
  description: "Advancing science and learning for communities to thrive",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth " suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${nycd.variable}${zain.variable} ${aspekta.variable} ${costa.variable} ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${ibm_plex_serif.variable} ${vollkorn.variable} ${arial.variable}  ${libre_baskerville.variable} ${eb_garamond.variable} font-aspekta antialiased text-slate-800 font-[350] bg-white dark:bg-slate-900 dark:text-slate-200`}
      >
        <Theme>
          <AppProvider>
            {/*  previous div had this 'min-h-screen overflow-hidden' removed for sticky positioning  */}
            <div className="flex flex-col ">
              <Header />

              {/*  Page content */}
              <main className="grow  b">
                <div className="relative">
                  

                  <div className="max-w-12xl mx-auto md:px-0 md:pr-3 sm:px-6">
                    <div>
                      {/* Page container */}
                      <div className=" ">
                        <div className="pt-3 mx-auto lg:pt-6 pb-8">
                    
                        <Suspense fallback={<LoadingLogo />}>
                            {children}
                          </Suspense> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <Footer />
                </div>
              </main>
            </div>
          </AppProvider>
        </Theme>
      </body>
    </html>
  );
}
