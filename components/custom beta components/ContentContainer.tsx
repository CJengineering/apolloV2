import React from 'react'

export default function ContentContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='px-4 md:max-w-screen-md lg:max-w-screen-2xl'>
        {children}
    </div>
  )
}
