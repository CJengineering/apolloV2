import React from 'react';

interface Props {
  params: { slug: string; locale: string };
}

export default function JameelPovertyActionLab({ params }: Props) {
  return (
    <div className='pt-36'>Jameel Poverty Action Lab</div>
  );
}