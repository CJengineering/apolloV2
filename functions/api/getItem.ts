export default async function getItem(collectionId: string, itemId: string) {
    const apiKey = "d2eac7bfcd8cc230db56e0dd9f9c7c7f4652db6195ad674c0b7939bb438fb33c";
    
    try {
      const response = await fetch(`https://api.webflow.com/collections/${collectionId}/items/${itemId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });
  
      const contentType = response.headers.get("content-type");
  
      if (!contentType || !contentType.includes("application/json")) {
        // Handle non-JSON response
        const text = await response.text();
        console.error("Unexpected non-JSON response:", text);
        throw new Error("Unexpected non-JSON response");
      }
  
      const data = await response.json();
      console.log('this is data', data);
      return data;
    } catch (error) {
      console.error("Error fetching item:", error);
      throw error; // Rethrow the error after logging it
    }
  }