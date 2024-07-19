import React from 'react';

interface Props {
  params: { slug: string; locale: string };
}

export default function JameelInstitute({ params }: Props) {
  return (
    <div className='pt-36'>Jameel Institute</div>
  );
}