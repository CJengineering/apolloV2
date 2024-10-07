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

// START INITIATIVES

const cardData = [
  {
    imageUrl: "/images/labs/j-wafs/JAMEEL_INDEX_1000PX.jpg",
    alt: "2024 catalogue",
    title: "2024 catalogue",
    subtitle:"",
    link: "https://www.jameelartshealthlab.org/healing-arts",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/j-wafs/JWAFS_SEED_GRANTS.jpg",
    alt: "2023 catalogue",
    title: "2023 catalogue",
    subtitle:"",
    link: "https://jwafs.mit.edu/SeedGrants",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END INITIATIVES

export default async function jhtac2023graduation({
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
           
<div className="pb-6">
<h1 className="header-article w-2/3"><span className="font-bold">2023 Graduation Catalogue:</span> <br></br>
Jameel House of Traditional Arts in Cairo</h1>
</div>

<div className="w-2/3">
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/graduation-class/graduation-class.jpg" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  <div className="pt-1 text-xs">The 2023 graduating class of the Jameel House of Traditional Arts in Cairo at the graduation ceremony. Left to right: front row, Heba Amin*,
Amira Mohamed*, Amira Khaled*, Manal Yosri*, Nada Al Morshidy*, Tuka El Safty*, Nada Kadri*, Alya Gamal; middle row, Amira Negm*, Aya
Soliman*, Mariam Anwar*, Omnia Hosni*, Lamia Ismail*, Hany El Deeb*; back row, Mohamed ElShamy*, Ibrahim Waheed*, Ola Said, Basma
Hamed, Dr Mamdouh Sakr, Delfina Bottisini, Dr Khaled Azzam, Mostafa Awad, Nagat Farouk, Cléa Daridan. (* Denotes graduating students.)
</div>
  </div>

<div className="py-6">
<p className="prose prose-xl leading-normal dark:text-white">At the Jameel House of Traditional Arts in Cairo, we immerse ourselves in the rich heritage of traditional arts, challenging ourselves to create original designs using timeless techniques. Since its inception in 2009, this collaborative programme between the Egyptian Ministry of Culture, The Prince’s Foundation School of Traditional Arts, and Community Jameel has trained over 200 artists and artisans. Many graduates are now building their own businesses, contributing to Egypt’s evolving art scene.
</p><br/>
<p className="prose prose-xl leading-normal dark:text-white">We continually enhance our curriculum, introducing intricate geometric and floral patterns, new craft techniques, and a stronger focus on design. This year, students embraced exciting challenges, such as the cuerda seca technique in ceramics, and created impressive projects, like Hany El Deeb’s curvilinear wood panel and Mariam Anwar’s tempera painting. New materials, like stone, were also explored, with Aya Soliman’s stone bench being a standout achievement.
</p><br/>
<p className="prose prose-xl leading-normal dark:text-white">Our programme fosters creativity and craftsmanship, and we look forward to welcoming new students into this inspiring journey, hoping to further enrich Egypt’s artistic legacy.</p>
</div>
</div>
<div className="w-full pt-3 pb-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
  
 {/* STUDENT START */}

<div>  
<div><h2 className="header-section pb-6">Amira Negm</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amera-negm/Amera_Negm_01.jpg" alt="Amera Negm" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">120 x 70 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
This window façade decoration is inspired by Istanbul’s
Süleymaniye Mosque, the city’s second oldest royal mosque.
The cuerda seca or dry rope technique was employed in this
project, where glazes are separated using an isolating line
composed of oil, manganese and a transparent substance.
Drawing with the isolating line prevents the glazes from mixing,
and six primary colours were used: red, blue, green, ochre,
turquoise and white.</p>
</div>
  </div>
</div>
<div className="py-6"></div>

<div className="flex grid-cols-1 lg:grid-cols-2">
<div className="">
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amera-negm/Amera_Negm_02.jpg" alt="Amera Negm" width={1000} height={600} />
  </div>
<div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Plate</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Featuring a gazelle surrounded by
botanical motifs, this design was
created using the metallic lustre
technique that relies on the density of
smoke during the firing process.</p>
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
<div><h2 className="header-section pb-6">Amira Khaled</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amira-khaled/Amira_Khaled_04.jpg" alt="Amira Khaled - Three of Life" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Tree of Life</p>
    <p className="text-xl italic">105 x 67.5 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Crafted from 28 hand-painted tiles using oxides and underglaze technique,
this panel is inspired by the tree of life story. Drawing from traditional Islamic
motifs, it showcases bulut, rumi, stylised flowers and animals as seen in the
Topkapı Palace.</p>
</div>
  </div>
</div>
<div className="py-6"></div>

<div className="flex grid-cols-1 lg:grid-cols-2">
<div className="">
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amera-negm/Amera_Negm_02.jpg" alt="Amera Negm" width={1000} height={600} />
  </div>
<div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Plate</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Featuring a gazelle surrounded by
botanical motifs, this design was
created using the metallic lustre
technique that relies on the density of
smoke during the firing process.</p>
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
<div><h2 className="header-section pb-6">Heba Amin</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/heba-amin/Heba_Amin_01.jpg" alt="Heba Amin - Brass box" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Brass Box</p>
    <p className="text-xl italic">16 x 21 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Inspired by Mamluk era food storage systems, this brass box
features pen engravings used to create an hexagonal grid to
distribute plant elements and combine quadrilateral geometric
decorations.</p>
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
<div><h2 className="header-section pb-6">Amira Mohammed</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amira-mohamed/Amira_Mohamed_01.jpg" alt="Amira Mohammed - Plate" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Plate</p>
    <p className="text-xl italic">35 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Inspired by 10th century Persian crafts, this ceramic has
black, yellow, red and green colours under a clear glaze. It is
decorated with delicate drawings containing birds, animals, floral
and plant decorations, and Kufic letters, with black, yellow, red
and green colours under a clear glaze.</p>
<p className="prose prose-xl leading-normal dark:text-white">
The drawings reflect the region of Nishapur and the
range of festivals celebrated by Muslims and Zoroastrians,
and also depict Christian symbols, giving it a character full of
life and different stories.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/amira-mohamed/Amira_Mohammed-02.jpg" alt="Amira Mohammed - Panel" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Panel</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Inspired by the Bibi Khanum Mosque dating to 1398 and 1405 in Samarkand, the design of this
panel incorporates plain tiles alongside tiles adorned with botanical motifs. The fundamental
structure is based on the ten-point star polygon, five-pointed star polygon, eight-pointed star
polygon and the relations between them. Clay slabs were crafted and manually cut, then left
to dry before undergoing the initial firing process. Then, plain tiles were sprayed with a colour
resembling natural beige rock hues. For the tiles with botanical motifs, the cuerda seca technique
was employed to separate different glaze colours. Finally, a second and final firing took place,
followed by assembling to achieve the final form.</p>
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
<div><h2 className="header-section pb-6">Aya Soliman</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2023-catalogue/aya-soliman/Aya_Soliman_02.jpg" alt="Aya Soliman - Bench" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Bench</p>
    <p className="text-xl italic">125 x 60 cm</p>
    </div>
<p className="prose prose-xl leading-normal dark:text-white">
This outdoor bench made of Hashemite stone is inspired by
a Coptic-style ivory box that tells the story of a hero fighting
enemies, with an engraving of a mythical winged animal on the
side in the same Coptic style. Hashemite stone is distinguished
by its unique yellow colour, hardness and resistance to external
weather factors.</p>
</div>

{/* STUDENT END */}

{/* DIVIDER START */}
<div className="w-full pt-16 pb-12">
  <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
</div>
{ /* DIVIDER END*/}

 {/* STUDENT START */}

 <div>  
<div><h2 className="header-section pb-6">Hany El Deeb</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/hany-el-deeb/hany-el-deeb-01.jpg" alt="Amira Mohammed - Plate" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">35 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
The first of its kind in Egypt, this project is inspired by the
feather of Al-Ghamri’s pulpit located in the al-Ashraf Barsbay
Khanqa in the Desert of the Mamluks in Cairo.
</p><br></br>
<p className="prose prose-xl leading-normal dark:text-white">
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
<div><h2 className="header-section pb-6">Manal Yosri</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2023-catalogue/manal-yosri/Manal_Yosri_03.jpg" alt="Manal Yosri - Panel" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">120 x 35 cm</p>
    </div>
<p className="prose prose-xl leading-normal dark:text-white">
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
<div><h2 className="header-section pb-6">Lamia Ismail</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/lamia-ismael/Lamia_Ismael_04.jpg" alt="Lamia Ismael - Panel" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">110 x 58 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
Inspired by the Gayer Anderson Museum fountain floor, this
panel uses an hexagonal grid and repetitive triangles to form the
dodecagon shape. The triangle unit was carved on gypsum to
create the tile mould.</p>
</div>
  </div>
</div>

<div className="py-6"></div>

<div className="flex grid-cols-1 lg:grid-cols-2 gap-24">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/lamia-ismael/Lamia_Ismael_01.jpg" alt="Amira Mohammed - Plate #1" width={500} height={600} />
  </div>
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/lamia-ismael/Lamia_Ismael_02.jpg" alt="Amira Mohammed - Plate #2" width={500} height={600} />
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
<div><h2 className="header-section pb-6">Ibrahim Waheed</h2></div>
</div>
<div className="w-full">
<Image src="/images/labs/jameel-house-cairo/2023-catalogue/ibrahim-waheed/Ibrahim_Waheed_01.jpg" alt="Aya Soliman - Bench" width={1600} height={600} />  
</div>
<div>
<div className="pt-6 pb-3">
    <p className="text-2xl">Bench</p>
    <p className="text-xl italic">119 x 65 cm</p>
    </div>
<p className="prose prose-xl leading-normal dark:text-white">
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
<div><h2 className="header-section pb-6">Mohamed ElShamy</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/mohamed-elshamy/mohamed-elshamy-01.jpg" alt="Mohamed ElShamy - Panel" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Panel</p>
    <p className="text-xl italic">90 x 60 cm</p>
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
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
<div><h2 className="header-section pb-6">Mariam Anwar</h2></div>
<div className="flex grid-cols-1 lg:grid-cols-2">
  <div>
    <Image src="/images/labs/jameel-house-cairo/2023-catalogue/mariam-anwar/Mariam_Anwar_01.jpg" alt="Mariam Anwar - Frame" width={1000} height={600} />
  </div>
  <div className="ml-6">
    
    <div className="pb-3">
    <p className="text-2xl">Frame</p>
    {/* <p className="text-xl italic">90 x 60 cm</p> */}
    </div>
<div><p className="prose prose-xl leading-normal dark:text-white">
This wooden frame for a door is inspired by a wall mural found
in the Topkapı Palace in Istanbul. The concept is rooted in the
Bauhinia tree, particularly inspired by the vibrancy of its leaves
and blossoms.</p>
</div>
  </div>
</div>

</div>
{/* STUDENT END */}

</div>
    </>
  );
}
