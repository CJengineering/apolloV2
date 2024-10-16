import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { MetadataRoute } from "next";

export default async function sitemap() {

  const eventId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");
  const postsId = getIdByDisplayName("Posts");
  const teamId = getIdByDisplayName("Team");

  const eventRaw = await getData(eventId);
  const newsRaw = await getData(newsId);
  const postsRaw = await getData(postsId);
  const teamRaw = await getData(teamId);
  const events = eventRaw.items
    .map((item) => ({
      url: `https://www.communityjameel.org/events/${item.fieldData.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }));
  const news = newsRaw.items.map((item) => ({
    url: `https://www.communityjameel.org/news/${item.fieldData.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));
  const posts = postsRaw.items.map((item) => ({
    url: `https://www.communityjameel.org/posts/${item.fieldData.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));
  const team = teamRaw.items.map((item) => ({
    url: `https://www.communityjameel.org/about/team/${item.fieldData.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));



  return [
    {
      url: "https://www.communityjameel.org",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.communityjameel.org/about/overview",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.communityjameel.org/about/team",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.communityjameel.org/about/family-album",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.communityjameel.org/about/brand",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Programmes
    {
      url: "https://www.communityjameel.org/programmes/j-pal",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/j-wafs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/j-wel",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-clinic",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-institute",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // J-PAL Nested Links
    {
      url: "https://www.communityjameel.org/programmes/j-pal/global",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // J-WAFS Nested Links
    {
      url: "https://www.communityjameel.org/programmes/j-wafs/overview",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Jameel Institute Nested Links
    {
      url: "https://www.communityjameel.org/programmes/jameel-institute/kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Jameel Observatory Nested Links
    {
      url: "https://www.communityjameel.org/programmes/jameel-observatory/for-food-security-early-action",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-observatory/crewsnet",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Bocelli-Jameel Scholarship Nested Links
    {
      url: "https://www.communityjameel.org/programmes/bocelli-jameel-scholarship/overview",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/programmes/bocelli-jameel-scholarship/media",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/people/clara-barbier-serrano",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/people/laura-mekhail",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/people/seonwoo-lee",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/people/anastasia-koorn",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/people/henna-mun",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // Jameel House of Traditional Arts in Cairo Nested Links
    {
      url: "https://www.communityjameel.org/programmes/jameel-house-of-traditional-arts-in-cairo/2023-graduation-collection",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-house-of-traditional-arts-in-cairo/2024-graduation-collection",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },

    {
      url: "https://www.communityjameel.org/programmes/pratham-jameel-second-chance",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-c40-urban-planning-climate-labs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/ejada",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/jameel-toyota-scholarship",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/ankur",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/programmes/bruvs-monaco",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Funds Nested Links
    {
      url: "https://www.communityjameel.org/programmes/funds/jameel-fund",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/programmes/funds/iraq-cultural-health-fund",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/programmes/funds/covid-19-excellence-fund",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/media",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/news",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/events",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.communityjameel.org/newsletter",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Stories Nested Links
    {
      url: "https://www.communityjameel.org/stories/gcc-heat-tracker",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/stories/harvesting-hope",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/stories/a-cairo-cornerstone",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.communityjameel.org/stories/ksa-healthcare-timeline",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...events,
    ...news,
    ...posts,
    ...team
  ];
}
