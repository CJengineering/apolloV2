import "./css/style.css";

import { Nothing_You_Could_Do } from "next/font/google";
import localFont from "next/font/local";
import Theme from "./theme-provider";
import AppProvider from "./app-provider";
import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Sidebar2 from "@/components/ui/sideBar2";
import { ibm_plex_mono, ibm_plex_sans, ibm_plex_serif } from "./fonts";

const nycd = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nycd",
  weight: "400",
  display: "swap",
});

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-350.woff2",
      weight: "350",
    },
    {
      path: "../public/fonts/Aspekta-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});
const costa = localFont({
  src: [
    {
      path: "../public/fonts/Costa Ptf Bold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Costa Ptf Regular.otf",
      weight: "500",
    },
  ],
  variable: "--font-costa",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${nycd.variable} ${aspekta.variable} ${costa.variable} ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${ibm_plex_serif.variable} font-aspekta antialiased text-slate-800 font-[350] bg-white dark:bg-slate-900 dark:text-slate-200`}
      >
        <Theme>
          <AppProvider>
            {/*  previous div had this 'min-h-screen overflow-hidden' removed for sticky postionnint  */}
            <div className="flex    flex-col ">
              <Header />

              {/*  Page content */}
              <main className="grow  ">
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"></div>

                  <div className="max-w-12xl mx-auto md:px-0 md:pr-3 sm:px-6">
                    <div>
                      <Sidebar2 />

                      {/* Page container */}
                      <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                        <div className="pt-12  md:pt-12 pb-8 md:pl-6 lg:pl-6">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </AppProvider>
        </Theme>
      </body>
    </html>
  );
}
