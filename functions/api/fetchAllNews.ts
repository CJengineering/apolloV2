type FetchResponse = {
    rows: any[];
    fetchMore: boolean;
  };
  
  export async function fetchAllNews(collection:string): Promise<any[]> {
    let allNews: any[] = [];
    let offset = 0;
    const chunkSize = 150; // Matches the limit in the API
  
    while (true) {
      try {
        console.log(`Fetching offset: ${offset}`); // Debug: Log the current offset
  
        const response = await fetch(
          `https://next-tutorial-vercel-xi.vercel.app/api/${collection}?offset=${offset}`,
          { next: { revalidate: 36 } }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to fetch News, status: ${response.status}`);
        }
  
        const data: FetchResponse = await response.json();
  
        console.log(`Fetched ${data.rows.length} rows`); // Debug: Log the number of rows fetched
        allNews = allNews.concat(data.rows);
  
        // If fewer rows than the chunk size are returned, it means we've fetched everything
        if (!data.fetchMore) {
          console.log("No more rows to fetch"); // Debug: Log when fetching is complete
          break;
        }
  
        offset += chunkSize; // Increment the offset for the next chunk
      } catch (error) {
        console.error("Error fetching News:", error);
        break;
      }
    }
  
    console.log(`Total rows fetched: ${allNews.length}`); // Debug: Log total rows fetched
    return allNews;
  }
  
  