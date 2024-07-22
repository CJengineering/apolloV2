import React from 'react';

interface Props {
  params: { slug: string; locale: string };
}

const JameelObservatoryCrewsnet: React.FC<Props> = ({ params }) => {
  return (
    <div className='pt-36'>Jameel-Observatory-Crewsnet</div>
  );
};

export default JameelObservatoryCrewsnet;