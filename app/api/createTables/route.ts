import { db } from "@vercel/postgres";

async function getClient() {
  return await db.connect();
}

async function createTable(client: any) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS news (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      webflow_collection_id TEXT NOT NULL,
      webflow_item_id TEXT NOT NULL,
      slug TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
      field_data JSONB NOT NULL,
      UNIQUE (webflow_collection_id, webflow_item_id)
    );
  `;

  console.log("news table created successfully.");
}

export async function GET() {
  let client;
  try {
    client = await getClient();
    console.log("Creating table...");
    await createTable(client);
    return new Response(
      JSON.stringify({ message: "Table 'news' created successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error creating table:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}
