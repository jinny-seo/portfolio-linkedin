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
import { caseStudyMimic } from "@/assets/caseStudyImages";
// import CaseStudyNav from "@/components/CaseStudyNav";
import { CardGap } from "@/components/CardGap";
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
    "Research & strategy",
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

      {/* * * * * Section - Background: START * * * * */}
      <CaseStudyTitleDivider title="Background"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardGap>
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
            <CardSection sectionTitle="Initial MVP delivery">
              <p>When I joined Mimic as one of the two founding designers, the goal was clear: <b>Ship an MVP fast to attract early customers and investors.</b></p>
              <p>With limited time and no upfront access to users, we built the first version of the platform based primarily on technical requirements.</p>
              <Image src={caseStudyMimic.MimicOld as StaticImageData} alt="Initial MVP version of Node Details"/>
              <p>The initial MVP was well-received and demonstrated our technical capabilities, but <b>it lacked something foundational: Proper user research.</b></p>
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
              <p>To address the lack of user research, I intitiated the following.</p>
              <BulletList>
                <li><b>Card sorting study</b> to understand how users conceptualized node information</li>
                <li><b>Interviews with internal users</b> who would be interacting with our platform</li>
                <li>Supplementary research through following <b>conversations in online cybersecurity communities</b></li>
              </BulletList>
            </CardSection>
            <CardSection sectionTitle="Research insights">
              <p>The deeper user research uncovered a critical insight: <b>We weren’t designing for one user, but two fundamentally different ones.</b></p>
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
                      This persona would become increasingly important as our platform matured
                    </td>
                  </tr>

                </tbody>
              </table>
              {/* Table end */}
              <p>While we needed to eventually serve both personas, we prioritized the “Manage” persona to drive what mattered most at the time: <b>Getting nodes deployed across customer systems.</b></p>
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
              <p>The insight informed our information architecture strategy for the Nodes navigation.</p>
              <p>We restructured the platform’s information architecture to reflect the two personas, separating the node navigation into <b>Manage</b> and <b>Monitor</b> sections. This separation streamlined access to features based on each persona’s workflow.</p>
              
            </CardSection>
          </CardGap>
        </CardContainer>
        <Image src={caseStudyMimic.MimicNewNodesOverview as StaticImageData} alt="Initial MVP version of Node Details"/>
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Node details redesign">
            <p>With our refreshed information architecture in, I prioritized redesigning the Node Details page, a key touchpoint for IT professionals during installation, deployment, and troubleshooting.</p>
            <CardSection smaller sectionTitle="Updates">
              <BulletList>
                <li>Separated connectivity from the node operational state to reduce confusion</li>
                <li>Surfaced connectivity details only when there was an active or impending problem</li>
                <li>Categorized node events to allow filtering for relevant details during troubleshooting</li>
              </BulletList>
            </CardSection>
          </CardSection>
        </CardContainer>
        <Image src={caseStudyMimic.MimicNewNodesDetails1 as StaticImageData} alt="Initial MVP version of Node Details"/>
        <div className="hidden bg-white lg:grid lg:grid-cols-2 lg:p-4 lg:gap-4">
          <Image src={caseStudyMimic.MimicNewNodesDetails2 as StaticImageData} alt="Initial MVP version of Node Details"/>
          <Image src={caseStudyMimic.MimicNewNodesDetails3 as StaticImageData} alt="Initial MVP version of Node Details"/>
        </div>

        
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Configuration experience">
            <p>A crucial milestone in our roadmap for the IT operations persona was improving the node configuration process. However, early discussions stalled as the team debated feature priorities without a shared understanding of the user experience.</p>
            <p>To break this deadlock, I designed a comprehensive "Ferrari" version of the configuration feature to align our vision, then deliberately scaled back to a focused "skateboard" MVP that started with a single-node configuration.</p>
            <p>This flow started from the node (as opposed to from the configuration file), based on the assumption that IT operations users would have a list of installed nodes they needed to configure.</p>
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
        <CardContainer>
          <CardSection>
            <CardSection sectionTitle="Uncovering the third persona" smaller>
              <p>However, user testing revealed that we had failed to account for a third crucial persona hidden in plain sight: <b>Internal configuration engineers</b> who needed to rapidly iterate on node configurations.</p>
              <p>These were our actual, immediate users were internal teams repeatedly deploying test nodes and tweaking configurations. Their workflow leaned more heavily on starting from the configuration file itself.</p>
            </CardSection>
            <CardSection sectionTitle="Leveraging flexible design" smaller>
              <p>Fortunately, I had designed the configuration wizard to be flexible, allowing it to work from both entry points. The flexiblility also allowed the workflow to easily estend to support bulk configurations</p>
              <p>By delivering a solution that worked for both customer deployment and internal testing scenarios, we not only ensured the effectiveness of our security platform but also enabled our product team to rapidly iterate on configuration files before deployment to customers, accelerating our overall development cycle.</p>
            </CardSection>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Solution: END */}

      

      {/* * * * * Additional contributions: START * * * * */}
      <CaseStudyTitleDivider title="Additional contributions"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardGap>
            <p>Alongside my product work, I also built out Mimic’s <b>design language</b>, ensuring visual consistency, scalability, and accessibility—from components to pitch decks to the marketing site.</p>
          <CardSection sectionTitle="Design system establishment">
              
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
                  <li>Created standardized template for recurring page types like "details" views and "overview" </li>
                  <li>Created information architecture patterns that maintained consistency across different sections</li>
                </BulletList>
              </CardSection>
            </CardSection>
            </CardGap>
            </CardContainer>
            <Image src={caseStudyMimic.MimicDS as StaticImageData} alt="Initial MVP version of Node Details"/>
            <CardContainer>
            <CardGap>
            <CardSection sectionTitle="Brand experience">
              <CardSection smaller sectionTitle="Communication materials">
                <BulletList>
                  <li>Developed unified visual language across various channels and mediums</li>
                  <li>Created templates for pitch decks and marketing collateral</li>
                  <li>Enabled non-designers to create on-brand materials</li>
                </BulletList>
              </CardSection>
              <CardSection smaller sectionTitle="Public presence">
                <BulletList>
                  <li><b>Implemented WCAG compliance standards</b> to protect the company from accessibility lawsuits</li>
                  <li>Established <b>guidelines for future accessibility compliance</b></li>
                  <li><b>Hand-crafted the hero section</b> for the landing page of the marketing website</li>
                </BulletList>
                <p>Check out the <a href="https://mimic.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline font-Doto">Mimic marketing website</a> and tab through — I worked with the devs to ensure keyboard operability, among other accessibility features.</p>
                
              </CardSection>
            </CardSection>
          </CardGap>
         
        </CardContainer>
      <Image src={caseStudyMimic.MimicMarketing as StaticImageData} alt="Initial MVP version of Node Details"/>
      </Windows95FrameInner>
      {/* Additional contributions: END */}

      {/* * * * * Impact: START * * * * */}
      <CaseStudyTitleDivider title="Impact"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection>
            <p>Google Ventures invested in Mimic amid strong competition from numerous investors, validating our tactical design approach to balance quick wins and long-term vision.</p>
            <p>What started as a technically-driven MVP evolved into a user-centered platform supported by scalable design foundations—positioning Mimic for long-term success.</p>
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






