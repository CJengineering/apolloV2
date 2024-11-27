export async function fetchSingleNews(collection: string, slug: string): Promise<any | null> {
    try {
      console.log(`Fetching news item with slug: ${slug}`); // Debug: Log the slug being fetched
  
      const response = await fetch(
        `https://next-tutorial-vercel-xi.vercel.app/api/${collection}?slug=${slug}`,
        { next: { revalidate: 36 } }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch news item, status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched news item:", data); // Debug: Log the fetched item
  
      return data;
    } catch (error) {
      console.error("Error fetching news item:", error);
      return null;
    }
  }
  