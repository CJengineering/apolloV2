type FetchResponse = {
    rows: any[];
    fetchMore: boolean;
  };
  
  export async function fetchAllPosts(): Promise<any[]> {
    let allPosts: any[] = [];
    let offset = 0;
    const chunkSize = 10; // Matches the limit in the API
    const websiteUrl ='https://www.communityjameel.com';
    while (true) {
      try {
        console.log(`Fetching offset: ${offset}`); // Debug: Log the current offset
  
        const response = await fetch(
          `${websiteUrl}/api/test?offset=${offset}`,
          { next: { revalidate: 36 } }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to fetch posts, status: ${response.status}`);
        }
  
        const data: FetchResponse = await response.json();
  
        console.log(`Fetched ${data.rows.length} rows`); // Debug: Log the number of rows fetched
        allPosts = allPosts.concat(data.rows);
  
        // If fewer rows than the chunk size are returned, it means we've fetched everything
        if (!data.fetchMore) {
          console.log("No more rows to fetch"); // Debug: Log when fetching is complete
          break;
        }
  
        offset += chunkSize; // Increment the offset for the next chunk
      } catch (error) {
        console.error("Error fetching posts:", error);
        break;
      }
    }
  
   
    return allPosts;
  }
  
  