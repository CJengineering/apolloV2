import React from 'react';

interface SocialMediaProps {
  title: string;
  platforms: string[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ title, platforms }) => {
  const socialIcons: { [key: string]: string } = {
    Twitter: 'M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z',
    Facebook: 'M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z',
    Instagram: 'M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z',
    Linkedin: 'M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z',
  };

  return (
    <div className="mt-8 w-full rounded-2xl bg-gray-50 p-5 sm:p-8">
      <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
        {title}
      </h3>
      <div className="pt-5">
        <div className="overflow-hidden">
          {platforms.map(
            platform =>
              socialIcons[platform] && (
                <div key={platform}>
                  <a href="#" className="group flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/70 bg-transparent transition duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 transform text-gray-700 transition duration-300 ease-in-out group-hover:scale-110 group-hover:text-red-700"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path d={socialIcons[platform]} />
                          </svg>
                        </span>
                      </div>
                      <div className="relative col-span-3 flex flex-col flex-wrap">
                        <div className="box-border flex w-full flex-1 flex-col justify-between px-6 md:px-0">
                          <div className="transition-color relative z-10 ml-3 text-base font-medium text-gray-700 duration-300 ease-in-out group-hover:text-red-600">
                            {platform}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-2 h-5 w-5 text-red-400 transition duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                  <hr className="my-2.5 ml-13 w-full border-t border-dashed border-gray-300/70" />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
