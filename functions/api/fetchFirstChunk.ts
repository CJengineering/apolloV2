type FetchResponse = {
    rows: any[];
    fetchMore: boolean;
  };
  
  export async function fetchFirstChunk(collection: string): Promise<any[]> {
    const chunkSize = 150; // Limit to the first chunk
    const offset = 0; // Always start from the beginning
    const websiteUrl = process.env.FETCHING_URL;
  
    try {
      console.log(`Fetching first ${chunkSize} rows from ${collection}`); // Debug: Log the fetch action
  
      const response = await fetch(
        `${websiteUrl}/api/${collection}?offset=${offset}`,
        { next: { revalidate: 360 } }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch News, status: ${response.status}`);
      }
  
      const data: FetchResponse = await response.json();
  
      console.log(`Fetched ${data.rows.length} rows`); // Debug: Log the number of rows fetched
  
      return data.rows;
    } catch (error) {
      console.error("Error fetching News:", error);
      return []; // Return an empty array in case of an error
    }
  }
  