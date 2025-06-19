import Script from "next/script";
import React from "react";

const id = "G-YS1566HZK2";

const Analytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}>`}
      >
        <Script id="" strategy="lazyOnload">
          {`
              
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');
          `}
        </Script>
      </Script>
    </>
  );
};

export default Analytics;
