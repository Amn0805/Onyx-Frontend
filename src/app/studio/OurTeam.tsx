import { blurDataURL } from "@/constants";
import Image from "next/image";
import React from "react";
import { client, urlFor } from "../../lib/sanity";

import { set } from "sanity";
import { url } from "inspector";
import { getTeamMembers } from "../../lib/sanity";


interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: any;
  alt: string;
}

async function OurTeam() {
  const teamMembers: TeamMember[] = await getTeamMembers();
  const sortedTeamMembers = teamMembers.sort((a, b) => a.id - b.id);

  return (
    <section className="flex flex-col p-4  lg:p-20">
      <h2 className="heading text-center">HANDS BEHIND ONYX</h2>

      {/* Profile Group Section */}
      <div className="flex items-center gap-2 my-8 rounded-[0.78vw] border border-black w-fit px-4 py-2 3xl:px-6 3xl:py-4 mx-auto hover:text-white hover:bg-[#114046] hover:border-[#114046] cursor-pointer transition-colors">
        <div className="-space-x-2 flex">
          {sortedTeamMembers.slice(0, 5).map((member) => (
            <div key={member.id} className="aspect-square w-[30px] relative">
              <Image
                placeholder="blur"
                blurDataURL={blurDataURL}
                src={urlFor(member.image).url()}
                alt={member.alt}
                className="rounded-full border border-white object-cover"
                fill
                unoptimized 
              />
            </div>
          ))}
        </div>
        <span className="text-small">8+ Members</span>
      </div>

      {/* Team Members Grid */}
      <div className="flex flex-wrap justify-between gap-4 gap-y-6 3xl:gap-y-20 h-fit">
        {teamMembers.map((member) => (
          <div
            key={member.alt}
            className="flex cursor-pointer flex-col w-full lg:w-[22%]  "
          >
            <div key={member.id} className="relative w-full aspect-[3/4] ">
              <Image
                placeholder="blur"
                blurDataURL={blurDataURL}
                src={urlFor(member.image).url()}
                alt={member.alt}
                className="object-cover"
                fill
                unoptimized 
              />
            </div>
            <h2 className="para !font-semibold mt-5 3xl:mt-10">
              {member.name.toUpperCase()}
            </h2>
            <p className="text-small mt-1">
              {member.designation.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurTeam;
//const teamMembers = [
//   {
//     id: 1,
//     alt: "team1",
//     src: "/studio/team/Artboard 2.svg",
//     name: "AWAIS KHALID | ARCHITECT",
//     designation: "Founder & Team Head",
//   },
//   {
//     id: 2,
//     alt: "team2",
//     src: "/studio/team/Artboard 3.svg",
//     name: "WAQAS KHALID",
//     designation: "Team Lead Recruiter",
//   },
//   {
//     id: 3,
//     alt: "team3",
//     src: "/studio/team/Artboard 4.svg",
//     name: "SANIA KHALID",
//     designation: "3D Artist",
//   },
//   {
//     id: 4,
//     alt: "team4",
//     src: "/studio/team/Artboard 5.svg",
//     name: "SANA ABID",
//     designation: "Creative Head",
//   },
//   {
//     id: 5,
//     alt: "team5",
//     src: "/studio/team/Artboard 6.svg",
//     name: "MUBEEN TARIQ | ARCHITECT",
//     designation: "Architectural Designer",
//   },
//   {
//     id: 6,
//     alt: "team6",
//     src: "/studio/team/Artboard 7.svg",
//     name: "AQSA ARIF",
//     designation: "Blueprint Designer",
//   },
//   {
//     id: 7,
//     alt: "team7",
//     src: "/studio/team/Artboard 8.svg",
//     name: "AHMAD WAHEED",
//     designation: "Web Architect",
//   },
//   {
//     id: 8,
//     alt: "team8",
//     src: "/studio/team/Artboard 9.svg",
//     name: "ABDULLAH USMAN",
//     designation: "Web Architect",
//   },
//   {
//     id: 9,
//     alt: "team9",
//     src: "/studio/team/Artboard 10.svg",
//     name: "ZUBAIR AZAM",
//     designation: "Chartered Management Expert",
//   },
// ];


