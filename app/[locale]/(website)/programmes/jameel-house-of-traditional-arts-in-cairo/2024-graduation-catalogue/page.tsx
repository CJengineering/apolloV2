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
   < >
      <div className="pt-10">

<div className="flex flex-col text-left">
           
<div className="">
<h1 className="header-article w-2/3"><span className="font-bold">2024 Graduation Catalogue:</span> <br></br>
Jameel House of Traditional Arts in Cairo</h1>
</div>

<div className="py-6">
<p className="prose prose-xl leading-normal dark:text-white">The Jameel House of Traditional Arts in Cairo continues to impress with the outstanding work of its students, especially the 2024 graduating class. The programme, established in 2009 in collaboration with The King’s Foundation School of Traditional Arts, Community Jameel, and the Egyptian Ministry of Culture, offers intensive training in traditional arts and crafts.
</p><br/>
<p className="prose prose-xl leading-normal dark:text-white">This year introduced traditional joinery, known as gamiya, as a new specialisation alongside existing woodwork techniques like inlay, carving, and wood turning. Students also explored brasswork techniques for the first time.
</p><br/>
<p className="prose prose-xl leading-normal dark:text-white">Inspired by Islamic art from Cairo, Iran, and Central Asia, the class of 2024 produced intricate mangour screens, mother-of-pearl and bone-inlaid furniture, and carved wooden pieces. Their works form a stunning collection of furniture and home accessories.
</p><br/>
<p className="prose prose-xl leading-normal dark:text-white">Students in ceramics, metalwork, and gypsum carving also contributed remarkable pieces, creating a harmonious collection that showcases the richness of Egyptian craft.
</p><br/>
<p className="prose leading-normal dark:text-white">Mamdouh Sakr
</p>
<p className="prose leading-normal dark:text-white">Programme Manager
</p>
<p className="prose leading-normal dark:text-white">The Jameel House of Traditional Arts in Cairo
</p>

