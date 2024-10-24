import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

export async function GET(request: Request) {
  const postsId = getIdByDisplayName("Posts");
  const postsRaw = await getData(postsId);
  const postswitharabic = postsRaw.items.filter((item) => item.fieldData["arabic-complete-incomplete"]===false);
  const slugNoArabic = postswitharabic.map((item) => item.fieldData.slug);
  const firstPost = JSON.stringify(postsRaw.items[0]);
  const stringArray = JSON.stringify(slugNoArabic);
  return new Response(stringArray, { status: 200 });
}
