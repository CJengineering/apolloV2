import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { Buffer } from 'buffer';

export async function getGoogleAnalyticsData() {
  const base64EncodedCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!base64EncodedCredentials) {
    throw new Error('Google credentials not provided');
  }

  let credentialsJson;
  try {
    credentialsJson = Buffer.from(base64EncodedCredentials, 'base64').toString('utf-8');
  } catch (error) {
    throw new Error(`Failed to decode Base64 credentials: ${error}`);
  }

  const credentials = JSON.parse(credentialsJson);

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
  });
  const propertyId = '371199007' // Replace with your GA4 property ID

  try {
    // Fetch the total number of sessions (visits)
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31', // Start date for when you want to count visits
          endDate: 'today',        // End date (e.g., today)
        },
      ],
      metrics: [
        {
          name: 'sessions', // We're counting total sessions (visits)
        },
      ],
    });

    // Retrieve the total count of sessions (visits)
    const totalSessions = response.rows?.[0]?.metricValues?.[0]?.value || '0';

    return totalSessions;  // Return the total visits count
  } catch (error) {
    console.error(`Error while fetching Google Analytics data: ${error}`, error);
    throw new Error(`Failed to fetch Google Analytics data: ${error}`);
  }
}
