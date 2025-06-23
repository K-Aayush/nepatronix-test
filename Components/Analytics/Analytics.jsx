import Script from "next/script";
import React from "react";

const id = "G-YS1566HZK2";

const Analytics = () => {
  return (
    <>
      {/* External Google Tag Manager script */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      {/* Inline gtag config script with required id */}
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
