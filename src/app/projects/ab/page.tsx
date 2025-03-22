"use client"
import { usePathname } from "next/navigation";
import { CardContainer } from "@/components/CardContainer";
import { BulletList } from "@/components/BulletList";
import { CaseStudyContainer } from "@/components/CaseStudyContainer";
import { NavItem } from "@/components/NavItem";
import Image, { StaticImageData} from "next/image";

import { projAssets } from "@/assets/projAssets";
import { caseStudyAB } from "@/assets/caseStudyImages";

import Windows95FrameInner from "@/components/Windows95FrameInner";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";

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
  heroImage: caseStudyAB.ABhero,
  heroImageDesc: "AB project hero image",
}

export default function abProject() {

  const pathname = usePathname();
  const currentPath = pathname.replace("/projects/", "");

  const currentIndex = projAssets.findIndex(project => project.link === currentPath);
  const currentProject = projAssets[currentIndex];

  const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
  const nextProject = projAssets[(currentIndex + 1) % projAssets.length];

  
    return (
      <div>
        <Windows95FrameOuter label={currentProject.company} date={currentProject.date} duration={currentProject.duration}>

          <CaseStudyHeader
                  title={currentProject.name}
                  company={currentProject.company} 
                  date={currentProject.date} 
                  duration={currentProject.duration} 
                  team={caseStudyData.team} 
                  role={caseStudyData.role} 
                  heroImage={caseStudyData.heroImage} 
                  heroImageDesc={caseStudyData.heroImageDesc} >
            <p>I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities.</p>
            <p className="mb-0">Despite push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience.</p>
          </CaseStudyHeader>

          {/* Case study content: START */}
          <Windows95FrameInner>
            <div className="bg-white">
              <CardContainer>
                <h2 className="title-2">Background</h2>
                <p>Pharmacy managers could only access cost-saving alternatives through sales rep phone calls, creating three key problems:</p>
                <BulletList>
                  <li>Sales reps spent valuable time explaining savings rather than building strategic relationships</li>
                  <li>Customers missed time-sensitive opportunities between scheduled calls</li>
                  <li>Access to savings information depended entirely on sales rep availability</li>
                </BulletList>
                <p>Our vision was to transform this internal PowerBI dashboard into a self-service external tool where customers could independently discover savings opportunities.</p>
              </CardContainer>
              
              <CardContainer>
                <h2 className="title-2">Stakeholder management</h2>
                <div className="flex flex-col">
                  <div>
                    <p>Initially, leadership pushed to port our internal PowerBI dashboard directly to customers to meet tight deadlines. Despite deadline pressures, I advocated for a foundational redesign rather than a direct port by making a case for user adoption.</p>
                  </div>
                  <div>
                    <Image className="lg:max-w-[650px]" src={caseStudyAB.ABinternaldash} alt="Original internal PowerBI dashboard"/>
                    <p className="caption">Original internal PowerBI dashboard contained a table with 23 columns.</p>
                  </div>
                  <div>
                    <Image className="shadow-md lg:max-w-[650px]" src={caseStudyAB.ABinitialdesignfilters} alt="Proposed initial design with filters drawer"/>
                    <p className="caption">The proposed initial design I received was a direct port of the internal sales tool and had a host of usability issues.</p>
                  </div> 
                  <p>Additionally, I identified that there was misalignment around feature expectations. I resolved misunderstandings around MVP requirements, getting all stakeholders on the same page. This strategic pivot informed our navigation design, prioritizing user understanding and engagement.</p>
                </div>
              </CardContainer>
            </div>
          </Windows95FrameInner>
          <Windows95FrameInner>
            <h2 className="font-Doto p-4 m-0 text-xl">Solution</h2>
          
          </Windows95FrameInner>
          <Windows95FrameInner>
            <div className="bg-white">
              <CardContainer>
                <h2 className="title-2">Navigation strategy</h2>
                <p>When analyzing the PowerBI dashboard, I identified that traditional filters alone would overwhelm users with pharmaceutical jargon. Instead, I advocated for an interactive approach where...</p>
                <BulletList>
                  <li>Upper tables acted as intuitive visual filters</li>
                  <li>Complex terminology was contextualized within familiar data</li>
                  <li>Selecting accounts/products dynamically filtered the detailed view</li>
                </BulletList>
                <p>While the initial MVP scope called for static tables to expedite delivery, I built a business case for these interactions by...</p>
                <BulletList>
                  <li>Demonstrating how interactive elements would significantly reduce the learning curve</li>
                  <li>Presenting clickable prototypes to illustrate the usability benefits</li>
                  <li>Showing how this approach would encourage exploration of cost-saving opportunities</li>
                </BulletList>
                <Image className="lg:max-w-[650px]" src={caseStudyAB.ABgif} alt="Filter action for opps dash"/>
              </CardContainer>
              
              <CardContainer>
                <h2 className="title-2">KPI visualization</h2>
                <p>PRxO contribution metrics are critical for customers of AmerisourceBergen, as reaching certain thresholds impacts available discounts.</p>
                <p>However, there was a critical disconnect: AmerisourceBergen measured PRxO compliance in <b>percentages for discount qualification</b>, but the source design only displayed <b>absolute dollar amounts.</b></p>
                <p>My solution was to transform this KPI into a more active decision-making tool by...</p>
                <BulletList>
                  <li>Redesigning the metrics display to emphasize percentage contribution supported by dollar amounts</li>
                  <li>Creating a prominent KPI showing total PRxO contribution with a companion percentage showing potential increase</li>
                  <li>Connecting these metrics to the interactive filtering system so users could see real-time updates as they explored different product alternatives</li>
                </BulletList>
                <p>This approach directly aligned the interface with the actual business decision-making process, allowing users to immediately see how close they were to discount thresholds to identify the most effective product substitutions.</p>
                <Image className="lg:max-w-[650px] pt-8 pb-12" src={caseStudyAB.ABimprovement2} alt="PRoX KPI visualization"/>
              </CardContainer>

              <CardContainer>
            <h2 className="title-2">Usability enhancements</h2>
            <p>Finally, I identified and addressed several critical barriers to effective use of the application.</p>
            <h3 className="title-3">Streamlined information architecture</h3>
            <BulletList>
              <li>Reducing 23 jargon-heavy columns to 10 essential ones</li>
              <li>Grouping related information logically</li>
              <li>Translating internal terminology into user-friendly language</li>
            </BulletList>
            <h3 className="title-3">Clear visual hierarchy</h3>
            <BulletList>
              <li>Clearly separated Accounts, Products, and Opportunities sections</li>
              <li>Implemented visual indicators for savings potential</li>
              <li>Created distinct styling for interactive elements</li>
            </BulletList>
            <h3 className="title-3">Enhanced product identification</h3>
            <p>A pain point I discovered through customer and stakeholder interviews was that users were translating between different product identification systems (ABC, ABC8, NDC) using lookup tools.</p>
            <Image className="lg:max-w-[650px]" src={caseStudyAB.ABimprovement3} alt="Dropdown to switch between product IDs"/>
            <p>My solution introduced a dropdown built directly into the product that seamlessly switches between ID systems without disrupting workflow or losing context.</p>
            
          </CardContainer>
            </div>
          </Windows95FrameInner>
          
          
          
          {/* Case study content: END */}

        </Windows95FrameOuter>
              
      
      
        <CaseStudyContainer>



          


          




            {/* Impact */}
            <CardContainer>
              <h2 className="title-2">Impact</h2>
              <p>The prototype was tested with <b>10 customers</b> and achieved <b>8.2 rating</b>, the highest out of the three tools tested. Customers praised clarity, usability, and business value of the product.</p>
              <Image className="lg:max-w-[650px]" src={caseStudyAB.ABscore} alt="Original internal PowerBI dashboard"/>  
              <h3 className="title-3">User feedback</h3>
              <p className="quote">It's really helpful for us to see the opportunities laid out better and to be able to play with it.</p>
              <p className="quote">This would give me a reason to log onto ABC.</p>
            </CardContainer>

            <CardContainer>
            <h3 className="title-3">C-Suite presentation</h3>
              <p className="">The dashboard designs and the usability findings were presented at a C-level stakeholders meeting, who enthusiastically approved the next phase of development, securing buy-in for this proposal originally pitched by the Senior Director.</p>
            </CardContainer>
            
            {/* Figma prototype iframe: START */}
            <div className="relative w-full">
              <div className="relative w-full">
                <iframe className="top-0 left-0 w-full aspect-[16/12]" src="https://embed.figma.com/proto/Fp1MLLi2sW5IoULLeFjHj4/AmerisourceBergen?page-id=25%3A23163&node-id=118-25938&viewport=239%2C474%2C0.19&scaling=fit-width&device-frame=0&content-scaling=fixed&embed-host=share&hide-ui=1" />
              </div>
            </div>
            {/* Figma prototype iframe: END */}
            
            {/* MVP delivery */}
            <CardContainer>
              <h2 className="title-2">MVP delivery</h2>
              <p>I led this project for just over a year, successfully launching a working MVP by the end-of-year deadline. My role included...</p>
              <BulletList>
                <li>Facilitating feature prioritization sessions with product and engineering teams</li>
                <li>Driving implementation through detailed Jira tickets and rigorous design QA</li>
                <li>Creating a strategic roadmap for future development phases</li>
              </BulletList>
            </CardContainer>

            {/* Future roadmapping */}
            <CardContainer>
              <h2 className="title-2">Future roadmapping</h2>
              <p>Before transitioning off the project, I established a foundation for future success by analyzing user testing feedback and developing a comprehensive enhancement roadmap. I prioritized features based on urgency and implementation complexity to guide resource allocation.</p>
              <h3 className="title-3">Short-term enhancements</h3>
              <BulletList>
                <li>Collapsible rows for managing multiple alternate options</li>
                <li>"Show X more..." patterns for improved discovery</li>
                <li>Export functionality for external analysis</li>
              </BulletList>
              <h3 className="title-3">Long-term enhancements</h3>
              <BulletList>
                <li>Workflow assistance features including hide/favorite capabilities for alternative products</li>
                <li>Overview dashboard page for executive-level insights</li>
                <li>Permission controls for sensitive data</li>
              </BulletList>
            </CardContainer>

            <CardContainer>
              <h2 className="title-2">Impact</h2>
              <p>The redesigned platform delivered significant business value.</p>
              <BulletList>
                <li>Transformed complex pricing data into clear decision support for customers</li>
                <li>Established new design standards for translating internal tools into customer-facing products</li>
                <li>Positioned the company to drive increased adoption of their PRxO program</li>
              </BulletList>
            </CardContainer>


          </CaseStudyContainer>
          
          </div>
     
    );
  }