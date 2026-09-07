import React from "react";
import { fetchFeedbackVideo } from "@/lib/sanity";


export const FeedbackVideo = async() => {
  const videoLink = await fetchFeedbackVideo();
  
  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:gap-20 p-3 md:p-10 lg:p-25">
      <h2 className="text-center heading">Client Feedback</h2>

      <div className="flex justify-center w-full 3xl:w-[70%] mx-auto">
        <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg overflow-hidden">
        
          <iframe
            className="w-full h-full"
            src={videoLink[0]?.videoUrl}
            title="Client Feedback Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>
        </div>
      </div>
    </section>
  );
};
