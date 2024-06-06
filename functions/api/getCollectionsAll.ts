export default async function getCollectionsAll() {
    const baseUrl = "https://api.webflow.com/v2/sites/612cdb8a4fac760705621df5/collections";
    const apiKey = "d2eac7bfcd8cc230db56e0dd9f9c7c7f4652db6195ad674c0b7939bb438fb33c";
    const response = await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });
     const data = await response.json();
        return data.collections;
    }