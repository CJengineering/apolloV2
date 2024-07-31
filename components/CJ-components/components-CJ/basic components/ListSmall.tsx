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
              {(items && items.length > 0) && (items && items[0].name !== "") ? key : ''}
            </h6>

            <div className='flex flex-col'>
              {items && items.map((item, index) => (
                item.url ? (
                  <a href={item.url} className="text-small serif font-normal underline cursor-pointer" key={index}>
                    {item.name}
                  </a>
                ) : (
                  <div className="text-small serif font-normal" key={index}>
                    {item.name}
                  </div>
                )
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
