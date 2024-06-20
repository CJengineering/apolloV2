import {
    Item,

    JobsRawFields,

    PublicationsRawFields,
  } from "@/app/interfaces";
  
  interface FilterOptions {
    programme?: string;
  

  }
  
  export default function filterRelatedPublications(
    jobs: Item<JobsRawFields>[],
    options: FilterOptions
  ): Item<JobsRawFields>[] {
    return jobs.filter((item) => {
      const matchesProgramme = options.programme
        ? item.fieldData["label-programmed"] === options.programme
        : false;
  
  
      return matchesProgramme 
    });
  }
  