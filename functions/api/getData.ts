type FetchResponse = {
  items: any[];
  error?: string;
  fetchTime: number;
};

export async function getData(collection:string): Promise<FetchResponse> {
  const baseUrl = `https://api.webflow.com/v2/collections/${collection}/items`;
  const randomString= "d2eac7bfcd8cc230db56e0dd9f9c7c7f4652db6195ad674c0b7939bb438fb33c";
  let allItems: any[] = [];
  let offset = 0;
  let fetchMore = true;

  try {
    const startTime = Date.now(); // Capture start time

    while (fetchMore) {
      const response = await fetch(`${baseUrl}?offset=${offset}&limit=100`, {
        next: { revalidate: 10 },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${randomString}`,
       
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch, status: ${response.status}`);
      }

      const data = await response.json();
      const items = data.items;
      allItems = allItems.concat(items);
      offset += items.length;

      // Check if the number of items fetched is less than 100, indicating last page
      fetchMore = items.length === 100;
    }

    const endTime = Date.now(); // Capture end time
    const fetchDuration = (endTime - startTime) / 1000; // Calculate duration in seconds


    return { items: allItems, fetchTime: fetchDuration };
  } catch (error: any) {
    console.error("Error fetching data: ", error);
    return { items: [], error: error.message, fetchTime: 0 };
  }
}
