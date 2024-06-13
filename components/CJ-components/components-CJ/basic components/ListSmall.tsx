
import { ListSmallProps } from '@/app/interfaces';
import React from 'react'

export default function ListSmall({ data }: ListSmallProps) {
  if (!data ) {
    return <div></div>;
  }
  return (
    
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <h6 className="text-xs font-normal mono uppercase">{key}</h6>

          <div>
       
            {data[key] &&  data[key]?.map((item, index) => (
              <div className="text-small sans-serif font-normal" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
