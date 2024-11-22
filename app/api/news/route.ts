import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

export async function GET(request: Request) {
    // Get IDs by display name where needed
    const categoryId = getIdByDisplayName("Categories");
  
    // Fetch raw data for each collection
    const rawPosts = await getData("61ee828a15a3183262bde542");
 
  
    // Create JSON objects for the responses
    const rawPostsJson = JSON.stringify(rawPosts);
  
  
    // Combine responses into a single object
    const combinedResponse = {
      posts: rawPosts,

    };
  
    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  }
  