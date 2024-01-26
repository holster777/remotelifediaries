import { createClient } from "@/lib/contento";

export default async function sitemap() {
  const client = createClient();

  // Top level pages
  let topLevelResponse = await client.getContent({
    params: {
      content_type: [
        "general_page",
        "info_page",
        "blog_landing",
        "blog_category",
        "authors",
      ],
      limit: "100",
    },
  });

  let pages = [...topLevelResponse.content];
  while (topLevelResponse.nextPage) {
    topLevelResponse = await topLevelResponse.nextPage();
    pages = pages.concat(topLevelResponse.content);
  }

  // Blog posts
  let postsResponse = await client.getContent({
    params: {
      content_type: "blog_post",
      limit: "100",
    },
  });
  pages = pages.concat(postsResponse.content);
  while (postsResponse.nextPage) {
    postsResponse = await postsResponse.nextPage();
    pages = pages.concat(postsResponse.content);
  }

  // Return the sitemap array
  return pages.map((page) => {
    return {
      url: page.slug === "home" ? "https://www.remotelifediaries.com" : page.url,
      lastModified: page.updated_at,
    };
  });
}
