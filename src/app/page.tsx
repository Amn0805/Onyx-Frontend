export const revalidate = 60;

import React from "react";
import OurWorkFlow from "@/components/home/OurWorkFlow";
import {
  Banner,
  WorkTypes,
  OurVision,
  FAQs,
  ClientReviews,
  Statistics,
  CallToAction,
} from "@/components/home";
import { Footer, FooterCTA } from "@/components/shared";
import { FeedbackVideo } from "@/components/shared/Video";
import HomeSEO from "@/components/seo/HomeSEO";

export default function page() {
  return (
    <>
      <HomeSEO />
      <Banner />
      <WorkTypes />
      <OurVision />
      <Statistics />
      <ClientReviews />
      <OurWorkFlow />
      <CallToAction />
      <FAQs />
      <FeedbackVideo />
      <FooterCTA />
    </>
  );
}