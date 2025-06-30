import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sakariyau Abdulateef Olayinka" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image || "https://olawoyin.netlify.app/og-image.jpg"} />

      {/* Twitter Card (for better sharing on Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "https://olawoyin.netlify.app/twitter-image.jpg"} />

      {/* Canonical URL (SEO Best Practice) */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;