type FetchResponse = {
  items: any[];
};
export async function getDataInternalServer(
  endpoint: string
): Promise<FetchResponse> {
  try {
    const response = await fetch(`https://next-tutorial-vercel-xi.vercel.app/api/${endpoint}`, {
  
        next: { revalidate: 36 },
        
        headers: {
          Accept: "application/json",
         
       
        },
    });

    if (!response.ok) {
        console.log(`this is the endpoirtn', ${endpoint}`)
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseData = await response.json(); // Parse the JSON response
    const itemsAll = responseData.items; // Extract the `items` property

    if (!Array.isArray(itemsAll)) {
      throw new Error(
        "Expected `items` to be an array, but got: " + typeof itemsAll
      );
    }

    return { items: itemsAll }; // Return the `items` array
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
