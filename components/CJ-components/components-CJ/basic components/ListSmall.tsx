import { ListSmallProps } from '@/app/interfaces';
import React from 'react';

export default function ListSmall({ data }: ListSmallProps) {
  if (!data || Object.keys(data).length === 0) {
    return null;
  }


  return (
    <>
      {Object.keys(data).map((key) => {
        const items = data[key]; 

        return (
          <div key={key}>
        
            <h6 className="text-xs font-normal mono uppercase">
              {(items && items.length > 0) && (items && items[0] !=="")  ? key : ''}
            </h6>

            <div>
              {items && items.map((item, index) => (
                <div className="text-small sans-serif font-normal" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
