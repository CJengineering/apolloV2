
import { getGoogleAnalyticsData } from '@/functions/api/googleAnalytics';
import { useEffect, useState } from 'react';


function SessionCounter({visitCount}: {visitCount: string}) {


  return (
    <div>
      <p className='text-sm sans-serif text-slate-800 dark:text-slate-500'>Total Visits: {visitCount}</p>
    </div>
  );
}

export default SessionCounter;
