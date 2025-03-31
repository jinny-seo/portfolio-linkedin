"use client"
import { usePathname } from "next/navigation";
import Image, { StaticImageData} from "next/image";

import Windows95FrameInner from "@/components/Windows95FrameInner";
import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import { BulletList } from "@/components/BulletList";
import { CaseStudyImage } from "@/components/CaseStudyImage";

import { projAssets } from "@/assets/projAssets";
import { caseStudyMimic } from "@/assets/caseStudyImages";
import CaseStudyNav from "@/components/CaseStudyNav";
import { CardGap } from "@/components/CardGap";
import { useState, useEffect } from "react";
import { icon } from "@/assets/icon";

const caseStudyData = {
  team: [
    "Product Designer (Me)",
    "Design Architect",
    "2 Frontend Developers",
    "Product Manager",
    "Chief Product Officer",
  ],
  role: [
    "Research & Strategy",
    "Usability testing",
    "UI evolution",
    "Design system development",
    "Brand application",
  ],
  hero: projAssets[1].imageSecondary,
  heroDesc: "Mimic project hero image",
}

export default function crayonProject() {
  const pathname = usePathname();
  const currentPath = pathname.replace("/projects/", "");

  const currentIndex = projAssets.findIndex(project => project.link === currentPath);
  const currentProject = projAssets[currentIndex];
  const [openImage, setOpenImage] = useState<string | null>(null);

// Scroll lock
useEffect(() => {
  if (openImage) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [openImage]);

// ESC key handler
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpenImage(null);
    }
  };

  if (openImage) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [openImage]);


  return (
    <div>
      {/* <CaseStudyNav/> */}
      <CardContainer bgNone fullWidth>
        <CardSection>
          <h1 className="title-1">{currentProject.name}</h1>
          <p className="text-lg">As one of the two founding designers at Mimic, I shipped the technically-driven MVP platform and evolved it into a user-centered solution, while setting up the design system and brand expression from scratch.</p>
          <p className="text-lg">A year after I joined, Mimic secured $50 million in funding from Google Ventures.</p>          
          <div className="quote my-3">
            <p className="mb-2">This is the best looking MVP I've ever seen from a startup.</p>
            <span className="text-[1.1rem] not-italic">— REI, Design partner</span>
          </div>
          
        </CardSection>
      </CardContainer>
      
      {/* * * * * Hero image: START * * * * */}
      <Windows95FrameInner>
        <div className="relative group w-fit cursor-zoom-in" 
        onClick={() => setOpenImage(caseStudyData.hero.src)}>
          <Image
            src={caseStudyData.hero as StaticImageData}
            alt={caseStudyData.heroDesc || "Hero image"}
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

      {/* * * * * Section - Background: START * * * * */}
      <CaseStudyTitleDivider title="Background"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardGap>
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
            <CardSection sectionTitle="Initial MVP delivery">
              <p>To secure their first customers and investors, Mimic needed to quickly ship an MVP that allows customers to monitor and manage security agents (nodes) across their systems. </p>
              <p>With limited time for upfront user research, we built the first iteration of the platform based primarily on technical requirements while establishing the foundations of the Mimic design system.</p>
            </CardSection>
          </CardGap>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Background: END */}

      {/* * * * * Problem: START * * * * */}
      <CaseStudyTitleDivider title="Problem"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardGap>
            <CardSection sectionTitle="Post-launch initiative">
              <p>While the MVP successfully demonstrated our technical capabilities, internal user feedback quickly revealed opportunities for improvement.</p>
              <p>To address this gap,  I initiated a deeper research process to understand our users.</p>
              <BulletList>
                <li>Led a card sorting study to understand how users conceptualized node information</li>
                <li>Conducted supplementary research through cybersecurity communities (including Reddit's cybersecurity subreddit)</li>
                <li>Interviewed IT operations users who would be interacting with our platform</li>
              </BulletList>
            </CardSection>
            <CardSection sectionTitle="Research insights">
              
                <p>This research revealed that we were serving two fundamentally different user types with distinct needs and workflows.</p>
              
                {/* <div className="overflow-x-auto my-4"> */}
                  <table className="min-w-full bg-white border border-slate-400/50 text-left text-sm table-fixed shadow-sm">

                    <thead className="bg-slate-300 text-slate-800">                      
                      <tr>
                        <th className="hidden md:table-cell w-[25%] p-2 border-slate-400"></th>
                        <th className="w-[37.5%] p-2 border-slate-400">Manage<br/>(IT Operations)</th>
                        <th className="w-[37.5%] p-2 border-slate-400">Monitor<br/>(Security Analysts)</th>
                      </tr>
                    </thead>
                    
                    <tbody className="bg-white text-slate-700">
                      
                      <tr className="table-row md:hidden">
                        <td colSpan={2} className="p-2 font-semibold text-slate-600 bg-slate-200"> 
                          Primary role
                        </td>
                      </tr>

                      <tr>
                        <td className="hidden md:table-cell p-2 border-b border-slate-300 font-semibold text-slate-600">
                          Primary role
                        </td>
                        <td className="p-2 border-b border-slate-300">
                          Deploy and maintain security agents
                        </td>
                        <td className="p-2 border-b border-slate-300">
                          Investigating security events and incidents
                        </td>
                      </tr>


                      <tr className="table-row md:hidden">
                        <td colSpan={2} className="p-2 font-semibold text-slate-600 bg-slate-200"> 
                          Key concerns
                        </td>
                      </tr>

                      <tr>
                        <td className="hidden md:table-cell p-2 border-b border-slate-300 font-semibold text-slate-600">
                          Key concerns
                        </td>
                        <td className="p-2 border-b border-slate-300">
                          Connectivity status, credential management, configurations, operational health
                        </td>
                        <td className="p-2 border-b border-slate-300">
                          Timeline of events, severity assessment, threat detection
                        </td>
                      </tr>


                      <tr className="table-row md:hidden">
                        <td colSpan={2} className="p-2 font-semibold text-slate-600 bg-slate-200"> 
                          Urgency
                        </td> 
                      </tr>

                      <tr>
                        <td className="hidden md:table-cell p-2 font-semibold text-slate-600">
                          Urgency
                        </td>
                        <td className="p-2">
                          Critical for our near-term growth: Getting security agents deployed
                        </td>
                        <td className="p-2">
                          This persona would become increasingly important as our platform matured
                        </td>
                      </tr>

                    </tbody>
                  </table>
                {/* </div> */}

                <p>While we needed to eventually serve both personas, we determined that focusing on the "Manage" persona would address our immediate growth challenge—getting our security agents deployed across customer systems.</p>
              
            </CardSection>
            



          </CardGap>
        </CardContainer>
      </Windows95FrameInner>
      {/* Problem: END */}

      {/* * * * * Solution: START * * * * */}
      <CaseStudyTitleDivider title="Solution"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardGap>
            <CardSection sectionTitle="Information architecture update">
              <p>The research findings informed our information architecture strategy for the nodes navigation.</p>
              <p>We evolved the menu structure to include two distinct sections that reflected our persona split: "Manage" for IT operations focused on deployment and configuration, and "Monitor" for security professionals tracking threats.</p>
              <p>This clear separation allowed each user type to efficiently access the tools and information most relevant to their specific workflows while maintaining a cohesive platform experience.</p>
            </CardSection>
            <CardSection sectionTitle="Node details redesign">
              <p>With our refreshed information architecture in place, we prioritized redesigning the node details page as our first major UX enhancement.</p>
              <p>The node details page is a critical touchpoint for IT operations teams during customer onboarding and daily management tasks.</p>
              <p>Ensuring clear communication of the connectivity status and its related information was essential to improving the installation and deployment experience.</p>
              <BulletList>
                <li>Separated connectivity status from operational state, showing detailed connectivity information only when nodes weren't optimally connected</li>
                <li>Added warning states for upcoming credential expiration</li>
                <li>Provided timestamp context for all state changes</li>
              </BulletList>
            </CardSection>
          </CardGap>
        </CardContainer>
      </Windows95FrameInner>
      {/* Solution: END */}

      {/* * * * * Additional contributions: START * * * * */}
      <CaseStudyTitleDivider title="Additional contributions"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardGap>
            <CardSection sectionTitle="Design system establishment">
              <p>In parallel to my core product design responsibilities, I also developed a design system that standardized our interface elements while allowing for expansion to prepare for future growth.</p>
              <CardSection smaller sectionTitle="Component library">
                <BulletList>
                  <li>Established foundational components with primitive, semantic, and component tokens</li>
                  <li>Created a cohesive set of UI elements based on brand guidelines</li>
                  <li>Built light/dark mode switching capabilities</li>
                </BulletList>
              </CardSection>
              <CardSection smaller sectionTitle="Information architecture framework">
                <BulletList>
                  <li>Analyzed common user workflows to identify repeating page patterns</li>
                  <li>Created standardized template for recurring page types like "details" views and "overview" </li>
                  <li>Created information architecture patterns that maintained consistency across different sections</li>
                </BulletList>
              </CardSection>
            </CardSection>
            <CardSection sectionTitle="Brand experience">
              <p>Additionally, I extended our visual style to internal and external touchpoints to create a unified brand experience beyond the product interface.</p>
              <CardSection smaller sectionTitle="Communication materials">
                <BulletList>
                  <li>Developed unified visual language across various channels and mediums</li>
                  <li>Created templates for pitch decks and marketing collateral</li>
                  <li>Enabled non-designers to create on-brand materials</li>
                </BulletList>
              </CardSection>
              <CardSection smaller sectionTitle="Marketing website">
                <BulletList>
                  <li>Implemented WCAG 2.1 AA compliance standards to protect the company from accessibility lawsuits</li>
                  <li>Established guidelines for future accessibility compliance</li>
                  <li>Created the hero image for the landing page</li>
                </BulletList>
              </CardSection>
            </CardSection>
          </CardGap>
        </CardContainer>
      </Windows95FrameInner>
      {/* Additional contributions: END */}

      {/* * * * * Impact: START * * * * */}
      <CaseStudyTitleDivider title="Impact"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection sectionTitle="Information architecture update">
            <p>Google Ventures invested in Mimic amid strong competition from numerous investors, validating our tactical design approach to balance quick wins and long-term vision.</p>
            <p>My strategic product work created immediate value while establishing foundations that could grow with the team, helping Mimic succeed beyond initial funding.</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Impact: END */}

      {/* Full screen image overlay */}
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

    
    </div>
  );
}






