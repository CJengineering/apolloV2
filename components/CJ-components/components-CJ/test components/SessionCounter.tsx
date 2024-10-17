
import { getGoogleAnalyticsData } from '@/functions/api/googleAnalytics';
import { useEffect, useState } from 'react';


function SessionCounter({visitCount}: {visitCount: string}) {


  return (
    <div className="flex justify-start">
      <div className="">
        <p className="text-sm sans-serif text-slate-800 dark:text-slate-500 mr-2 py-[3px]">You are visitor</p>
      </div>
      <div className="">
        <p className="text-sm uppercase mono text-slate-800 dark:text-slate-500 py-[3px] px-[6px] bg-slate-100 font-bold">000000{visitCount}</p>
      </div>
    </div>
  );
}

export default SessionCounter;
