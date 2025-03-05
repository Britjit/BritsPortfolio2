"use client";
import React from 'react'
import Image from 'next/image';

const LeadershipSection = () => {
  return (
    <section className="py-12 bg-amber-900" id="leadership">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Leadership
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/Images/image-1.png" // Replace with your image path
                alt="Leader 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/Images/image-2.png"
                alt="Leader 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <p className="text-white">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/images/leader3.jpg" // Replace with your image path
                alt="Leader 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
