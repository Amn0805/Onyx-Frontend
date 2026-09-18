export const revalidate = 60;

import React from "react";
import OurWorkFlow from "@/components/home/OurWorkFlow";
import {
  Banner,
  SplitReveal,
  WhoWeHelp,
  OurVision,
  WhyItMatters,
  ServicesOverview,
  CaseStudies,
  WhyUs,
  FAQs,
  ClientReviews,
  Statistics,
  CallToAction,
  TestimonialVideo,
} from "@/components/home";
import { Footer, FooterCTA } from "@/components/shared";
import { fetchFeedbackVideo } from "@/lib/sanity";
import HomeSEO from "@/components/seo/HomeSEO";

export default async function page() {
  const videoLink = await fetchFeedbackVideo();

  return (
    <>
      <HomeSEO />
      <Banner />
      <SplitReveal />
      <WhoWeHelp />
      <OurVision />
      <Statistics />
      <WhyItMatters />
      <ServicesOverview />
      <CaseStudies />
      <WhyUs />
      <OurWorkFlow />
      <ClientReviews />
      <TestimonialVideo embedUrl={videoLink?.[0]?.videoUrl} />
         <FAQs />
      <FooterCTA />
    </>
  );
}