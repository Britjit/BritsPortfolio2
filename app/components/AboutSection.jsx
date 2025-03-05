"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>Java (OOP)</li>
        <li>HTML, CSS, & JavaScript</li>
        <li>React Native </li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "Sskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Time Managemnet</li>
        <li>Leadership Ability</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Central Florida </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CodePath HTML,CSS, JavaScript Cetrified</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center h-auto placeholder-teal-200 py-10 xl:gap-20 sm:py-16 xl:px-20 mt-10 sm:mt-16 md:mt-20">
        <Image src="/Images/NSBEpic.png" width={300} height={300} />
        <div className="mt-10 md:mt-0 text-left flex flex-col h-auto">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science student at the University of Central Florida in my 
            Senior year with an expected graduation of 2025. Regarding my technical skills
            I have had two previous Internships where I had the chance to utilize python scripitng automation.
            Outside of my technical background, I am very involved on my campus. I am the current Recording 
            secretary of the Mu Iota chapter of Delta Sigma Theta Soroity Incorporated and the Assistant Vice 
            President of Membership of Alpha Kappa Psi Professional Buisness Fraternity Incorporated.
          </p>
          <div className="flex flex-row justify-start mt-10">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
             {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Sskills")}
              active={tab === "Sskills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;