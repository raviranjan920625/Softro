import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Softro – IT Solutions & Digital Agency",
  description = "Softro is a professional IT Solutions Agency helping businesses scale through innovative software, design, and strategic consulting.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: 'website',
      siteName: 'Softro'
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@softro"
    },
    icons,
    // Note: change to your actual production domain
    metadataBase: new URL('https://softro.io'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  };
}
