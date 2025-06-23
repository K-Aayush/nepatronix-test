import React from "react";
import dynamic from "next/dynamic";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";
import Head from "next/head";
import Hero from "@/Components/homeComps/Hero";
import TeamSection from "@/Components/homeComps/TeamSection";

// Dynamic imports for all components
const SlideHolder = dynamic(() => import("@/Components/Slide/SlideHolder"));
const About = dynamic(() => import("@/Components/Holders/About"));
const HomeServ = dynamic(() => import("@/Components/homeComps/HomeServ"));
const HomeProducts = dynamic(
  () => import("@/Components/homeComps/HomeProducts")
);
const Video = dynamic(() => import("@/Components/HomeVideo/Video"));
const HomeBlog = dynamic(() => import("@/Components/homeComps/HomeBlog"));
const HomeBook = dynamic(() => import("@/Components/homeComps/HomeBook"));
const Client = dynamic(() => import("@/Components/Clients/Client"));
const Page = async () => {
  return (
    <main className="mainBox">
      {/* visit req */}
      <AnalyticsRequester id="page" />
      {/* pages */}
      <Hero />
      {/* <SlideHolder /> */}
      <Ads page={"home"} index={1} />
      <About />

      <Ads page={"home"} index={2} />
      {/* making service section */}
      <HomeServ />

      <Ads page={"home"} index={3} />
      {/* making product */}
      <HomeProducts />

      <Ads page={"home"} index={4} />
      {/* show video */}
      <Client />

      <Ads page={"home"} index={5} />
      <HomeBlog />

      {/*  */}
      <Ads page={"home"} index={6} />
      <HomeBook />

      <TeamSection />

      {/* <Video /> */}
      <Ads page={"home"} index={7} />
    </main>
  );
};

export default Page;
