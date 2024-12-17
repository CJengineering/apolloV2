import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const offset = parseInt(url.searchParams.get("offset") || "0", 10); // Default offset to 0 if not provided
  const limit = 150; // Fixed chunk size

  try {
    const { rows } = await sql`
    SELECT
      field_data->>'slug' AS "slug",
      field_data->'thumbnail'->>'url' AS "thumbnailUrl",
      field_data->'thumbnail'->>'alt' AS "thumbnailAltText",
      field_data->'sources'->>'name' AS "sourcesName",
      field_data->'sources'->>'arabicName' AS "sourcesArabicName",
      field_data->'sources'->>'slug' AS "sourcesSlug",
      field_data->'sources'->>'url' AS "sourcesUrl",
      field_data->>'arabicTitle' AS "arabicTitle",
      field_data->>'name' AS "name",
      field_data->>'datePublished' AS "datePublished",
      field_data->>'datePublishedArabic' AS "datePublishedArabic",
      field_data->'programme'->>'name' AS "programmeName",
      field_data->'programme'->>'arabicName' AS "programmeArabicName",
      field_data->'programme'->>'shortname' AS "programmeShortname",
      field_data->'programme'->>'slug' AS "programmeSlug",
      field_data->'programme'->>'url' AS "programmeUrl"
    FROM news
     ORDER BY TO_DATE(field_data->>'datePublished', 'DD Month YYYY') DESC
    LIMIT ${limit} OFFSET ${offset};
  `;

    const fetchMore = rows.length === limit; // Determine if more data is available (fetchMore = true if full chunk is returned)

    return new Response(JSON.stringify({ rows, fetchMore }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // Prevent caching
        "Access-Control-Allow-Origin": "https://www.communityjameel.org",
      },
    });
  } catch (error: any) {
    console.error("Error fetching news:", error.message);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }
}
