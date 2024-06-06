'use client'
import { Disclosure, Transition } from '@headlessui/react';
import React, { ReactNode } from 'react';

interface Props {
  panelContent: ReactNode;
  bgColor?: string;
  topElement: ReactNode;

}

const Accordion: React.FC<Props> = ({ panelContent,topElement, bgColor }) => {
  return (
    <div className={`${bgColor}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between  px-4 w-full">
             {topElement}
              <div className={`transition-transform duration-300 ${open ? 'transform rotate-45' : ''} text-xl`}>
                +
              </div>
            </Disclosure.Button>
            <div className="overflow-hidden ">
              <Transition
                enter="duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="duration-300 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-6"
              >
                <Disclosure.Panel className=" text-gray-500 px-4">
                 
                    {panelContent}
            
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default Accordion;
