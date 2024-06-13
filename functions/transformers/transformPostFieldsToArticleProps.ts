import { ArticleProps, PostFieldsCleaned } from "@/app/interfaces";



  
  export function transformPostFieldsToArticleProps(post: PostFieldsCleaned): ArticleProps {
    return {
      article: {
        title: post.seoTitle,
        description: post.body,
        image: post.thumbnail.url,
        date: post.datePublished,
        time_to_read_in_minutes: 5, // This value can be calculated or derived if needed
        body: {
          code: post.body, // Assuming `code` in body is the same as `body` in PostFieldsCleaned
        },
        tags: post.theme3,
        category: {
          name: post.programme.name,
          url: post.programme.url,
        },
        author: {
          name: post.name,
          url: `/author/${post.slug}`, // Assuming URL structure
          avatar: post.thumbnail.url,
          role: 'Author', // Assuming a default role, if not provided
          body: {
            code: post.body, // Assuming the author's body content is the same
          },
          social_links: [], // Assuming no social links as PostFieldsCleaned doesn't provide them
        },
      },
    };
  }
  

  