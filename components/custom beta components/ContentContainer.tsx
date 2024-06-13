import React from 'react'

export default function ContentContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='lg:max-w-screen-lg    px-2'>
        {children}
    </div>
  )
}
