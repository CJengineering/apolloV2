import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import TableRowSingle from "@/components/CJ-components/components-CJ/custom components/TableRowSIngle";
import EventCard from "@/components/custom beta components/EventCard";
import MainContainer from "@/components/custom beta components/MainContainer";
import NewsCard from "@/components/custom beta components/NewsCard";
import PostCard from "@/components/custom beta components/PostCard";
import { getData } from "@/functions/api/getData";
import filterRelatedAwards from "@/functions/filters/filterRelatedAwards";
import { filterRelatedEvents } from "@/functions/filters/filterRelatedEvents";
import filterRelatedFeatures from "@/functions/filters/filterRelatedFeatures";
import filterRelatedMultimedia from "@/functions/filters/filterRelatedMultimedia";
import { filterRelatedNews } from "@/functions/filters/filterRelatedNews";
import { filterRelatedPosts } from "@/functions/filters/filterRelatedPosts";
import filterRelatedPrizes from "@/functions/filters/filterRelatedPrizes";
import eventMapper from "@/functions/transformers/eventMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import { mapEventFieldDataToEventCard } from "@/functions/transformers/mapEventFieldToEventCard";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import { mapMultimediaToMediaCard } from "@/functions/transformers/multimediaToCardMultimedia";
import newsMapper from "@/functions/transformers/newsMapper";
import { newsToNewsCard } from "@/functions/transformers/newsToNewsCard";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import photoMapper from "@/functions/transformers/photoRawToLightBox";
import { mapProgrammeToCardProgramme } from "@/functions/transformers/porgrammeToCardProgramme";
import postMapper from "@/functions/transformers/postMapper";
import { postToPostCard } from "@/functions/transformers/postToPostCard";
import { mapProgrammeToRowData } from "@/functions/transformers/programmeCleanIntoRowTable";
import programmeMapper from "@/functions/transformers/programmeMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { get } from "http";
import { Divide } from "lucide-react";
import React from "react";
import Image from "next/image";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import { Button } from "@/components/CJ-components/components-CJ/Button";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";

