"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image, { StaticImageData} from "next/image";

import Windows95FrameInner from "@/components/Windows95FrameInner";
import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import { BulletList } from "@/components/BulletList";
import { CaseStudyImage } from "@/components/CaseStudyImage";


import { projAssets } from "@/assets/projAssets";
import { caseStudyAB } from "@/assets/caseStudyImages";
// import CaseStudyNav from "@/components/CaseStudyNav";
import { CardGap } from "@/components/CardGap";
import { icon } from "@/assets/icon";

const caseStudyData = {
  team: [
    "Sole designer (Me)",
    "Team of 6 developers",
    "Director of Product",
    "Product owner",
  ],
  role: [
    "Discovery",
    "Stakeholder management",
    "Customer interviews", 
    "Usability testing",
    "MVP launch",
    "Future roadmapping",
  ],
  hero: projAssets[0].imageSecondary,
  heroDesc: "AB project hero image",
}

export default function abProject() {

  const pathname = usePathname();
  const currentPath = pathname.replace("/projects/", "");

  const currentIndex = projAssets.findIndex(project => project.link === currentPath);
  
  const currentProject = projAssets[currentIndex];
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (      
    <div>
      {/* <CaseStudyNav/> */}
      <CardContainer bgNone fullWidth>
        <CardSection>
          <h1 className="title-1">{currentProject.name}</h1>
          <p className="text-lg">Pharmacy managers were missing critical cost-saving opportunities — simply because they had to wait to talk to a sales rep.</p>
          <p className="text-lg">Due to deadline pressures, AmerisourceBergen wanted to simply re-skin this internal dashboard for the customers. I advocated for a different approach.</p>
        </CardSection>
      </CardContainer>
      
      {/* * * * * Hero image: START * * * * */}
      <Windows95FrameInner>
        <div className="relative group w-fit cursor-zoom-in" 
        onClick={() => setOpenImage(currentProject.image.src)}>
          <Image
            src={currentProject.image as StaticImageData}
            alt={"Mimic case study hero image"}
            className="transition duration-300 ease-in-out group-hover:brightness-[0.36]"
          />
          {/* Hover Overlay */}
          <div className="absolute items-center justify-center inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Image src={icon.expand} alt="Expand" width={36} height={36}/>
              <p className="font-Doto text-xl text-white">Expand</p>
            </div>
          </div>
        </div>
      </Windows95FrameInner>
      {/* Hero image: END */}

      {/* Section - Background: START */}
      <CaseStudyTitleDivider title="Background"/>
      <Windows95FrameInner>  
        <CardContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardSection sectionTitle="Members">
              <BulletList>
                {caseStudyData.team.map(
                  (member, index) => (<li key={index}>{member}</li>)
                )}
              </BulletList>
            </CardSection>
            <CardSection sectionTitle="My role">
              <BulletList>
                {caseStudyData.role.map(
                  (member, index) => (<li key={index}>{member}</li>)
                )}
              </BulletList>
            </CardSection>
          </div>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Background: END */}

        {/* Section - Challenge: START */}
        <CaseStudyTitleDivider title="Problem"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="The internal tool" smaller>
                <p>The original tool was built in PowerBI and had 23 dense columns, complex pharmaceutical jargon, and no visual hierarchy. I knew a direct copy would frustrate customers and risk adoption.</p>
              </CardSection>
                <CaseStudyImage 
                  src={caseStudyAB.ABinternaldash} 
                  alt="Original PowerBI dashboard for the internal sales team"
                  caption="The original PowerBI dashboard for the internal sales team contained a table with 23 columns"
                />
              <CaseStudyImage
                 src={caseStudyAB.ABinitialdesignfilters}
                 alt="Proposed initial design with filters drawer"
                 caption="The proposed initial design I received was a direct port of the internal sales tool, and there was misalignment around feature expectations"
                 spaceBottom
               />
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Challenge: END */}

        {/* Section - Solution: START */}
        <CaseStudyTitleDivider title="Solution"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Stakeholder management" smaller>
                <p>Leadership was pushing to for a direct port of the internal dashboard to meet deadlines. Despite pressures, I advocated for a foundational redesign rather than a direct port by making a case for user adoption.</p>
                <p>Instead of a direct port of the PowerBI dashboard, <b>I proposed a redesigned experience that centered around exploration and clarity.</b></p>
              </CardSection>
              <CardSection sectionTitle="Building alignment" smaller>
                <p>Early on, I uncovered major misalignment on feature expectations for the MVP. I brought stakeholders together, clarified priorities, and helped the team shift from a “ship fast” mindset to a “ship smart” one.</p>
              </CardSection>
              <CardSection smaller sectionTitle="The redesign">
                <BulletList>
                  <li>Replaced overwhelming filters with <b>interactive tables to guide users</b> through the data</li>
                  <li>Converted the KPI unit from dollars to percentages to <b>better align with the actual decision making process</b> of pharmacy managers</li>
                  <li>Merged related data and <b>reduced column count to 10</b> from 23</li>
                  <li>Implemented a feature that converted between ID systems to <b>address a customer pain point</b> discovered during usability testing</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardContainer>
          <CaseStudyImage src={caseStudyAB.ABgif} alt="Redesigned Opportunities Dashboard"/>
        </Windows95FrameInner>
        {/* Section - Solution: END */}

        {/* Section - Impact: START */}
        <CaseStudyTitleDivider title="Impact"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Usability testing">
                <p>To prove the value of interactivity and usability, I built clickable prototypes and usability-tested them with <b>10 customers</b>.</p>
                <p>Out of the two other tools tested alongside it, the Opportunities Dashboard earned the <b>highest usability score of 8.2</b>.</p>
                <div className="py-4">
                  <CaseStudyImage 
                    src={caseStudyAB.ABscore}
                    alt="Redesigned PRoX KPI visualization"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <p>Customers praised clarity, usability, and business value of the product.</p>
                  <div className="flex flex-col gap-6">
                    <p className="quote">It's really helpful for us to see the opportunities laid out better and to be able to play with it.</p>
                    <p className="quote">This would give me a reason to log onto ABC.</p>
                  </div>
                </div>
                {/* </CardSection> */}
              </CardSection>

              <CardSection sectionTitle="C-Suite presentation">
                <p>The dashboard designs and the usability findings were presented at a C-level stakeholders meeting, who <b>unanimously approved</b> the next phase of development, securing buy-in for this proposal originally pitched by the Senior Director.</p>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Impact: END */}

        {/* Section - Delivery: START */}
        <CaseStudyTitleDivider title="Delivery"/>
        <Windows95FrameInner>
          <CardContainer removeSpaceBottom>
            <CardGap>
              <CardSection sectionTitle="Future roadmapping">
                <p>Before transitioning off the project, I established a foundation for future success by analyzing user testing feedback and developing a comprehensive enhancement roadmap. To guide resource allocation, I prioritized features based on urgency and implementation complexity.</p>
              </CardSection>
              <CardSection sectionTitle="MVP launch">
                <p>I led this project for just over a year, successfully launching a working MVP by the end-of-year deadline.</p>
                <p><b>What started as a request to copy an internal sales tool became a customer-focused product that was not only easier to use—but actually gave pharmacy managers a reason to log in.</b></p>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Delivery: END */}
        {/* Full screen image overlay: START */}
        {openImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
            onClick={() => setOpenImage(null)}
          >
            <button
              className="absolute top-0 right-4 md:top-4 md:right-8 font-Doto text-white hover:text-gray-400 text-[2.5rem] p-1 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setOpenImage(null);
              }}
            >
              ×
            </button>
            <img
              src={openImage}
              alt="Full-size"
              className="max-h-screen w-auto max-w-[93%] md:max-w-[90%] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        {/* Full screen image overlay: END */}

    
    </div>
  );
}