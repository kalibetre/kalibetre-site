import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type PageHeadProps = {
  title?: string | null;
  image?: string | null;
  description?: string | null;
  pathname?: string | null;
};

const PageHead: React.FC<PageHeadProps> = (props: PageHeadProps) => {
  const { title, image, description, pathname } = props;
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="kalibetre" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </>
  );
};

export default PageHead;
