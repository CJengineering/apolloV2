import { Item, NewsRawFields } from "@/app/interfaces";

interface NewsFilterOptions {
  programme?: string;

  tags?: string[];
  people?: string;
}

export function filterRelatedNews(
  newsData: Item<NewsRawFields>[],
  options: NewsFilterOptions
): Item<NewsRawFields>[] {
  return newsData.filter((news) => {
    const matchesProgramme = options.programme
      ? news.fieldData.programme === options.programme 
      : false;

    const matchesTags = options.tags
      ? options.tags.some(tag => news.fieldData.tags?.includes(tag))
      : false;
    const matchesPeople = options.people
      ? news.fieldData.people?.includes(options.people)
      : false;

    return matchesProgramme || matchesTags || matchesPeople;
  });
}
