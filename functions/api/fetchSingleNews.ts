export async function fetchSingleItem(collection: string, slug: string): Promise<any | null> {
    const websiteUrl =process.env.FETCHING_URL;
    try {
      console.log(`Fetching news item with slug: ${slug}`); // Debug: Log the slug being fetched
  
      const response = await fetch(
        `${websiteUrl}/api/${collection}?slug=${slug}`,
        { next: { revalidate: 36 } }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch news item, status: ${response.status}`);
      }
  
      const data = await response.json();
     
  
      return data;
    } catch (error) {
      console.error("Error fetching news item:", error);
      return null;
    }
  }
  