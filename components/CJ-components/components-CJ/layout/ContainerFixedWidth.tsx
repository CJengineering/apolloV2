import React from 'react'

export default function ContainerFixedWidth({children}: {children: React.ReactNode}) {
  return (
    <div className="2xl:w-[1283px] xl:w-[1030px] lg:w-[774px] min-h-screen">{children}</div>
  )
}
