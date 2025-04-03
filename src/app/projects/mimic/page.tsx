"use client"
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BulletList } from "@/components/BulletList";
import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import Windows95FrameInner from "@/components/Windows95FrameInner";

import { caseStudyMimic } from "@/assets/caseStudyImages";
import { projAssets } from "@/assets/projAssets";
// import CaseStudyNav from "@/components/CaseStudyNav";
import { icon } from "@/assets/icon";
import { CardGap } from "@/components/CardGap";
import { CaseStudyImage } from "@/components/CaseStudyImage";


const caseStudyData = {
  team: [
    "Product designer (me)",
    "Design architect",
    "2 frontend developers",
    "Product manager",
    "Chief product officer",
  ],
  role: [
    "User research & strategy",
    "Usability testing",
    "UI design & evolution",
    "Design system development",
    "Brand development",
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
      <CardContainer bgNone fullWidth>
        <CardSection>
          <h1 className="title-1">{currentProject.name}</h1>
          <p className="text-lg">As one of the two founding designers at Mimic, I shipped a technically-driven MVP and evolved it into a user-centered cybersecurity platform while establishing a comprehensive design system and brand identity from scratch.</p>
          <p className="text-lg">A year after I joined, Mimic secured $50 million in funding from Google Ventures. The exceptional design quality was called out by our design partners.</p>
          <div className="quote my-3">
            <p className="mb-2">This is the best looking MVP I've ever seen from a startup.</p>
            <span className="text-[1.1rem] not-italic">— REI, Design partner</span>
          </div>
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

      {/* * * * * Section - Team: START * * * * */}
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

      {/* * * * * Section - Background: START * * * * */}
      <CaseStudyTitleDivider title="Background"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection sectionTitle="Initial MVP delivery">
            <p>When I joined Mimic as one of the founding designers, the goal was clear: <b>Ship an MVP fast to attract early customers and investors.</b> Given the tight timeline and limited access to users, we prioritized technical requirements when building the first version of the platform.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={caseStudyMimic.MimicOld as StaticImageData} alt="Initial MVP version of Node Details" className="border-t border-b"/>
        
        <CardContainer>
          <CardSection>
            <p>This approach allowed us to demonstrate our technical proficiency and launch on schedule. The initial MVP impressed early users with its capabilities, but our post-launch research revealed a critical gap: <b>Proper user research.</b></p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Background: END */}

      {/* * * * * Problem: START * * * * */}
      <CaseStudyTitleDivider title="Research"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardGap>
            <CardSection sectionTitle="Post-launch initiative">
              <p>To address this gap, I worked with the UX architect to spearhead a comprehensive research initiative.</p>
              <BulletList>
                <li><b>Card sorting study</b> to understand how users conceptualized platform information</li>
                <li><b>Interviews with internal users</b> who would be interacting with the platform</li>
                <li>Analysis of <b>discourse in online cybersecurity communities</b> to identify pain points and workflow patterns</li>
              </BulletList>
            </CardSection>
            <CardSection sectionTitle="Key insight">
              <p>The deeper user research uncovered a critical insight that reshaped our product strategy: <b>We weren’t designing for a single user type, but two distinct ones.</b></p>
              {/* Table start */}
              <table className="min-w-full bg-white border border-slate-400/50 text-left text-sm table-fixed shadow-sm">
                <thead className="bg-slate-300 md:bg-slate-200 text-slate-800">                      
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
                      Increasingly important with growing platform maturity
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Table end */}
              <p>This insight led us to prioritize the "Manage" persona in our immediate development cycle to drive what mattered most at the time: <b>Getting nodes deployed across customer systems.</b></p>
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
              <p>Based on our research findings, we reimagined the node navigation to directly reflect the two personas, splitting the Nodes Overview page into <b>“Manage”</b> and <b>“Monitor”</b> sections.</p>              
            </CardSection>
          </CardGap>
        </CardContainer>
        <CaseStudyImage src={caseStudyMimic.MimicNewNodesOverview as StaticImageData} alt="Initial MVP version of Node Details" className="border-t"/>
        
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardGap>
            <CardSection sectionTitle="Node Details redesign">
              <p>Along with refreshing our information architecture, I prioritized redesigning the <b>Node Details page, which is a critical touchpoint</b> for installing, deploying, and troubleshooting the nodes.</p>
              <CardSection smaller sectionTitle="Before">
                <CaseStudyImage src={caseStudyMimic.MimicOld as StaticImageData} alt="Initial MVP version of Node Details" 
                  caption="The initial MVP version of Node Details were laid out linearly with no regard to the user's workflow"
                  className="border-t border-b"
                />
              </CardSection>
            </CardSection>
            <CardSection smaller sectionTitle="After">
                <BulletList>
                  <li>Separated connectivity from the node operational state to reduce confusion</li>
                  <li>Surfaced connectivity details only when issues surfaced, reducing information overload</li>
                  <li>Categorized node events to enable filtering for faster troubleshooting</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardContainer>
          <div className="flex flex-col bg-white">
            <div className="flex flex-col gap-4 mb-8">
              <CaseStudyImage 
                src={caseStudyMimic.MimicNewNodesDetails1 as StaticImageData} 
                alt="Initial MVP version of Node Details" 
              />
              <p className={`caption text-center`}>Node Details page when node is connected</p>
            </div>
            <div className="flex flex-col gap-4 mb-8 md:mb-12 lg:mb-16">
              <CaseStudyImage 
                src={caseStudyMimic.MimicNewNodesDetails2 as StaticImageData} 
                alt="Initial MVP version of Node Details"
              />
              <p className={`caption text-center`}>Node Details page when node is degraded</p>
            </div>
          </div>        
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Configuration experience">
            <p>A major milestone in our roadmap was improving the node configuration process, but early discussions stalled as the team debated priorities.</p>
            <p>To break this deadlock, I…</p>
            <BulletList>
              <li>Designed a comprehensive "Ferrari" version of the configuration feature to align the team's vision</li>
              <li>Scaled back to a focused "skateboard" MVP that began with single-node configurations</li>
              <li>Created a flexible, modular workflow that could grow with our evolving needs</li>
            </BulletList>
          </CardSection>
        </CardContainer>
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/-X2zizt1Kts?si=9Zf5GW3_jhgMpNTI"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className={`bg-white caption text-center pt-4`}>Configuration experience walkthrough for the developers to review</p>
        <CardContainer>
          <CardSection>
            <CardGap>
              <CardSection sectionTitle="Uncovering the third persona" smaller>
                <p>One of the key debates centered on whether to start the configuration process from the node or the configuration file. Based on the assumption that IT operations would have a list of installed nodes they needed to configure, we decided to enter the flow from the node.</p>
                <p>However, user testing revealed <b>a crucial third persona hidden in plain sight: internal configuration engineers</b>.</p>
                <p>These internal users were our real, immediate users. They focused on configuration file development rather than node management, and <b>their workflow centered around rapidly iterating on configuration files.</b></p>

              </CardSection>
              <CardSection sectionTitle="Leveraging flexible design" smaller>
                <p>Fortunately, anticipating the future need for multiple entry points, I had designed modular screens that could be swapped around. My flexible design approach enabled…</p>
                <BulletList>
                  <li>Support for both customer deployment and internal testing scenarios</li>
                  <li>Seamless extension to bulk configuration capabilities</li>
                  <li>Acceleration of our overall development cycle through faster internal iteration</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Solution: END */}

      

      {/* * * * * Additional contributions: START * * * * */}
      <CaseStudyTitleDivider title="Additional contributions"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection sectionTitle="Design system establishment">
            <p>Alongside product design work, I built Mimic's comprehensive design language to ensure visual consistency, scalability, and accessibility across all touchpoints.</p>
          </CardSection>          
        </CardContainer>

        <CaseStudyImage src={caseStudyMimic.MimicDS as StaticImageData} alt="Initial MVP version of Node Details"/>
        
        <CardContainer>
          <CardGap>

            <CardSection>
              <CardSection smaller sectionTitle="Component library">
                <BulletList>
                  <li>Established foundational components with primitive, semantic, and component tokens</li>
                  <li>Created a cohesive set of UI elements based on brand guidelines</li>
                  <li>Set up tokens for light and dark mode capabilities</li>
                </BulletList>
              </CardSection>
              <CardSection smaller sectionTitle="Information architecture framework">
                <BulletList>
                  <li>Analyzed common user workflows to identify repeating page patterns</li>
                  <li>Created templates for recurring page types like "details" views and "overview" </li>
                  <li>Designed information architecture patterns that maintained consistency across different sections</li>
                </BulletList>
              </CardSection>
            </CardSection>

            <CardSection sectionTitle="Brand experience">
              <BulletList>
                <li>Developed unified visual language across various channels and mediums</li>
                <li>Created templates for pitch decks and marketing collateral</li>
                <li>Enabled non-designers to create on-brand materials</li>
              </BulletList>
              <CaseStudyImage src={caseStudyMimic.MimicDiagram as StaticImageData} alt="Architecture diagram for a white paper" caption="Maintaining the brand experience across all touchpoints, like this architecture diagram in one of Mimic's white papers."/>
            </CardSection>

            <CardSection sectionTitle="Accessibility">
              <div className="mt-2 mb-4">
                <p className="bg-slate-200 py-3 px-4 rounded-md text-slate-700">Check out the <a href="https://mimic.com/" target="_blank" rel="noopener noreferrer" className="font-Doto text-blue-800 underline hover:no-underline">Mimic marketing website</a> and do a tab test — the developers and I worked together to ensure keyboard operability, among other accessibility features.</p>
                
              </div>
              <BulletList>
                <li><b>Implemented WCAG compliance standards</b> for the marketing website, ensuring accessibility while protecting the company from lawsuits</li>
                <li>Established <b>guidelines for future accessibility compliance</b></li>
                <li><b>Hand-crafted the hero image</b> for the landing page of the marketing website</li>
              </BulletList>
            </CardSection>
            
          
          </CardGap>
        </CardContainer>
        <Image src={caseStudyMimic.MimicMarketing as StaticImageData} alt="Initial MVP version of Node Details"/>
      </Windows95FrameInner>
      {/* Additional contributions: END */}

      {/* * * * * Impact: START * * * * */}
      <CaseStudyTitleDivider title="Conclusion"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection>
            <p>Google Ventures invested in Mimic amid strong competition from numerous investors, validating our tactical design approach to balance quick wins and long-term vision.</p>
            <p>What started as a technically-driven MVP evolved into a user-centered platform with scalable design foundations, positioning Mimic for long-term success.</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Impact: END */}

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






