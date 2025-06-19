// src/app/layout.tsx
import "./globals.css";
import Nav from "@/Components/NavBar/NavHolder";
import Footer from "@/Components/Footer/Footer";
import { ReactNode } from "react";
import { getLists } from "@/ApiRequest/GetData";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Script from "next/script";
import URL from "@/seo/URL";

export async function generateMetadata() {
  try {
    const res = await getLists("seo", 0, 0);
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title:
        "NepaTronix | IoT in Nepal | Robotics  | Automation | AI & ML ",
      description:
        "NepaTronix, a leading Robotics & IOT company in Nepal, working in IoT, Robotics, AI, & ML projects, educates in the field of technology for students.",
      icons: {
        icon: "/logo2.png", // Add your logo here
      },
      keyword: res?.keywords,
    };
  } catch (e) {
    console.log(e);
    return {
      title: "NepaTronix | IoT in Nepal | Robotics  | Automation | AI & ML ",
      description:
        "NepaTronix, a leading Robotics & IoT company in Nepal, working in IoT, Robotics, AI, & ML projects, educates in the field of technology for students.",
      icons: {
        icon: "/logo2.png", // Add your logo here
      },
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const domain: string = "https://nepatronix.org";
  return (
    <html lang="en">
      <head>
        <Script id="script1">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWK2L3N3');`}</Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8385605192591374"
          crossOrigin="anonymous"
        ></Script>
        <URL domain={domain} />
      </head>
      <body className={""}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWK2L3N3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Nav />
        <AnalyticsRequester id="Nepatronix.org" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
