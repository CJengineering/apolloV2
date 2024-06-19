'use client'

import React from 'react'

// Update the ButtonCJProps interface to include href and text
interface ButtonCJProps {
  href: string
  text: string
}

const ButtonCJ: React.FC<ButtonCJProps> = ({ href, text }) => {
  return (
    <a href={href} className="inline-block">
      <button className="text-tiny rounded-lg border-2 border-blue-500 bg-transparent px-8 py-2 font-bold uppercase text-blue-500 transition duration-150 ease-in-out hover:border-orange-500 hover:text-orange-500">
        {text}
      </button>
    </a>
  )
}

export default ButtonCJ
