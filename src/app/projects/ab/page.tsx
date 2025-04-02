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
    "Sole designer (me)",
    "Team of 6 developers",
    "Research team",
    "Director of Product",
    "Product owner",
  ],
  role: [
    "Discovery",
    "Stakeholder management",
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
          <p className="text-lg">Pharmacy managers were missing critical cost-saving opportunities — all because they had to wait to speak with a sales rep.</p>
          <p className="text-lg">Due to deadline pressure, AmerisourceBergen wanted to simply re-skin this internal dashboard for the customers. I pushed for a different approach.</p>
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

      {/* Section - Team: START */}
      <CaseStudyTitleDivider title="Team"/>
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
        {/* Section - Team: END */}
        {/* Section - Background: START */}
        <CaseStudyTitleDivider title="Background"/>
          <Windows95FrameInner>  
            <CardContainer>
              <CardGap>
                <CardSection sectionTitle="The internal tool">
                  <p>The original tool was built in PowerBI. It had 23 dense columns filled with complex pharmaceutical jargon and lacked visual hierarchy. <b>I knew a direct copy would frustrate customers and risk adoption.</b></p>
                </CardSection>
                  <CaseStudyImage 
                    src={caseStudyAB.ABinternaldash} 
                    alt="Original PowerBI dashboard for the internal sales team"
                    caption="The original PowerBI dashboard for the internal sales team contained a table with 23 columns"
                  />
              </CardGap>
            </CardContainer>  
          </Windows95FrameInner>
        {/* Section - Background: END */}

        {/* Section - Challenge: START */}
        <CaseStudyTitleDivider title="Challenges"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Stakeholder management">
                <p>Leadership strongly pushed for a direct port of the internal dashboard to meet tight deadlines.</p>
                <p>Despite pressure, I advocated for a <b>foundational redesign focused on clarity and exploration</b> by making a case for user adoption.</p>
              </CardSection>
              <CardSection sectionTitle="Building alignment">
                <p>Early on, I uncovered major misalignment on feature expectations for the MVP. I brought stakeholders together, clarified priorities, and helped the team shift from a “ship fast” mindset to a “ship smart” one.</p>
                <div className="py-4">
                  <CaseStudyImage spaceBottom src={caseStudyAB.ABinitialdesignfilters}
                    alt="Proposed initial design with filters drawer"
                    caption="The initial proposed design I was given was a direct port of the internal sales tool, and there were misaligned expectations around features"
                  />
                </div>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Challenge: END */}

        {/* Section - Solution: START */}
        <CaseStudyTitleDivider title="Solution"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection>
                <BulletList>
                  <li>Replaced overwhelming filters with <b>interactive tables to guide users</b> through the data</li>
                  <li>Converted the KPI unit from dollars to percentages to <b>better align with how pharmacy managers actually make decisions</b></li>
                  <li>Merged related data and <b>reduced the column count from 23 to 10</b></li>
                  <li>Implemented a feature that converted between ID systems to <b>address a customer pain point</b> discovered during usability testing</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardContainer>
          <CaseStudyImage src={caseStudyAB.ABgif} alt="Redesigned Opportunities Dashboard"/>
        </Windows95FrameInner>
        {/* Section - Solution: END */}

        {/* Section - Impact: START */}
        <CaseStudyTitleDivider title="Validation"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Customer feedback">
                <p>I built clickable prototypes, collaborating with the research team to test the tool with <b>10 customers</b> and confirmed the redesign’s effectiveness.</p>
                <p>Out of the two other tools tested alongside it, the Opportunities Dashboard earned the <b>highest usability score of 8.2</b>.</p>
                <div className="py-4">
                  <CaseStudyImage 
                    src={caseStudyAB.ABscore}
                    alt="Redesigned PRoX KPI visualization"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <p>Customers praised the clarity, usability, and business value of the product.</p>
                  <div className="flex flex-col gap-6">
                    <p className="quote">It's really helpful for us to see the opportunities laid out better and to be able to play with them.</p>
                    <p className="quote">This would give me a reason to log onto AmerisourceBergen.</p>
                  </div>
                </div>
                {/* </CardSection> */}
              </CardSection>

              <CardSection sectionTitle="C-suite presentation">
                <p>The research team and I presented the Opportunities Dashboard designs alongside the usability findings at a C-level stakeholders meeting.</p>
                <p>The stakeholders unanimously approved the next phase of development, <b>securing buy-in for this proposal</b> originally pitched by the Senior Director.</p>
              </CardSection>
            </CardGap>
          </CardContainer>
          <Image src={caseStudyAB.ABfindings} alt="Slide from the C-suite presentation"/>
        </Windows95FrameInner>
        {/* Section - Impact: END */}

        {/* Section - Delivery: START */}
        <CaseStudyTitleDivider title="Roadmapping"/>
        <Windows95FrameInner>
          <CardContainer removeSpaceBottom>
            <CardGap>
              <CardSection>
                <p>To ensure a smooth handoff, I established a foundation for future success by analyzing user testing feedback and developing a comprehensive <b>future enhancement roadmap.</b></p>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyAB.ABbacklog} alt="Enhancement roadmap" caption="To guide resource allocation, I mapped out features based on urgency per customer feedback and development complexity"/>
                </div>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Delivery: END */}

        {/* Section - Impact: START */}
        <CaseStudyTitleDivider title="Conclusion"/>
        <Windows95FrameInner>
          <CardContainer removeSpaceBottom>
            <CardGap>
              <CardSection>
                <p>I led this project for just over a year, successfully launching a working MVP by the end-of-year deadline.</p>
                <p>What was a simple copy request evolved into a customer-focused product that was not only easier to use but gave AmerisourceBergen users a reason to log on.</p>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Section - Impact: END */}

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