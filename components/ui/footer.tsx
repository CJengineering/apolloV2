import Logo from "@/components/ui/logo";
import Link from "next/link";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import SocialMediaLinks from "../custom beta components/SocialMediaLinks";
import SocialMediaList from "../CJ-components/components-CJ/basic components/SocialMediaList";
import ContentFooterContainer from "../CJ-components/components-CJ/custom components/ContentContainerFooter";

export default function Footer() {
  return (

      <footer className="lg:mx-0 border-t dark:bg-slate-900 bg-white border-gray-200 dark:border-slate-700 pt-8">
        <div className="flex sm:flex-auto items-center justify-between">
          <div className="sm:mb-0">
            <div className="flex">
              <Logo />
            </div>
          </div>
          {/* Social links */}
          <div>
            <SocialMediaList
              socialMediaLinks={{
                length: 5,
                instagram: { name: "instagram", url: "https://www.instagram.com/communityjameel/?hl=en" },
                linkedin: { name: "linkedin", url: "https://www.linkedin.com/company/communityjameel/" },
                twitter: { name: "twitter", url: "https://x.com/communityjameel" },
                youtube: { name: "youtube", url: "https://www.youtube.com/c/CommunityJameel" },
                tiktok: { name: "tiktok", url: "https://www.tiktok.com/@communityjameel" },
              }}
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-slate-700 my-8"></div>
        <div className="text-sm sans-serif text-slate-800 dark:text-slate-500">
          © Community Jameel
          <span>. All rights reserved.</span>
        </div>
        <p className="text-sm mt-4 sans-serif dark:text-slate-500">
          Sign up Permission to use this site is granted strictly subject to the
          Terms of Use. The Community Jameel name and logotype are trademarks or
          registered trademarks of Abdul Latif Jameel IPR Company Limited.
        </p>
        <div className="flex flex-col md:flex-row text-sm mono text-slate-800 dark:text-slate-500 mt-4 gap-x-6 gap-y-2 underline">
          <Link href="/legal/terms-of-use">
            <span className="hover:text-orange-700 sans-serif">Terms of Use</span>
          </Link>
          <Link href="/legal/copyright-notice-disclaimer">
            <span className="hover:text-orange-700 sans-serif">
              Copyright notice & disclaimer
            </span>
          </Link>
          <Link href="/legal/privacy-policy">
            <span className="hover:text-orange-700 sans-serif">Privacy policy</span>
          </Link>
          <Link href="/legal/cookie-policy">
            <span className="hover:text-orange-700 sans-serif">Cookie policy</span>
          </Link>
          <Link href="/legal/accessibility-policy">
            <span className="hover:text-orange-700 sans-serif">Accessibility policy</span>
          </Link>
        </div>
      </footer>

  );
}
