
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
          <head>
        <style>
          {`
            body {
              overflow: hidden;
            }
            /* Hide scrollbar for Chrome, Safari and Opera */
            body::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE, Edge and Firefox */
            body {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}
        </style>
      </head>  
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
