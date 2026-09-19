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
} from "@/components/home";
import { FooterCTA } from "@/components/shared";
import { FeedbackVideo } from "@/components/shared/Video";
import HomeSEO from "@/components/seo/HomeSEO";

export default function page() {
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
      <FeedbackVideo />
      <FAQs />
      <FooterCTA />
    </>
  );
}