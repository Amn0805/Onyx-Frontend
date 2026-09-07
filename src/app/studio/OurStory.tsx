import { blurDataURL } from '@/constants';
import Image from 'next/image';
import React from 'react';

function OurStory() {
  return (
    <section className='flex flex-col gap-10 px-6 xl:px-20 3xl:px-40  py-10'>
      <h1 className="text-center heading 3xl:mb-[2%]">Our Story</h1>
      <div className='flex w-full  '>
        <div className='w-full lg:w-[60%] flex flex-col gap-5 3xl:gap-10 text-justify text-[10px] 2xl:text-xl  4xl:text-5xl   text-[#00000099]  '>
          <p className='leading-normal'>
            It all started with one visionary architect. <span className='font-bold'>AWAIS KHALID</span>, an artist at heart, saw 3D visualization as more than just a technical skill—it was an art form, a way to craft experiences that could be seen, felt, and lived. With a deep passion for design and an obsession with detail, he founded <span className='font-bold'>ONYX RENDERS</span> in 2020, determined to push the boundaries of architectural storytelling.
          </p>
          <span className='font-bold'></span>
          <p className='leading-normal'>
            What began as a personal pursuit soon grew into a global creative powerhouse. Today, <span className='font-bold'>ONYX RENDERS collaborates with architects, designers, and developers in over 25 countries</span>, bringing their visions to life with unparalleled realism and emotion. With <span className='font-bold'>1,000+ COMPLETED PROJECTS</span> and thousands of high-end renders in our portfolio, we have earned a reputation for <span className='font-bold'>speed, precision, and seamless communication</span>—key pillars of our brand.
          </p>
          <p className='leading-normal'>
            But beyond the numbers, what truly defines us is our mindset: a relentless commitment to <span className='font-bold'>innovation, refinement, and perfection.</span> We believe that every project tells a story, and our mission is to <span className='font-bold'>visualize that story with breathtaking clarity and impact.</span>
          </p>
          <div className='w-full h-[1px] bg-[#1e1e1e]'></div>
          <div className='space-y-2 3xl:space-y-5'>
            <h2 className='text-[20px]  2xl:text-xl  4xl:text-5xl !font-bold'>{'Looking Ahead: The Future of Onyx Renders'.toUpperCase()}</h2>
            <p className='leading-normal'>The world of architectural visualization is evolving, and so are we. At <span className='font-bold'> ONYX RENDERS</span>, we are driven by the future—exploring <span className='font-bold'>AI-enhanced rendering, real-time visualization, and immersive experiences</span> that transform how spaces are envisioned and experienced.
            </p>
            <p className='leading-normal'>
              But we are more than just a rendering studio. <span className='font-bold'>We are a creative hub.</span> A place where <span className='font-bold'>art meets technology</span>, where <span className='font-bold'>vision meets execution</span>, and where we continue to shape the future of architectural storytelling. As we grow, we seek out the best talent, refine our craft, and push the boundaries of what's possible—because for us, the journey of creation never stops.
            </p>
          </div>
        </div>
        <div className="hidden w-[40%] lg:flex gap-2 3xl:gap-6 items-start justify-end">
          <div className="aspect-[561/1310] w-[14.6vw] relative">
            <Image
              placeholder="blur"
              blurDataURL={blurDataURL}
              src="/portfolio/banner/1.svg"
              alt="banner-img"
              className="object-cover"
              fill
            />
          </div>
          <div className="aspect-[561/1310] w-[14.6vw] relative mt-20 3xl:mt-52">
            <Image
              placeholder="blur"
              blurDataURL={blurDataURL}
              src="/portfolio/banner/2.svg"
              alt="banner-img"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory