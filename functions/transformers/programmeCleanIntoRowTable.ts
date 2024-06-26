import { CardHorizontalImageProps, FeatureCleanedFields, ProgrammeCleanedFields, RowData } from "@/app/interfaces";

export function mapProgrammeToRowData(programme: ProgrammeCleanedFields, features: FeatureCleanedFields[]): RowData {
  const mapSocialMediaLink = (name: string, url: string) => ({
    name: url ? name : 'no social',
    url: url || '',
  });
  const relatedFeatures = features.filter(feature => feature.programmeLabel.name === programme.name);

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
          logo: {   url: programme.logoSvgOriginalRatio.url , alt: programme.logoSvgLightOriginalRatio.alt},
          logoDark: {   url: programme.logoSvgLightOriginalRatio.url , alt: programme.logoSvgOriginalRatio.alt},
          button: { href: programme.website, text: programme.buttonText },
          headquarters: { data: { headquarters: [programme.headquartersEnglish].filter(Boolean) } },
          leadership: { data: { leadership: programme.leadership.map(leader => leader.name) } },
          "key initiatives": { data: { initiatives: programme.features.map(feature => feature.name) } },
          "key partners": { data: { partners: programme.partners.map(partner => partner.name) } },
          fullDescription: programme.text,
          socialMediaLinks: {
            instagram: mapSocialMediaLink('instagram', programme.instagram),
            youtube: mapSocialMediaLink('youtube', programme.youtube),
            linkedin: mapSocialMediaLink('linkedin', programme.linkedin),
            facebook: mapSocialMediaLink('facebook', programme.facebook),
            twitter: mapSocialMediaLink('twitter', programme.twitter),
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
          features: relatedFeatures.length
            ? relatedFeatures.map(feature => ({
                image: <CardHorizontalImageProps>{
                  imageUrl: feature.square.url,
                },
                title: feature.label,
              })  
            )
            : [],
        },
      },
    };
  }