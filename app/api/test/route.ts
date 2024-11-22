import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

export async function GET(request: Request) {
  const postsId = getIdByDisplayName("News");
  const postsRaw = await getData(postsId);

  const stringArray = JSON.stringify(postsRaw);
  return new Response(stringArray, { status: 200 });
}
