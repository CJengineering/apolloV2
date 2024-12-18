

type FetchResponse = {
    rows: any[];
    fetchMore: boolean;
  };
  
  export async function fetchAll(collection:string): Promise<any[]> {
    let allNews: any[] = [];
    let offset = 0;
    const chunkSize = 150; // Matches the limit in the API
    const websiteUrl = 'https://apollo-v2-git-main-cjengineerings-projects.vercel.app';
  
    while (true) {
      try {
        console.log(`Fetching offset: ${offset}`); // Debug: Log the current offset
          console.log('websiteUrl',websiteUrl)
        const response = await fetch(
          `${websiteUrl}/api/${collection}?offset=${offset}`,
          { next: { revalidate: 3600 } }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to fetch News, status: ${response.status}`);
        }
  
        const data: FetchResponse = await response.json();
  
      
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
  
  