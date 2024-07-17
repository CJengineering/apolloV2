import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t md:grow md:pl-64  bg-slate-100 pb-4 border-slate-200 pt-8 dark:border-slate-800">
      <div className="flex ml-4  flex-col md:flex-row items-center justify-center md:justify-between mr-4">
        <div className="mb-4 md:mb-0">
          <div className="shrink-0 flex flex-col md:flex-row items-center">
            {/* Logo */}
            <Logo />
          </div>
        </div>
        {/* Social links */}
        <ul className="flex space-x-6 justify-center items-center">
          <li className=""> 
            <a
              className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
              href="https://twitter.com"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
               
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
              href="#0"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 23"
              
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
              href="#0"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
              href="#0"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
          
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-8"></div>
  
        <div className="text-sm mono text-slate-500 mx-4">
          © Community Jameel
          <span className="md:hidden lg:inline">. All rights reserved.</span>
        </div>
        <p className="text-sm mono text-slate-500  mt-4 mx-4">
          Sign up Permission to use this site is granted strictly subject to the
          Terms of Use. The Community Jameel name and logotype are trademarks or
          registered trademarks of Abdul Latif Jameel IPR Company Limited.
        </p>
       <div className="flex mb-8 text-sm mono text-slate-500  ml-4 mt-4 gap-x-6 underline ">
       <Link href={"/legal/terms-of-use"}>Terms of Use</Link>
       <Link href={"/legal/copyright-notice-disclaimer"}>Copyright notice & disclaimer</Link>
       <Link href={"/legal/privacy-policy"}>Privacy policy</Link>
       <Link href={"/legal/cookie-policy"}>Cookie policy</Link>
       <Link href={"/legal/accessibility-policy"}>Accessibility policy</Link>
       </div>
    </footer>
  );
}
