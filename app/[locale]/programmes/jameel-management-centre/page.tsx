import React from 'react';

interface Props {
  params: { slug: string; locale: string };
}

export default function JameelManagementCentre({ params }: Props) {
  return (
    <div className='pt-36'>Jameel Management Centre</div>
  );
}