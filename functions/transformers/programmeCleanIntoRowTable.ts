import { ProgrammeCleanedFields, RowData } from "@/app/interfaces";

export function mapProgrammeToRowData(programme: ProgrammeCleanedFields): RowData {
    return {
      repository: {
        top: {
          name: programme.name,
          description: programme.description,
          mission: programme.byline,
          year: programme.yearEstablished,
          partners: programme.partners.map(partner => partner.name),
        },
        content: {
          established: { data: { established: [programme.yearEstablished, programme.yearClosed].filter(Boolean) } },
          research: { data: { research: [programme.fieldEnglishResearch ]} },
          logo: {   url: programme.logoSvgDark.url , alt: programme.logoSvgDark.alt},
          headquarters: { data: { headquarters: [programme.headquartersEnglish].filter(Boolean) } },
          leadership: { data: { leadership: programme.leadership.map(leader => leader.name) } },
          "key initiatives": { data: { initiatives: programme.features.map(feature => feature.name) } },
          "key partners": { data: { partners: programme.partners.map(partner => partner.name) } },
          fullDescription: programme.text,
          socialMediaLinks: {
            instagram: {name: 'instagram', url: programme.instagram },
            youtube: { name: 'youtube',url: programme.youtube },
            linkedin: {name:'linkedin', url: programme.linkedin },
            facebook: {name:'facebook', url: programme.facebook },
            twitter: { name:'twitter',url: programme.twitter },
          },
          stats: [
            { title: programme.impact01Title, content: programme.impact01 },
            { title: programme.impact02Title, content: programme.impact02 },
            { title: programme.impact03Title, content: programme.impact03 },
            { title: programme.impact04Title, content: programme.impact04 },
            { title: programme.impact05Title, content: programme.impact05 },
            { title: programme.impact06Title, content: programme.impact06 },
          ],
          listContent: programme.relatedProgrammes.map(rp => ({
            title: rp.name,
            source: rp.slug,
            date: new Date(), // Assuming current date for simplicity, replace with actual date if available
          })),
          features: programme.features.length
            ? [{
                image: { imageUrl: programme.card.url },
                title: programme.features[0].name,
              }]
            : [],
        },
      },
    };
  }