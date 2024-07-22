import React from 'react';

interface Params {
  slug: string;
  locale: string;
}

export default function BocelliJameelScholarship({
  params,
}: {
  params: Params;
}) {
  return <div className='pt-36'>Bocelli-Jameel-Scholarship</div>;
}