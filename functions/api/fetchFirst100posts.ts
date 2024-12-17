type FetchResponse = {
    rows: any[];
  };
  
  export async function fetchFirst100Posts(): Promise<any[]> {
    const limit = 100; // Define the limit for rows
    const offset = 0; // Always start from the beginning
    const websiteUrl = 'https://apollo-v2-git-main-cjengineerings-projects.vercel.app';
    
    try {
      console.log(`Fetching first ${limit} rows`); // Debug: Log the fetch action
  
      const response = await fetch(
        `${websiteUrl}/api/posts?offset=${offset}&limit=${limit}`,
        { next: { revalidate: 36 } }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch posts, status: ${response.status}`);
      }
  
      const data: FetchResponse = await response.json();
  
      console.log(`Fetched ${data.rows.length} rows`); // Debug: Log the number of rows fetched
  
      return data.rows;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return []; // Return an empty array in case of an error
    }
  }
  