export default async function jhtac2024graduation({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const peopleCollectionID = getIdByDisplayName("People");
  const programmeCollectionID = getIdByDisplayName("Programmes");
  const partnersCollectionID = getIdByDisplayName("Partners");
  const newsCollectionID = getIdByDisplayName("News");
  const eventsCollectionID = getIdByDisplayName("Events");
  const postsCollectionID = getIdByDisplayName("Posts");
  const multimediaCollectionID = getIdByDisplayName("Multimedia");
  const sourcesCollectionID = getIdByDisplayName("Sources");
  const featuresCollectionID = getIdByDisplayName("Features");
  const awardsCollectionID = getIdByDisplayName("Awards");
  const jobsCollectionID = getIdByDisplayName("Jobs");
  const photosCollectionID = getIdByDisplayName("Photos");
  const prizesCollectionID = getIdByDisplayName("Prizes");
  const categoryId = getIdByDisplayName("Categories");
  const tagId = getIdByDisplayName("Tags");

  {
    /**Get the data from the collection */
  }

  const programmesRawData = await getData(programmeCollectionID);
  const peopleRawData = await getData(peopleCollectionID);
  const partnersRawData = await getData(partnersCollectionID);
  const multimediaRawData = await getData(multimediaCollectionID);
  const postsRawData = await getData(postsCollectionID);
  const newsRawData = await getData(newsCollectionID);
  const eventsRawData = await getData(eventsCollectionID);
  const sourcesRawData = await getData(sourcesCollectionID);
  const featuresRawData = await getData(featuresCollectionID);
  const awardsRawData = await getData(awardsCollectionID);
  const jobsRawData = await getData(jobsCollectionID);
  const photosRawData = await getData(photosCollectionID);
  const prizesRawData = await getData(prizesCollectionID);
  const categoriesRawData = await getData(categoryId);
  const tagsRawData = await getData(tagId);

  {
    /**Get the single programme by id from webflow */
  }
  const jameelhousecairoId = "63440d3f2d8448b7438fc75d";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jameelhousecairoId
  );

  {
    /**Related collections in raw state  */
  }
  const relatedMultimedia = filterRelatedMultimedia(multimediaRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPost = filterRelatedPosts(postsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedNews = filterRelatedNews(newsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedEvents = filterRelatedEvents(eventsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedFeatures = filterRelatedFeatures(
    featuresRawData.items,
    singleProgramme.id
  );
  const relatedPrizes = filterRelatedPrizes(prizesRawData.items, {
    people: singleProgramme.id,
  });
  const relatedAwards = filterRelatedAwards(awardsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedJobs = filterRelatedAwards(jobsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPhotos = photosRawData.items;
  {
    /**Missing to add 
    prizes jobs people photos learns
    
    */
  }

  {
    /**Map the data  the related raw data into clean fields */
  }

  const cleanRelatedPosts = relatedPost.map((item) =>
    postMapper(
      item,
      categoriesRawData.items,
      eventsRawData.items,
      programmesRawData.items,
      peopleRawData.items
    )
  );
  const cleanRelatedEvents = relatedEvents.map((item) =>
    eventMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      peopleRawData.items
    )
  );
  const cleanedFeatures = relatedFeatures.map((item) =>
    featureMapper(item, programmesRawData.items)
  );
  const cleanedRelatedPhotos = relatedPhotos.map((item) =>
    photoMapper(item, programmesRawData.items, peopleRawData.items)
  );
  const cleanRelatedNews = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const cleanRelatedMultimedia = relatedMultimedia.map((item) =>
    multimediaMapper(
      item,
      programmesRawData.items,
      eventsRawData.items,
      sourcesRawData.items,
      peopleRawData.items
    )
  );
  {
    /**Clean Individual Programme */
  }
  const cleanSingleProgramme = programmeMapper(
    singleProgramme,
    peopleRawData.items,
    partnersRawData.items,
    programmesRawData.items
  );

  {
    /*map in to interface of different compoenents   */
  }

  const multimediaProps = cleanRelatedMultimedia.map(mapMultimediaToMediaCard);
  const newsProps: any[] = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const postProps = cleanRelatedPosts;
  const eventProps = cleanRelatedEvents.map(mapEventFieldDataToEventCard);

  const dataForRow = mapProgrammeToRowData(
    cleanSingleProgramme,
    cleanedFeatures
  );

  return (
    <>
      <div className="pt-20 lg:pt-12">
        <div className="flex flex-col text-left">
          <div className="">
            <h1 className="header-article w-2/3">
              <span className="font-bold">2024 Graduation Collection:</span>{" "}
              Jameel House of Traditional Arts in Cairo
            </h1>
          </div>

          <div className="mt-6">
            <p className="prose prose-xl leading-normal dark:text-white mb-5">
              The Jameel House of Traditional Arts in Cairo continues to impress
              with the outstanding work of its students, especially the 2024
              graduating class. The programme, established in 2009 in
              collaboration with The King’s Foundation School of Traditional
              Arts, Community Jameel, and the Egyptian Ministry of Culture,
              offers intensive training in traditional arts and crafts.
            </p>
            
            <p className="prose prose-xl leading-normal dark:text-white mb-5">
              This year introduced traditional joinery, known as gamiya, as a
              new specialisation alongside existing woodwork techniques like
              inlay, carving, and wood turning. Students also explored brasswork
              techniques for the first time.
            </p>
           
            <p className="prose prose-xl leading-normal dark:text-white mb-5">
              Inspired by Islamic art from Cairo, Iran, and Central Asia, the
              class of 2024 produced intricate mangour screens, mother-of-pearl
              and bone-inlaid furniture, and carved wooden pieces. Their works
              form a stunning collection of furniture and home accessories.
            </p>
            <p className="prose prose-xl leading-normal dark:text-white mb-5">
              Students in ceramics, metalwork, and gypsum carving also
              contributed remarkable pieces, creating a harmonious collection
              that showcases the richness of Egyptian craft.
            </p>
            
            <div>
              <p className="prose prose-xl font-medium leading-normal dark:text-white">
                Mamdouh Sakr
              </p>
              <p className="prose leading-normal dark:text-white">
                Programme Manager
              </p>
              <p className="prose leading-normal dark:text-white">
                The Jameel House of Traditional Arts in Cairo
              </p>
            </div>

            <div className="my-6 ">
              <ButtonCJ
                text="Download PDF version"
                href="/documents/jameel-house-cairo-catalogue-2024/JameelHouseCatalogue2024_PDF_WEB_LOW.pdf"
                styleType="secondary"
              />
            </div>
          </div>
        </div>
        <div className="w-full pt-3 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Hagar Al Hariri</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/01_hagar-al-hariri/hagar-al-hariri_01.webp"
                alt="Amera Negm"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full  lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Mirror frame</p>
                <p className="text-xl italic">176 x 71 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  This mirror frame serves as a tangible representation of
                  growth and transformation. It is a piece that can be proudly
                  displayed, not just for its functional beauty, but for the
                  profound meaning it carries—a reminder of achievements made
                  and the endless possibilities that lie ahead in the graduate’s
                  future endeavours.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  The mirror itself, nestled within the warm embrace of the
                  wooden frame, offers a clear reflection that invites you to
                  gaze into its depths. It is not just a functional piece but a
                  work of art that enhances any room it graces.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  Whether hung in a cosy living room, a serene bedroom or a
                  rustic hallway, it becomes a focal point, drawing admiration
                  and sparking conversations about its origins and the talent
                  behind its creation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Esraa Badawy</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/02_esraa-badawy/esraa-badawy-01.webp"
                alt="Amira Khaled - Three of Life"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Cuerda seca blue and turquoise ceramic wall panely
                </p>
                <p className="text-xl italic">55 x 55 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white">
                  A panel inspired by the Qur’an of Sultan Baybars Al-Jashankir,
                  one of the most important Qur’ans of the Mamluk era.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6"></div>

          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/02_esraa-badawy/esraa-badawy-02.webp"
                alt="Amera Negm"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Painted ceramic plate</p>
                <p className="text-xl italic">37cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The work is inspired by a painted plate representing the
                  twelve zodiac signs made in 16th-century Iran.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Fatma Badawy</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/13_fatma-badawy/fatma-badawy_01.webp"
                alt="Heba Amin - Brass box"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Wooden side table in traditional Mamluk style
                </p>
                <p className="text-xl italic">64 x 45 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The beechwood side table is hexagonal in shape, inspired by a
                  Mamluk-style dining chair and the Minbar of Al-Ghouri Mosque
                  in Cairo.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  At the top and bottom of the table, there are small inlaid
                  pieces of bone and ebony in the form of hexagonal stars. The
                  tabletop is also composed of inlaid bone and ebony in the same
                  geometric pattern as the side elements.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Nermeen Badawy</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/03_nermeen-badawi/nermeen-badawi-01.webp"
                alt="Heba Amin - Brass box"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Ibn Tulun mirror frame</p>
                <p className="text-xl italic">108 x 66 x 13 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The design of the mirror frame was inspired by the soffits of
                  the multiple arches that surround the large courtyard in the
                  Ahmad ibn Tulun Mosque, which are decorated with a wide
                  variety of patterns.
                </p>
                <p className="prose leading-normal dark:text-white mb-5">
                  At the top and bottom of the table, there are small inlaid
                  pieces of bone and ebony in the form of hexagonal stars. The
                  tabletop is also composed of inlaid bone and ebony in the same
                  geometric pattern as the side elements.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Bassant Darwish</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_02.webp"
                alt="Bassant Darwish - Iznik earthenware plate"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Iznik earthenware plate</p>
                <p className="text-xl italic">35 cm diameter</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The slender, looped motifs at the centre of the decoration on
                  this Iznik earthenware plate are derived from depictions of
                  clouds in Chinese art. These features are typical of ceramics
                  made in Iznik in the early 16th century.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  The design was based on the highly stylised plant forms, knots
                  and other patterns favoured by the Ottoman court.
                </p>
              </div>
            </div>
          </div>

          <div className="py-6"></div>

          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_01.webp"
                alt="Bassant Darwish - Tea set"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Tea set</p>
                <p className="text-xl italic">10 cm diameter</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  A tea set inspired by nature using the stamp technique.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6"></div>

          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_03.webp"
                alt="Bassant Darwish - Ancient manuscript ceramic tile panel"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Ancient manuscript ceramic tile panel
                </p>
                <p className="text-xl italic">60 x 45 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  This ceramic tile panel takes inspiration from a cherished
                  Moroccan Qur’an frontispiece from the Saadi dynasty era (16th
                  – 17th century). The design features a lush, symmetrical
                  arrangement of stylised foliage, with curling, flat, rounded
                  and pointed leaves springing from a central stem. At the
                  centre, the overlapping leaves coalesce into an elegant
                  eight-pointed star motif, creating a geometric focal point
                  amidst the organic forms. The vibrant oxide pigments and dyes
                  result in a rich, harmonious palette that brings the botanical
                  elements to life, capturing the masterful craftsmanship and
                  artistic sensibilities of the Saadi period.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Alia El Garhy</h2>
          </div>

          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/07_alia-el-garhy/alia-el-garhy_01.webp"
                alt="Alia El Garhy"
                width={1600}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Hexagonal <span className="italic">kündekari</span> panel
                </p>
                <p className="text-xl italic">44.5 x 77.2 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  This kündekari panel with hexagonal pattern is made of 183
                  pieces. It is an exquisite example of intricate woodcraft,
                  showcasing mastery and precision of this traditional art.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  Each piece of the panel is meticulously cut and fitted
                  together without the use of nails or adhesives, demonstrating
                  the high level of skill and craftsmanship involved.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  The interlocking design not only ensures durability but also
                  reflects the rich cultural heritage and artistic traditions
                  from which kündekari originated.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  Used as a decorative wall piece element, this panel stands as
                  a testament to the timeless beauty and complexity of
                  traditional woodworking techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Amira El Kadi</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/05_amira-el-kadi/amira-el-kadi_01.webp"
                alt="Amira El Kadi - Koutoubia box"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Koutoubia shakmagiya box</p>
                <p className="text-xl italic">40 x 26.6 x 13.3 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The decorations of this box are inspired by the pulpit of the
                  Koutoubia Mosque in Marrakesh, considered one of the most
                  remarkable works ever created by Islamic artisans. The
                  construction began around AD 1137 in Córdoba, the centre of
                  Andalusian arts and literature, under the orders of the last
                  Almoravid sultan, Ali Ibn Yusuf. After its completion around
                  1143, the pulpit was shipped in pieces from Córdoba and
                  reassembled in Marrakesh. The pulpit’s decorative scheme—
                  featuring intricately carved wooden panels, bone-inlaid floral
                  motifs, and a combination of various types of reddish-brown
                  and dark brown (African blackwood) wood—covers its surface in
                  a brilliant and stunning manner. This inspired the artist to
                  use a variety of materials and harmonious colours to design
                  this special jewellery box.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  Wood inlay was one of the many techniques mastered by the
                  carpenters of Al-Andalus, where small pieces of different
                  materials were assembled to create specific patterns,
                  particularly on wooden boxes and cabinets. This mahogany box
                  is inlaid with various types of wood, including ebony and
                  beech, in addition to bone and yellow copper wire, to create
                  floral decorations inspired by those found on the staircase of
                  the Koutoubia Mosque pulpit.
                </p>
              </div>
            </div>
          </div>

          <div className="py-6"></div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Noha El Nady</h2>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/labs/jameel-house-cairo/2024-catalogue/10_noha-el-nady/noha-elnady_01.webp"
            alt="Noha El Nady Jali glass window"
            width={1600}
            height={600}
          />
        </div>
        <div>
          <div className="pt-6 pb-3">
            <p className="text-2xl">Jali glass window</p>
            <p className="text-xl italic">30.5 x 75.5 cm</p>
          </div>
          <p className="prose leading-normal dark:text-white mb-5">
            Inspired by a decorative door in Cairo’s Gayer-Anderson Museum,
            three different joinery techniques were used to create this window:
            the kumiko technique, inspired by Japanese crafts; the Abu Janzir
            technique, inspired by the Khanaqah of Faraj ibn Barquq Mosque; and
            the Iranian kündekari technique, which uses coloured glass as
            fillings.
          </p>
        </div>

        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Sara El Sayed</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/06_sara-el-sayed/sara-el-sayed_01.webp"
                alt="Sara El Sayed - Camel bone inlaid turnings and carved beechwood side table"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Camel bone inlaid turnings and carved beechwood side table
                </p>
                <p className="text-xl italic">43 x 43 x 60 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  A side table inspired by the Minbar of Saladin in Al-Aqsa
                  Mosque in Jerusalem. The intricacy of the inlay work and
                  carving are remarkable.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

       {/* STUDENT START */}

<div>
  <div>
    <h2 className="header-section pb-6">Rawan El Taweel</h2>
  </div>
</div>
<div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-7/12">
    <Image
      src="/images/labs/jameel-house-cairo/2024-catalogue/09_rawan-el-taweel/rawan-el-taweel_01.webp"
      alt="Rawan El Taweel - Bunchberry mangour cabinet"
      width={1600}
      height={600}
    />
  </div>
  <div className="w-full lg:w-5/12 lg:ml-6">
    <div className="pt-6 lg:pt-0 pb-3">
      <p className="text-2xl">
        Bunchberry-<span className="italic">mangour</span> cabinet
      </p>
      <p className="text-xl italic">92 x 46 x 26 cm</p>
    </div>
    <p className="prose leading-normal dark:text-white mb-5">
      This wall cabinet combines traditional mangour craftwork and
      decorations of tiny arquette flowers, similar to bunchberry
      flowers, fitted within the mangour negative space without using
      nails, screws or glue.
    </p>

    <p className="prose leading-normal dark:text-white mb-5">
      The two carved arches bearing floral ornaments are made of
      mahogany wood.
    </p>
  </div>
</div>
{/* STUDENT END */}
        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Hagar Etman</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/10_hager-etman/hager-etman_01.webp"
                alt="Mohamed ElShamy - Panel"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Mangour wood partition design</p>
                <p className="text-xl italic">140 x 72 x 3 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  Mangour is an architectural element made of wooden
                  latticework, a square grid that expands and contracts in
                  specific ways to express four- and eight-fold symmetry in the
                  negative space.
                </p>
                <p className="prose leading-normal dark:text-white mb-5">
                  The mangour interlocking system holds the pieces together
                  without the use of nails or glue. When formed, it creates a
                  net-like veil between physical spaces. Its main function in
                  architecture is to ensure air and light circulation, while
                  maintaining privacy. The elements of mangour can easily be
                  taken apart, transported and re-assembled.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Doaa Fathy</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/11_doaa-fathy/doaa-fathy_01.webp"
                alt="Doaa Fathy - Panel inspired by the Minbar of Saladin"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Panel inspired by the Minbar of Saladin
                </p>
                <p className="text-xl italic">42 cm diameter</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  The project is a panel inspired by one of the units found on
                  Saladin’s pulpit (minbar) in Al-Aqsa Mosque in Jerusalem. The
                  geometric network of the panel consists of a decagonal
                  pattern. The project was executed using the inlay technique on
                  a beechwood surface and uses mahogany, ebony and bone.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Wessam Ghanim</h2>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/labs/jameel-house-cairo/2024-catalogue/12_wesam-ghanim/wesam-ghanim.webp"
            alt="Wessam Ghanim -  Engraved brass serving tray with dome shaped lid"
            width={1600}
            height={600}
          />
        </div>
        <div>
          <div className="pt-6 pb-3">
            <p className="text-2xl">
              Engraved brass serving tray with dome shaped lid
            </p>
            <p className="text-xl italic">11 x 30 x 38 cm</p>
          </div>
          <p className="prose leading-normal dark:text-white mb-5">
            This brass tray’s pattern was inspired by a brass bowl inlaid with
            silver, originating from 15th-century Mamluk-era Damascus, which is
            located in the Metropolitan Museum of Art, New York.
          </p>
        </div>

        {/* STUDENT END */}
        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Somaya Wael Ismail</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/14_somaya-wael-ismail/somaya-wael-ismail_01.webp"
                alt="Somaya Wael Ismail - Al-Maridani wall appliqué"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Al-Maridani wall appliqué</p>
                <p className="text-xl italic">30 x 15 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  This brass wall appliqué is crafted with engraved and
                  intricately cut brass. The piece radiates a warm glow, while
                  casting a reflection influenced by the architecture of the
                  mihrab (niche indicating the direction of prayer) in
                  Al-Maridani Mosque in Al-Darb Al-Ahmar in Cairo.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/14_somaya-wael-ismail/somaya-wael-ismail_02.webp"
                alt="Somaya Wael Ismail - Al-Maridani wall appliqué"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Al-Maridani wall appliqué</p>
                <p className="text-xl italic">30 x 15 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  This brass wall appliqué is crafted with engraved and
                  intricately cut brass. The piece radiates a warm glow, while
                  casting a reflection influenced by the architecture of the
                  mihrab (niche indicating the direction of prayer) in
                  Al-Maridani Mosque in Al-Darb Al-Ahmar in Cairo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Lydia Malak</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/15_lydia-malak/lydia-malak_01.webp"
                alt="Lydia Malak - ‘Cypress trees’ gypsum panel for prayer room"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  ‘Cypress trees’ gypsum panel for prayer room
                </p>
                <p className="text-xl italic">100 x 50 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  A cypress tree panel inspired by a unique minbar (pulpit) made
                  in AD 1360 by Hassan Ibn Suleiman al-Isfahani. In the centre,
                  a cypress tree is carved into a prayer niche.
                </p>

                <p className="prose leading-normal dark:text-white mb-5">
                  Cypress trees are a symbol of eternal life and death in
                  Islamic arts. One can also see a relief carving of flowers
                  above the niche and rumi leaves on the interior. The gypsum
                  panel is specially made for a prayer room.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/15_lydia-malak/lydia-malak_02.webp"
                alt="Lydia Malak - ‘Birds from the past’ fresco"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">‘Birds from the past’ fresco</p>
                <p className="text-xl italic">30 x 30 cm</p>
              </div>
              <div>
                <p className="prose leading-normal dark:text-white mb-5">
                  Birds from the past’ is inspired by the Tomb of Nebamun, circa
                  1350 BC, at the British Museum.
                </p>
                <p className="prose leading-normal dark:text-white mb-5">
                  Tomb paintings served as visual narratives of spiritual
                  beliefs and cultural practices, ensuring the continuity of
                  memory and tradition in the ancient Egyptian quest for
                  immortality.
                </p>
                <p className="prose leading-normal dark:text-white mb-5">
                  The fresco technique was employed with fresh lime, natural
                  pigments and water to ensure durability over the years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Sara Meghani</h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12">
            <Image
              src="/images/labs/jameel-house-cairo/2024-catalogue/16_sara-meghani/sara-meghani_01.webp"
              alt="Sara Meghani - ‘Words of wisdom’ vase"
              width={1000}
              height={600}
            />
          </div>
          <div className="lg:pl-6 lg:w-5/12">
            <div className="pt-6 lg:pt-0 pb-3">
              <p className="text-2xl">‘Words of wisdom’ vase</p>
              <p className="text-xl italic">8.3 x 17.5 x 8.3 cm</p>
            </div>
            <p className="prose leading-normal dark:text-white mb-5">
              ‘Words of wisdom’ is a brass vase inspired by the elegance of 16th
              century Iranian crafts.
              <p className="prose leading-normal dark:text-white mb-5"></p>
              Engraved with the wise words of the sage Ibn Ata Allah
              al-Iskandari, it says:
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <span className="italic">
                “Bury your existence in the earth of obscurity, for whatever
                sprouts forth, without having first been buried, flowers
                imperfectly.”
              </span>
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              The flowers that bloom in this vase represent the beauty that
              comes from humble beginnings. The intricate engravings invite you
              to reflect, blending the solid feel of brass with the timeless
              beauty of this message. This vase is not just a vessel; it shows
              the wisdom that true merit comes from humility.
            </p>
          </div>
        </div>
        <div className="py-6"></div>
        <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12">
          <Image
            src="/images/labs/jameel-house-cairo/2024-catalogue/16_sara-meghani/sara-meghani_02.webp"
            alt="Sara Meghani - ‘Elegance’ potpourri bowl"
            width={1600}
            height={600}
          />
          </div>
          <div className="w-full lg:w-5/12 lg:ml-6">
            <div className="pt-6 lg:pt-0 pb-3">
              <p className="text-2xl">‘Elegance’ potpourri bowl</p>
              <p className="text-xl italic">15 x 21 x 15 cm</p>
            </div>
            <p className="prose leading-normal dark:text-white mb-5">
              ‘Elegance’ is a medium-sized bowl that combines beauty and
              function. Inspired by Persian serving dishes, it features royal
              dark blue and turquoise hues. Perfect for holding scented
              potpourri or treats, this bowl is a visual delight, invoking the
              grandeur of an era when art and utility were one.
            </p>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Rana Meligui</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/17_rana-meligui/rana_meligui_01.webp"
                alt="Rana Meligui - Carved wooden wall mirror frame with embossed brass details"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Carved wooden wall mirror frame with embossed brass details
                </p>
                <p className="text-xl italic">120 x 50 cm</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A decorative mirror made of wood and embossed brass inspired
                  by the entrance door of the Mosque of Sultan Barquq and the
                  Complex of Sultan al-Mansur Qalawun in Historic Cairo.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Gamila Mourad</h2>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/labs/jameel-house-cairo/2024-catalogue/18_gamila-mourad/gamila-moura_01.webp"
            alt="Gamila Mourad -  Lunar phases brass wall art"
            width={1600}
            height={600}
          />
        </div>
        <div>
          <div className="pt-6 pb-3">
            <p className="text-2xl">Lunar phases brass wall art</p>
            <p className="text-xl italic">55 cm diameter</p>
          </div>
          <p className="prose leading-normal dark:text-white mb-5">
            Inspired by Sayyid Al-Laali’s exquisite lunar calendar, gifted to
            Sultan Selim II from Shiraz, Iran, in 1566, this brass wall panel
            captures the timeless beauty of lunar Islamic calendars.
            Meticulously crafted using various traditional brass techniques,
            such as engraving and cavity making, this work features Moorish
            scripts for a Qur’an verse describing the different phases of the
            moon.
          </p>
        </div>

        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* STUDENT START */}

        <div>
          <div>
            <h2 className="header-section pb-6">Areej Niazy</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/19_areeg-niazy/areeg-niazy_01.webp"
                alt="Areej Niazy - Brass polyhedron lighting unit with a Moroccan-Andalusian pattern"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">
                  Brass polyhedron lighting unit with a Moroccan-Andalusian
                  pattern
                </p>
                <p className="text-xl italic">104 x 13 x 14 cm</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  This visually striking brass piece is inspired by a snub cube,
                  the geometric structure with 38 faces: six squares and 32
                  triangles. This polyhedron serves as the foundation for a
                  unique lighting unit that blends modern design with
                  traditional Moroccan-Andalusian patterns. The snub cube
                  belongs to a family of Archimedean solids, known for their
                  symmetrical beauty and mathematical precision. This
                  arrangement showcases mathematical elegance. The use of
                  geometric shapes and rosette patterns reflects a deeper
                  exploration of symmetry and form, typical of both classical
                  geometry and Islamic art traditions. The interplay of light
                  and shadow on the polyhedral surfaces further accentuates its
                  geometric intricacies, creating a captivating visual
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STUDENT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        <div className="sans-serif font-bold text-4xl">Heritage projects</div>
        <div className="py-6"></div>

        <p className="prose prose-xl leading-normal dark:text-white mb-5">
          We believe that our students are fortunate to live in Cairo, a city
          with numerous monuments and museums. These glorious buildings serve as
          a profound source of inspiration. Every year, we select one of Cairo’s
          renowned monuments and ask our students to create artistic replicas of
          selected artworks that correspond to the crafts that they have been
          studying. The importance of the heritage project lies in its role as a
          transitional phase between classwork and the graduation project. The
          heritage project provides students with the opportunity to understand
          the mechanics of manufacturing processes, which include teamwork, time
          management and the crucial phases of experimentation and testing.
          Engaging in such a project makes students more confident in thinking
          about and designing their own pieces for their graduation projects.
        </p>
        <p className="prose prose-xl leading-normal dark:text-white mb-5">
          Over the years, we have examined and worked on an extensive list of
          monuments, which includes Al-Maridani Mosque, Sultan Barquq Mosque,
          Tikkyat Al-Gulshani, Bayt Zeinab Khatoun, the Museum of Islamic Art
          and the Coptic Museum. This year, the Gayer-Anderson Museum was also
          selected as a source of inspiration for our students.
        </p>
        <p className="prose prose-xl leading-normal dark:text-white mb-5">
          The Gayer-Anderson Museum, also known as Bayt Al-Krietiliya, is a 17th
          century house in Cairo’s Sayyida Zeinab neighbourhood that epitomises
          the richness and complexity of Cairene traditional architecture.
          Moreover, it houses a vast collection of antiques from different parts
          of the Islamic world, collected by Robert Grenville Gayer-Anderson, a
          British Army major and former Oriental Secretary to the High
          Commissioner in Cairo, who resided in Egypt between 1912-1942.
        </p>
        <p className="prose prose-xl leading-normal dark:text-white mb-5">
          The museum contains numerous art pieces that provide inspiration to
          our students. Although the selection process was not easy, we
          succeeded in finding art pieces that were both aesthetically appealing
          and relevant to the skills of the students. From the museum’s large
          collection of ceramic tile panels, two panels were selected that
          represented contrasting artistic themes. For the traditional joinery
          students, a cupboard leaf with intricate geometric patterns was
          chosen, while a beautiful box with inlay work was selected for the
          decorative techniques group. For the metalwork students, we selected a
          large brass tray covered with floral patterns and Qur’anic
          inscriptions, along with a chandelier. Lastly, for the gypsum carving
          group, a beautiful window grille was taken as inspiration, for its
          floral motifs that were popular in Cairo during the Ottoman period.
        </p>
        <div>
          <p className="prose prose-xl font-medium leading-normal dark:text-white">
            Mamdouh Sakr
          </p>
          <p className="prose leading-normal dark:text-white">
            Programme Manager
          </p>
          <p className="prose leading-normal dark:text-white">
            The Jameel House of Traditional Arts in Cairo
          </p>
        </div>

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
          <div className="w-3/5">
            <h2 className="header-section pb-6">
              Fatma Badawy, Alia El Garhy, Noha El Nady Rawan El Taweel, and
              Ashraf Salloum
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-wooden-cabinet-panel/heritage-wooden-cabinet-panel_01.webp"
                alt="Wooden cabinet panel"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Wooden cabinet panel</p>
                <p className="text-xl italic">170 x 30 cm, 100 pieces</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A replica panel of a wooden door of a cabinet in Cairo’s
                  Gayer-Anderson Museum, dating back to the Ottoman era. Crafted
                  using traditional joinery techniques, it features a network of
                  eight-fold rosettes with interstitial spaces that showcase the
                  unique complexity of the design. The panel is carved and
                  assembled without the use of glue or nails, highlighting the
                  precise craftsmanship of the period.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
        <div className="w-3/5">
            <h2 className="header-section pb-6">
              Wessam Ghanim, Sara Meghani, Gamila Mourad, Areej Niazy, and
              Somaya Wael Ismail
            </h2>
          </div>
          <div className="w-full">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-brass-tray/heritage-brass-tray_01.webp"
                alt="Engraved brass tray"
                width={1600}
                height={600}
              />
            </div>
            <div className="">
              <div className="pt-6 lg:pt-6 pb-3">
                <p className="text-2xl">Engraved brass tray</p>
                <p className="text-xl italic">100 cm diameter</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A replica of a brass tray from the Gayer-Anderson Museum,
                  Cairo, this piece features a Qur’anic verse written in Mamluk
                  Thuluth script with intricate floral patterns, created using
                  the traditional techniques of brass engraving, turning and
                  oxidisation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
        <div className="w-3/5">
            <h2 className="header-section pb-6">
              Hager Al Hariri, Nermeen Badawy, Sara El Sayed and Rana Meligui
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-carved-wooden-panel/heritage-carved-wooden-panel_01.webp"
                alt="Carved wooden panels"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Carved wooden panels</p>
                <p className="text-xl italic">104 x 13 x 14 cm</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  Two wooden panels, intricately carved with floral designs, are
                  replicas of the doors of a wooden cabinet from Cairo’s
                  Gayer-Anderson Museum, crafted using traditional woodcarving
                  techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
        <div className="w-3/5">
            <h2 className="header-section pb-6">
              Wessam Ghaniem, Sara Meghani, Gamila Mourad, Areej Niazy and
              Somaya Wael Ismail
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-chandelier/heritage_chandelier_01.webp"
                alt="Brass chandelier"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Brass chandelier</p>
                <p className="text-xl italic">60 cm diameter</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A replica of a piece found in the Gayer-Anderson Museum,
                  Cairo, this brass chandelier is expertly crafted using
                  traditional techniques. The creation process includes brass
                  sawing, intricate engraving, welding and oxidisation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
        <div className="w-3/5">
            <h2 className="header-section pb-6">
              Hager Etman, Amira El Kadi and Doaa Fathy
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-wooden-box/heritage-wooden-box_01.webp"
                alt="Inlaid wooden box"
                width={1000}
                height={600}
              />
            </div>
            <div className="w-full lg:w-5/12 lg:ml-6">
              <div className="pt-6 lg:pt-0 pb-3">
                <p className="text-2xl">Inlaid wooden box</p>
                <p className="text-xl italic">25 x 34.5 x 20 cm</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A replica of an antique wooden box from the Gayer-Anderson
                  Museum, inlaid with camel bone.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}

        {/* DIVIDER START */}
        <div className="w-full pt-16 pb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* DIVIDER END*/}

        {/* HERITAGE PROJECT START */}

        <div>
        <div className="w-3/5">
            <h2 className="header-section pb-6">
              Hager Etman, Amira El Kadi and Doaa Fathy
            </h2>
          </div>
          <div className="">
            <div className="w-full">
              <Image
                src="/images/labs/jameel-house-cairo/2024-catalogue/heritage-ceramic-panel/hertiage-ceramic-panel_01.webp"
                alt="Ceramic panel"
                width={1600}
                height={600}
              />
            </div>
            <div className="">
              <div className="pt-6 pb-3">
                <p className="text-2xl">Esraa Badawy and Bassant Darwish</p>
                <p className="text-xl italic">45 x 45 cm</p>
              </div>
              <div className="">
                <p className="prose leading-normal dark:text-white mb-5">
                  A replica panel of Damascus tiles in the Gayer-Anderson
                  Museum, Cairo, dating back to the 17th century. It features
                  the names of Allah, the prophet Mohammad and the
                  rightly-guided caliphs, amidst distinctive floral decorations
                  executed using the underglaze painting technique.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* HERITAGE PROJECT END */}
      </div>
    </>
  );
}
