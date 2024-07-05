// import React from 'react'

// export default function ContentContainer({children}: {children: React.ReactNode}) {
//   return (
//     <div className='px-4 md:max-w-screen-md lg:max-w-screen-xl'>
//         {children}
//     </div>
//   )
// }

import React from 'react'

interface ContentContainerProps {
  children: React.ReactNode;
  width?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
  desktopWidth?: 'full' | 'small' | 'medium' | 'large';
}

export default function ContentContainer({ children, width = 'full', desktopWidth }: ContentContainerProps) {
  let widthClass = '';

  switch (width) {
    case 'full':
      widthClass = 'w-full';
      break;
    case 'xl':
      widthClass = 'max-w-screen-xl';
      break;
    case 'lg':
      widthClass = 'max-w-screen-lg';
      break;
    case 'md':
      widthClass = 'max-w-screen-md';
      break;
    case 'sm':
      widthClass = 'max-w-screen-sm';
      break;
    default:
      widthClass = 'max-w-screen-xl';
  }

  let desktopWidthClass = '';
  switch (desktopWidth) {
    case 'full':
      desktopWidthClass = 'w-full';
      break;
    case 'small':
      desktopWidthClass = 'max-w-[1250px]';
      break;
    case 'medium':
      desktopWidthClass = 'max-w-[1440px]';
      break;
    case 'large':
      desktopWidthClass = 'max-w-[1920px]';
      break;
    default:
      desktopWidthClass = '';
  }

  return (
    <div className={`mx-auto mt-8 px-4 md:px-4 lg:px-4 ${widthClass} ${desktopWidthClass}`}>
      {children}
    </div>
  )
}