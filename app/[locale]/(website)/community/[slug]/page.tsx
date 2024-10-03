import type { Metadata, ResolvingMetadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import TopicTitle from '@/components/ui/topic-title'
import Hamburger from '@/components/ui/hamburger'
import Feedback from '@/components/ui/feedback'
import PageNavigation from '@/components/ui/page-navigation'
import Footer from '@/components/ui/footer'
import SecondaryNav from '@/components/ui/secondary-nav'
import { getIdByDisplayName } from '@/functions/utils/findCollectionId'
import { getData } from '@/functions/api/getData'
import { Item, ProgrammeRawFields } from '@/app/interfaces'
import { customMetaDataGenerator } from '@/functions/utils/customMetadataGenerator'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}
type Props = {
  params: { slug : string, locale: string };

}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug= params.slug
  const locale = params.locale;

 
 
  const labId = getIdByDisplayName("Programmes");
  const labelRaw = await getData(labId);
const labelRawData = labelRaw.items;
  const singleLabRaw :Item<ProgrammeRawFields>[] = labelRawData.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = singleLabRaw[0].fieldData["name-arabic"] ? singleLabRaw[0].fieldData["name-arabic"] : '';
  const seoTitleEnglish = singleLabRaw[0].fieldData.name ? singleLabRaw[0].fieldData.name : '';
  const descriptionArabic = singleLabRaw[0].fieldData['summary-arabic'] ? singleLabRaw[0].fieldData['summary-arabic'] : '';
  const descriptionEnglish = singleLabRaw[0].fieldData.description   ? singleLabRaw[0].fieldData.description : '';
  const name = locale === 'ar'? seoTitleArabic : seoTitleEnglish;
  const description = locale=== 'ar'? descriptionArabic : descriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
    useRawTitle: true,
      title: name,
      description: description,
      ogImage: singleLabRaw[0].fieldData.hero?.url,
    })
 
  
}

export default async function SinglePost({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  return (
    <>
      {/* Page header    <div className="h-16 flex items-center mb-6">
        <TopicTitle name={post.topic.name} segment={post.topic.slug} />
      </div>*/}
   

      <article className="flex xl:space-x-12">

        {/* Main area */}
        <div className="min-w-0">

          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden flex items-center mb-8">


            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">{post.topic.name}</span>
              <svg className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">{post.title}</span>
            </div>

          </div>

          {/* Article content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200">{post.title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {post.summary}
              </p>
            </header>
            <Mdx code={post.body.code} />
          </div>

          {/* Feedback */}
          <Feedback />

          {/* Page navigation */}
          <PageNavigation prevArticle={post.prev} nextArticle={post.next} />

          {/* Content footer */}
          <Footer />

        </div>

        {/* Secondary navigation */}
        <SecondaryNav />

      </article>
    </>
  )
}
