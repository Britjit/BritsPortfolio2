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
            I initially joined Alpha Kappa Psi for professional development, eager to refine my business skills 
            and grow my network. However, what truly made an impact on me was the incredible brotherhood—the 
            unwavering support, shared ambition, and lifelong connections. Inspired by this, I took on the role 
            of Assistant Vice President of Membership to help bring in the next class of future business leaders,
             ensuring they experience the same growth, mentorship, and sense of community that made AKPsi so special to me.
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
            Delta Sigma Theta Sorority, Inc. embodies sisterhood, social action, and the empowerment 
            of Black college-educated women, values that deeply resonate with me. The commitment to 
            service and leadership inspired me to take on the role of Recording Secretary, allowing 
            me to play an integral part in my chapter’s success while enhancing my organizational and
             leadership skills. Through this role, I’ve had the opportunity to contribute meaningfully 
             to our mission while growing both personally and professionally.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/Images/image-3.png" 
                alt="Leader 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-white">
            NSBE was the first organization I joined, and I immediately fell in love with it because
            it helped me blossom into the engineer I am today. My very first event was a social, where
            I felt truly welcomed and supported by a community of like-minded individuals. That experience
            left a lasting impact, inspiring me to take on the role of Membership Chair so I could create
            the same inclusive and encouraging environment for others. Giving back to the organization that
            shaped my journey has been an incredibly rewarding experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
