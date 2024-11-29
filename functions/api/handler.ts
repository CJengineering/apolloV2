import { NextApiRequest, NextApiResponse } from 'next';
import { getGoogleAnalyticsData } from './googleAnalytics';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reportData = await getGoogleAnalyticsData();
    res.status(200).json({ reportData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
