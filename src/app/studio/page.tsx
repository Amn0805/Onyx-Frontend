export const revalidate = 0;
import React from "react";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import { ClientReviews, Statistics } from "@/components/home";
import Header from "./Header";
import OurStory from "./OurStory";
import { InlineWidget } from "react-calendly";
import ScheduleCall from "@/components/shared/ScheduleCall";
import OurServicesImages from "./OurServicesImages";
import Link from "next/link";
import StudioSEO from "@/components/seo/StudioSEO";
import { FeedbackVideo } from "@/components/shared/Video";

const Page = () => {
  return (
    <>
      <StudioSEO />
      <Header />
      <OurStory />
      <OurServices />
      <OurServicesImages />
      <OurTeam />
      <Statistics />
      <ClientReviews />
      <ScheduleCall />
      <FeedbackVideo />
    </>
  );
};

export default Page;