</div>
</div>
<div className="w-full pt-3 pb-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
  
 {/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Hagar Al Hariri</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/01_hagar-al-hariri/hagar-al-hariri_01.webp" alt="Amera Negm" width={1000} height={600} />
  </div>
  <div className="lg:lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Mirror frame</p>
    <p className="text-xl italic">176 x 71 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
This mirror frame serves as a tangible representation of growth
and transformation. It is a piece that can be proudly displayed,
not just for its functional beauty, but for the profound meaning
it carries—a reminder of achievements made and the endless
possibilities that lie ahead in the graduate’s future endeavours.</p>
<br></br>
<p className="prose leading-normal dark:text-white">
The mirror itself, nestled within the warm embrace of the
wooden frame, offers a clear reflection that invites you to gaze
into its depths. It is not just a functional piece but a work of art
that enhances any room it graces.</p>
<br></br>
<p className="prose leading-normal dark:text-white">
Whether hung in a cosy living room, a serene bedroom or a
rustic hallway, it becomes a focal point, drawing admiration and
sparking conversations about its origins and the talent behind its
creation.</p>
</div>
</div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Esraa Badawy</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/02_esraa-badawy/esraa-badawy-01.webp" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Cuerda seca blue and turquoise ceramic wall panely</p>
    <p className="text-xl italic">55 x 55 cm</p>
    </div>
<div><p className="prose  leading-normal dark:text-white">
A panel inspired by the Qur’an of Sultan Baybars Al-Jashankir,
one of the most important Qur’ans of the Mamluk era.</p>
</div>
  </div>
</div>
<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
<div className="">
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/02_esraa-badawy/esraa-badawy-02.webp" alt="Amera Negm" width={1000} height={600} />
  </div>
<div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Painted ceramic plate</p>
    <p className="text-xl italic">37cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
The work is inspired by a painted plate representing the twelve zodiac signs made in 16th-century Iran.</p>
</div>
</div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Fatma Badawy</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/13_fatma-badawy/fatma-badawy_01.webp" alt="Heba Amin - Brass box" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Wooden side table in traditional Mamluk style</p>
    <p className="text-xl italic">64 x 45 cm</p>
    </div>
<div>
<p className="prose leading-normal dark:text-white">
The beechwood side table is hexagonal in shape, inspired by a Mamluk-style
dining chair and the Minbar of Al-Ghouri Mosque in Cairo.</p><br></br>
<p className="prose leading-normal dark:text-white">
At the top and bottom of the table, there are small inlaid pieces of bone and
ebony in the form of hexagonal stars. The tabletop is also composed of inlaid
bone and ebony in the same geometric pattern as the side elements.</p>
</div>
  </div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Nermeen Badawy</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/03_nermeen-badawi/nermeen-badawi-01.webp" alt="Heba Amin - Brass box" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Ibn Tulun mirror frame</p>
    <p className="text-xl italic">108 x 66 x 13 cm</p>
    </div>
<div>
<p className="prose leading-normal dark:text-white">
The design of the mirror frame was inspired by the soffits of
the multiple arches that surround the large courtyard in the
Ahmad ibn Tulun Mosque, which are decorated with a wide
variety of patterns.</p>
<p className="prose leading-normal dark:text-white">
At the top and bottom of the table, there are small inlaid pieces of bone and
ebony in the form of hexagonal stars. The tabletop is also composed of inlaid
bone and ebony in the same geometric pattern as the side elements.</p>
</div>
  </div>
</div>
</div>
{/* STUDENT END */}


{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Bassant Darwish</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_02.webp" alt="Bassant Darwish - Iznik earthenware plate" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Iznik earthenware plate</p>
    <p className="text-xl italic">35 cm diameter</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
The slender, looped motifs at the
centre of the decoration on this Iznik
earthenware plate are derived from
depictions of clouds in Chinese art. These
features are typical of ceramics made in
Iznik in the early 16th century.</p>
<p className="prose leading-normal dark:text-white">
The design was based on the highly
stylised plant forms, knots and other
patterns favoured by the Ottoman court.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_01.webp" alt="Bassant Darwish - Tea set" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Tea set</p>
    <p className="text-xl italic">10 cm diameter</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
A tea set inspired by nature using the stamp technique.</p>
</div>
  </div>
</div>
<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/04_bassant-darwish/bassant-darwish_03.webp" alt="Bassant Darwish - Ancient manuscript ceramic tile panel" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Ancient manuscript ceramic tile panel</p>
    <p className="text-xl italic">60 x 45 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
This ceramic tile panel takes inspiration from a cherished Moroccan Qur’an frontispiece
from the Saadi dynasty era (16th – 17th century). The design features a lush, symmetrical
arrangement of stylised foliage, with curling, flat, rounded and pointed leaves springing from a
central stem. At the centre, the overlapping leaves coalesce into an elegant eight-pointed star
motif, creating a geometric focal point amidst the organic forms. The vibrant oxide pigments
and dyes result in a rich, harmonious palette that brings the botanical elements to life,
capturing the masterful craftsmanship and artistic sensibilities of the Saadi period.</p>
</div>
  </div>
</div>

</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Alia El Garhy</h2></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
  <Image src="/images/labs/jameel-house-cairo/2024-catalogue/07_alia-el-garhy/alia-el-garhy_01.webp" alt="Alia El Garhy" width={1600} height={600} />  
  </div>
  <div className="lg:ml-6">
    
  <div className="pt-6 pb-3">
    <p className="text-2xl">Hexagonal <span className="italic">kündekari</span> panel</p>
    <p className="text-xl italic">44.5 x 77.2 cm</p>
    </div>
<div>
<p className="prose leading-normal dark:text-white">
This kündekari panel with hexagonal pattern is made of 183 pieces. It is an exquisite example of intricate
woodcraft, showcasing mastery and precision of this traditional art.</p>
<p className="prose leading-normal dark:text-white">
Each piece of the panel is meticulously cut and fitted together without the use of nails or adhesives,
demonstrating the high level of skill and craftsmanship involved.</p>
<p className="prose leading-normal dark:text-white">
The interlocking design not only ensures durability but also reflects the rich cultural heritage and artistic
traditions from which kündekari originated.</p>
<p className="prose leading-normal dark:text-white">
Used as a decorative wall piece element, this panel stands as a testament to the timeless beauty and complexity
of traditional woodworking techniques.</p>
</div>
  </div>
</div>
</div>
{/* STUDENT END */}


{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Sara El Sayed</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/hany-el-deeb/hany-el-deeb-01.jpg" alt="Amira Mohammed - Plate" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">35 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
The first of its kind in Egypt, this project is inspired by the
feather of Al-Ghamri’s pulpit located in the al-Ashraf Barsbay
Khanqa in the Desert of the Mamluks in Cairo.
</p><br></br>
<p className="prose leading-normal dark:text-white">
Made of mahogany wood inlaid with ebony and brass work,
it uses the zincograph technique.</p>
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
{ /* DIVIDER END*/}



{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Alia El Garhy</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2024-catalogue/manal-yosri/Manal_Yosri_03.jpg" alt="Manal Yosri - Panel" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">120 x 35 cm</p>
    </div>
<p className="prose leading-normal dark:text-white">
Inspired by the tiles found on a 17th century balcony entryway
at the Shrine of Fatima Al-Masumeh in Qom, Iran, this design
utilises a network of hexagonal geometric shapes, known as
tasomah, intertwined with botanical decorations.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Noha El Nady</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/lamia-ismael/Lamia_Ismael_04.jpg" alt="Lamia Ismael - Panel" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">110 x 58 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
Inspired by the Gayer Anderson Museum fountain floor, this
panel uses an hexagonal grid and repetitive triangles to form the
dodecagon shape. The triangle unit was carved on gypsum to
create the tile mould.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2 gap-24">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/lamia-ismael/Lamia_Ismael_01.jpg" alt="Amira Mohammed - Plate #1" width={500} height={600} />
  </div>
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/lamia-ismael/Lamia_Ismael_02.jpg" alt="Amira Mohammed - Plate #2" width={500} height={600} />
  </div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}


{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Rawan El Taweel</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2024-catalogue/ibrahim-waheed/Ibrahim_Waheed_01.jpg" alt="Aya Soliman - Bench" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Bench</p>
    <p className="text-xl italic">119 x 65 cm</p>
    </div>
<p className="prose leading-normal dark:text-white">
Inspired by ancient Quranic benches, this bench features wood
inlay using camel bones as geometric decorations inspired by
the Wikala of Sultan Qaytbay. Woodturning was used to build
the frame, and the lower portion is intended as a storage unit.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Hagar Etman</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/mohamed-elshamy/mohamed-elshamy-01.jpg" alt="Mohamed ElShamy - Panel" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">90 x 60 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
A ceramic panel inspired by Al-Aqsa Mosque and made using
the cuerda seca technique.</p>
</div>
  </div>
</div>

</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Noha El Nady</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/mariam-anwar/Mariam_Anwar_01.jpg" alt="Mariam Anwar - Frame" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Frame</p>
    {/* <p className="text-xl italic">90 x 60 cm</p> */}
    </div>
<div><p className="prose leading-normal dark:text-white">
This wooden frame for a door is inspired by a wall mural found
in the Topkapı Palace in Istanbul. The concept is rooted in the
Bauhinia tree, particularly inspired by the vibrancy of its leaves
and blossoms.</p>
</div>
  </div>
</div>

</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Doaa Fathy</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2024-catalogue/nada-elmorshidy/Nada_ElMorshidy_04.jpg" alt="Nada ElMorshidy - Panel" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">128 x 44 cm</p>
    </div>
<p className="prose leading-normal dark:text-white">
A ceramic panel of tiles engraved with motifs from the Ibn
Tulun Mosque. The tiles were painted using a transparent glaze
mixed with manganese to give a stone feel.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Wessam Ghanim</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/nada-kadri/Nada_Kadri_01.jpg" alt="Nada Kadri - Panel" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">100 x 60 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
Inspired by the Taj Mahal, this panel incorporates various styles
and design techniques, such as arch shapes, marble works and
stone carvings, to achieve a Mughal look.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/nada-kadri/Nada_Kadri_02.jpg" alt="Nada Kadri - Plate" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Plate</p>
    <p className="text-xl italic">35 cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
Inspired by an elegant 16th century plate based on two
geometric networks, the design uses the same quadrilateral and
pentagonal formations and is decorated using brush painting.</p>
</div>
  </div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Fatma Badawy</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2024-catalogue/nourhane-elkady/Nourhane_ElKady_01.jpg" alt="Nourhane ElKady - Lighting unit" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Lighting unit</p>
    <p className="text-xl italic">28 cm front circle / 68 cm rear circle</p>
    </div>
<p className="prose leading-normal dark:text-white">
This hand-engraved brass lighting unit is inspired
by the two Mamluk era sconces exhibited at the
Metropolitan Museum of Art.</p><br></br>
<p className="prose leading-normal dark:text-white">
The large platter is part of a set of trays upon
which, traditionally, candlesticks were fixed to reflect
candlelight, illuminating a room while higlighting the
decorative details of the brass surface.</p><br></br>
<p className="prose leading-normal dark:text-white">
The project follows octagonal shape
proportions, relying on a circular network
of 21 solar motifs, featuring musicians,
dancers and animals.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Somaya Wael Ismail</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2024-catalogue/omnia-hosni/Omnia_Hosni_01.jpg" alt="Omnia Hosni - Mirror" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Mirror</p>
    <p className="text-xl italic">63cm x 63cm</p>
    </div>
<p className="prose leading-normal dark:text-white">
This hand-carved wooden mirror
frame is a depiction of a hunting and
harvesting scene. It contains oud players,
hunters with their horses, various birds
and bunches of grapes. The piece is
inspired by a mirror from the Fatimid
era exhibited at the Pergamon Museum
in Berlin.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Lydia Malak</h2></div>
<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/tuka-el-safty/Tuka_El_Safty_01.jpg" alt="Tuka El Safty- Panel" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">90 x 45cm</p>
    </div>
<div><p className="prose leading-normal dark:text-white">
This ceramic panel uses pigments and oxides similar to those
used to decorate the Shah-i-Zinda Mausoleum in Samarkand,
Uzbekistan. Blue and turquoise have been combined with
yellow ochre, green and black to achieve a unique floral motif.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex flex-col lg:flex-row lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/tuka-el-safty/Tuka_El_Safty_02.jpg" alt="Tuka El Safty - Vase" width={1000} height={600} />
  </div>
  <div className="lg:ml-6">
    
    <div className="pt-6 pb-3">
    <p className="text-2xl">Vase</p>
    {/* <p className="text-xl italic">35 cm</p> */}
    </div>
<div><p className="prose leading-normal dark:text-white">
Inspired by 13th century Ayyubid era crafts, this round, plump
body holds a slender neck and is decorated with black dye
under a turquoise glaze. Traditionally, this type of vase was used
to store and transport spices, food ingredients and medical
materials.</p>
</div>
  </div>
</div>
</div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Sara Meghani</h2></div>
<div className="w-2/3 pb-12">
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/graduation-class/graduation-class.jpg" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  <div className="pt-1 text-xs">The 2024 graduating class of the Jameel House of Traditional Arts in Cairo at the graduation ceremony. Left to right: front row, Heba Amin*,
Amira Mohamed*, Amira Khaled*, Manal Yosri*, Nada Al Morshidy*, Tuka El Safty*, Nada Kadri*, Alya Gamal; middle row, Amira Negm*, Aya
Soliman*, Mariam Anwar*, Omnia Hosni*, Lamia Ismail*, Hany El Deeb*; back row, Mohamed ElShamy*, Ibrahim Waheed*, Ola Said, Basma
Hamed, Dr Mamdouh Sakr, Delfina Bottisini, Dr Khaled Azzam, Mostafa Awad, Nagat Farouk, Cléa Daridan. (* Denotes graduating students.)
</div>
  </div>
{/* STUDENT END */}

  {/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Rana Meligui</h2></div>
<div className="w-2/3 pb-12">
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/graduation-class/graduation-class.jpg" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  <div className="pt-1 text-xs">The 2024 graduating class of the Jameel House of Traditional Arts in Cairo at the graduation ceremony. Left to right: front row, Heba Amin*,
Amira Mohamed*, Amira Khaled*, Manal Yosri*, Nada Al Morshidy*, Tuka El Safty*, Nada Kadri*, Alya Gamal; middle row, Amira Negm*, Aya
Soliman*, Mariam Anwar*, Omnia Hosni*, Lamia Ismail*, Hany El Deeb*; back row, Mohamed ElShamy*, Ibrahim Waheed*, Ola Said, Basma
Hamed, Dr Mamdouh Sakr, Delfina Bottisini, Dr Khaled Azzam, Mostafa Awad, Nagat Farouk, Cléa Daridan. (* Denotes graduating students.)
</div>
  </div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Rana Meligui</h2></div>
<div className="w-2/3 pb-12">
    <Image src="/images/labs/jameel-house-cairo/2024-catalogue/graduation-class/graduation-class.jpg" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  <div className="pt-1 text-xs">The 2024 graduating class of the Jameel House of Traditional Arts in Cairo at the graduation ceremony. Left to right: front row, Heba Amin*,
Amira Mohamed*, Amira Khaled*, Manal Yosri*, Nada Al Morshidy*, Tuka El Safty*, Nada Kadri*, Alya Gamal; middle row, Amira Negm*, Aya
Soliman*, Mariam Anwar*, Omnia Hosni*, Lamia Ismail*, Hany El Deeb*; back row, Mohamed ElShamy*, Ibrahim Waheed*, Ola Said, Basma
Hamed, Dr Mamdouh Sakr, Delfina Bottisini, Dr Khaled Azzam, Mostafa Awad, Nagat Farouk, Cléa Daridan. (* Denotes graduating students.)
</div>
  </div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Gamila Mourad</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Areeg Niazy</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Brass tray</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Carved wooden panel</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Ceramic panel</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Chandelier</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Coloured mirror</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Wooden box</h2></div>
{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
<div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

{/* STUDENT START */}
<div><h2 className="header-section pb-6">Heritage — Wooden cabinet panel</h2></div>
{/* STUDENT END */}


</div>
    </>
  );
}
