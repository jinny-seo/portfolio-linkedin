"use client"
import { usePathname } from "next/navigation";
import Image, { StaticImageData} from "next/image";

import { CardContainer } from "@/components/CardContainer";
import { BulletList } from "@/components/BulletList";
import { CaseStudyContainer } from "@/components/CaseStudyContainer";
import { NavItem } from "@/components/NavItem";

import Windows95FrameInner from "@/components/Windows95FrameInner";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import { CardSection } from "@/components/CardSection";
import { CaseStudyImage } from "@/components/CaseStudyImage";

import { projAssets } from "@/assets/projAssets";
import { caseStudyAB } from "@/assets/caseStudyImages";

const caseStudyData = {
  team: [
    "Sole designer (Me)",
    "Director of Product",
    "Product Owner",
    "Team of 6 developers",
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
  const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
  const nextProject = projAssets[(currentIndex + 1) % projAssets.length];

    return (      
      <Windows95FrameOuter label={currentProject.company} date={currentProject.date} duration={currentProject.duration}>
        <CaseStudyHeader
            title={currentProject.name}
            company={currentProject.company} 
            date={currentProject.date} 
            duration={currentProject.duration} 
          >
          <p>I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities.</p>
          <p className="mb-0">Despite push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience.</p>
        </CaseStudyHeader>

        <Windows95FrameInner>
          <Image src={caseStudyData.hero as StaticImageData} alt={caseStudyData.heroDesc || "Hero image"}/>
        </Windows95FrameInner>

        {/* Section - Background: START */}
        <CaseStudyTitleDivider title="Background"/>
        <Windows95FrameInner>  
          <CardContainer>
            <div className="grid grid-cols-2 gap-6">
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

        {/* Section - Background: START */}
        <CaseStudyTitleDivider title="Problem"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <p>Pharmacy managers could only access cost-saving alternatives through sales rep phone calls, creating three key problems:</p>
              <BulletList>
                <li>Sales reps spent valuable time explaining savings rather than building strategic relationships</li>
                <li>Customers missed time-sensitive opportunities between scheduled calls</li>
                <li>Access to savings information depended entirely on sales rep availability</li>
              </BulletList>
              <p>Our vision was to transform this internal PowerBI dashboard into a self-service external tool where customers could independently discover savings opportunities.</p>
            </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          {/* Section - Background: END */}

          {/* Section - Challenge: START */}
          <CaseStudyTitleDivider title="Challenges"/>

          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="Stakeholder management">
                <p>Initially, leadership pushed to port our internal PowerBI dashboard directly to customers to meet tight deadlines. Despite pressures, I advocated for a foundational redesign rather than a direct port by making a case for user adoption.</p>
                <p>This strategic pivot informed our navigation design, prioritizing user understanding and engagement.</p>
                <CaseStudyImage 
                  src={caseStudyAB.ABinternaldash} 
                  alt="Original PowerBI dashboard for the internal sales team"
                  caption="The original PowerBI dashboard for the internal sales team contained a table with 23 columns"
                />
              </CardSection>
              <CardSection sectionTitle="Requirements discovery">
                <p>Additionally, I discovered and resolved misalignment around feature expectations for the MVP, getting all stakeholders on the same page.</p>
                <CaseStudyImage 
                  src={caseStudyAB.ABinitialdesignfilters} 
                  alt="Proposed initial design with filters drawer"
                  caption="The proposed initial design I received was a direct port of the internal sales tool, and there was misalignment around feature expectations"
                  spaceBottom
                />
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          {/* Section - Challenge: END */}

          {/* Section - Solution: START */}
          <CaseStudyTitleDivider title="Solution"/>
          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="Navigation strategy">
                <p>When analyzing the PowerBI dashboard, I identified that traditional filters alone would overwhelm users with pharmaceutical jargon.</p>
                <CardSection smaller sectionTitle="My approach">
                  <p>Instead, I advocated for an interactive approach where...</p>
                  <BulletList>
                    <li>Upper tables acted as intuitive visual filters</li>
                    <li>Complex terminology was contextualized within familiar data</li>
                    <li>Selecting accounts/products dynamically filtered the detailed view</li>
                  </BulletList>
                </CardSection>
                <CaseStudyImage 
                  src={caseStudyAB.ABgif} 
                  alt="Gif showing the navigation strategy for the redesigned Opportunities Dashboard"
                />
                <p>While the initial MVP scope called for static tables to expedite delivery, I built a business case for these interactions by...</p>
                <BulletList>
                  <li>Demonstrating how interactive elements would significantly reduce the learning curve</li>
                  <li>Presenting clickable prototypes to illustrate the usability benefits</li>
                  <li>Showing how this approach would encourage exploration of cost-saving opportunities</li>
                </BulletList>
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          
          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="KPI visualization">
                <p>PRxO contribution metrics are critical for customers of AmerisourceBergen, as reaching certain thresholds impacts available discounts.</p>
                <p>However, there was a critical disconnect: AmerisourceBergen measured PRxO compliance in <b>percentages for discount qualification</b>, but the source design only displayed <b>absolute dollar amounts.</b></p>
                <CardSection smaller sectionTitle="My approach">
                  <p>My solution emphasized the PRxO contributions amount in percentages, with the absolute dollar value to the side, aligning the metric with the actual business decision-making process.</p>
                  <CaseStudyImage 
                    src={caseStudyAB.ABimprovement2}
                    alt="Redesigned PRoX KPI visualization"
                  />
                  <p>This allowed the users to immediately see how close they were to discount thresholds in percentages to identify the most effective product substitutions.</p>
                </CardSection>
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>

          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="Usability enhancements">
                <p>Finally, with my redesign, I addressed several critical usability issues.</p>
                <BulletList>
                  <li>The interal PowerBI tool had 23 columns</li>
                  <li>Fatigue due to information density, color overuse, and lack of visual hierarchy</li>
                  <li>Users were using external tools to work around multiple product identification systems</li>
                </BulletList>
                <CardSection smaller sectionTitle="My approach">
                  <BulletList>
                    <li>Merged related data to reduced column count to 10 from 23</li>
                    <li>Clearly separated Accounts, Products, and Opportunities sections and reserved visual indicators to call out savings potential</li>
                    <li>Implemented a built-in dropdown into the products table to switch between ID systems without disrupting workflow</li>
                  </BulletList>
                  <CaseStudyImage 
                    src={caseStudyAB.ABimprovement3}
                    alt="Redesigned PRoX KPI visualization"
                  />
                </CardSection>
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          {/* Section - Solution: END */}

          {/* Section - Impact: START */}
          <CaseStudyTitleDivider title="Impact"/>
          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="Usability testing">
                <p>We tested the initial prototype of the Opportunities Dashboard with <b>10 customers</b> and achieved <b>8.2 rating</b>, the highest out of the three tools tested.</p>
                <CaseStudyImage 
                    src={caseStudyAB.ABscore}
                    alt="Redesigned PRoX KPI visualization"
                  />
                {/* <CardSection smaller sectionTitle="Customer feedback"> */}
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
              <p>The dashboard designs and the usability findings were presented at a C-level stakeholders meeting, who enthusiastically approved the next phase of development, securing buy-in for this proposal originally pitched by the Senior Director.</p>
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          {/* Section - Impact: END */}

          {/* Section - Delivery: START */}
          <CaseStudyTitleDivider title="Delivery"/>
          <Windows95FrameInner>
            <CardContainer removeSpaceBottom>
              <CardSection sectionTitle="MVP launch">
                <p>I led this project for just over a year, successfully launching a working MVP by the end-of-year deadline. During this time, I...</p>
                <BulletList>
                  <li>Facilitated feature prioritization sessions with product and engineering teams</li>
                  <li>Drove implementation through detailed Jira tickets and rigorous design QA</li>
                  <li>Created a strategic roadmap for future development phases based on findings from usability testing and stakeholder feedback</li>
                </BulletList>
              </CardSection>
            </CardContainer>
            {/* Figma prototype iframe: START */}
            <div className="relative w-full">
              <div className="relative w-full">
                <iframe className="top-0 left-0 w-full aspect-[16/12]" src="https://embed.figma.com/proto/Fp1MLLi2sW5IoULLeFjHj4/AmerisourceBergen?page-id=25%3A23163&node-id=118-25938&viewport=239%2C474%2C0.19&scaling=fit-width&device-frame=0&content-scaling=fixed&embed-host=share&hide-ui=1" />
              </div>
            </div>
            {/* Figma prototype iframe: END */}
          </Windows95FrameInner>
          {/* Section - Delivery: END */}          
        
          {/* Section - Future roadmapping: START */}
          <CaseStudyTitleDivider title="Future roadmapping"/>
          <Windows95FrameInner>
            <CardContainer>
              <CardSection sectionTitle="Feature prioritization">
                <p>Before transitioning off the project, I established a foundation for future success by analyzing user testing feedback and developing a comprehensive enhancement roadmap.</p>
                <p>To guide resource allocation, I prioritized features based on urgency and implementation complexity.</p>
                <CardSection smaller sectionTitle="Short-term enhancements">
                  <BulletList>
                    <li>Collapsible rows for managing multiple alternate options</li>
                    <li>"Show X more..." patterns for improved discovery</li>
                    <li>Export functionality for external analysis</li>
                  </BulletList>
                </CardSection>
                <CardSection smaller sectionTitle="Long-term enhancements">
                  <BulletList>
                    <li>Workflow assistance features including hide/favorite capabilities for alternative products</li>
                    <li>Overview dashboard page for executive-level insights</li>
                    <li>Permission controls for sensitive data</li>
                  </BulletList>
                </CardSection>
              </CardSection>
            </CardContainer>
          </Windows95FrameInner>
          {/* Section - Future roadmapping: END */}          

      </Windows95FrameOuter>
    );
  }