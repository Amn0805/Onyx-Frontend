"use client";
import React from 'react';
import Link from 'next/link';

function AvailablePositions() {
  const jobPositions = [
    { jobTitle: '3D ARTIST | ANIMATION TEAM', redirectUrl: `/career/job/${'3d-artist-animation'}` },
    { jobTitle: '3D ARTIST | STILL IMAGE TEAM', redirectUrl: `/career/job/${'3d-artist-stillimage'}` },
    { jobTitle: '3D MODELER', redirectUrl: `/career/job/${'3d-modeler'}` },
    { jobTitle: '2D ARCHITECTURAL DRAFTING', redirectUrl: `/career/job/${'2d-architectural-drafting'}` },
  ];

  return (
    <section className='py-10 lg:py-32 flex flex-col gap-6 items-center'>
      <h2 className="text-center lg:my-10 heading">
        Open Positions
      </h2>
      <div className='flex flex-col gap-4 lg:gap-20 items-center justify-center w-[60%]'>
        {jobPositions.map((job, index) => (
          <JobCard key={index} jobTitle={job.jobTitle} redirectUrl={job.redirectUrl} />
        ))}
      </div>
    </section>
  );
}

export default AvailablePositions;



function JobCard({ jobTitle, redirectUrl }:{jobTitle:string,redirectUrl:string }) {
  return (
    <Link href={redirectUrl}  className='flex flex-col 3xl:gap-4 w-full cursor-pointer hover:bg-[#114046] transition-colors group'>
      <div className='flex flex-col lg:flex-row justify-between px-6 py-4 3xl:px-12 3xl:py-8 group-hover:text-white'>
        <h6 className='text-center lg:text-start para !font-normal'>{jobTitle}</h6>
        <button className='para text-[#00000099] group-hover:text-white'>Apply now {'>'}</button>
      </div>
      <div className='bg-[#000000] w-full h-[1px]' />
    </Link>
  );
}
