"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
  

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
         <div className='grid grid-cols-1 sm:grid-cols-12 '>
            <div className=' col-span-8 place-self-center text-center sm:text-left justify-self-center'>
                <h1 className="text-amber-700 padding:100px mb-4 mt-200 text-4xl sm:text-5xl lg:text-4xl font-extrabold ">
                    Hello, Im  <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Britney Nwankwor',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'a Software Engineer',
          1000,
          'an Assistant Vice President of Membership',
          1000,
          'a Recording Secretary ',
          1000,
          'a Product Manager',
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
                </h1>

                <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
                Welcome to a slice of my life! This is where you can learn all about me.
                </p>
                < p className="text-white text-base sm:text-lg lg:text-xl mb-4">
            

                </p>
            <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-100 to-white-500 hover:bg-slate-200  border-white text-white  "> Hire Me</button>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br  from-amber-100 to-white-500 hover:bg-slate-800 text-white border border-white mt-3">Download Resume</button>
            </div>
        </div>
            <div className= 'col-span-5 place-self-center mt-4 lg:mt-0'> 
                <div className="square-full  bg-amber-700 absolute top-0 right-0 lg:top-10 lg:right-10 w-[300px] h-[500px] lg:w-[400px] lg:h-[400px] mb-5"> 
                    <Image src="/images/image.png"
                    alt="image"
                    className='absolute transform -translate-x-1/3 -translate-y-1/3  left-1/4 top-1/4'
                    width={220}
                    height={250}
                    />
                </div>
            </div>
        </div>
        </section>
    )
}

export default HeroSection
