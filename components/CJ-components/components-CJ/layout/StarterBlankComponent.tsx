import React from 'react'

interface StarterBlankComponentProps {
    name: string,
    age: number,
    validate: boolean,
    children?: React.ReactNode
    component?: React.ReactNode
}


export default function StarterBlankComponent({props}: {props: StarterBlankComponentProps   }) {
  return (
    <div>StarterBlankComponent <h1>{props.name}</h1></div>
  )
}
 