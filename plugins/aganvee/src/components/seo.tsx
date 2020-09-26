import { withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
};

const SEO = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
}: Props) => {
  const site = useSiteMetadata();

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix(`/favicon-32x32.png`)}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix(`/favicon-16x16.png`)}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('apple-icon-180.jpg')}
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href={withPrefix('apple-icon-167.jpg')}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={withPrefix('apple-icon-152.jpg')}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={withPrefix('apple-icon-120.jpg')}
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2048-2732.jpg')}
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2732-2048.jpg')}
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1668-2388.jpg')}
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2388-1668.jpg')}
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1536-2048.jpg')}
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2048-1536.jpg')}
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1668-2224.jpg')}
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2224-1668.jpg')}
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1620-2160.jpg')}
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2160-1620.jpg')}
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1242-2688.jpg')}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2688-1242.jpg')}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1125-2436.jpg')}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-2436-1125.jpg')}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-828-1792.jpg')}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1792-828.jpg')}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1080-1920.jpg')}
        media="(device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1920-1080.jpg')}
        media="(device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-750-1334.jpg')}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1334-750.jpg')}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-640-1136.jpg')}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={withPrefix('apple-splash-1136-640.jpg')}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      ></link>
      {children}
    </Helmet>
  );
};

export default SEO;
