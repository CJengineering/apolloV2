import React from 'react';

interface Props {
  params: { slug: string; locale: string };
}

export default function PrathamJameelSecondChanceProgramme({
  params,
}: Props) {
  return (
    <div className='pt-36'>Pratham Jameel Second Chance Programme</div>
  );
}