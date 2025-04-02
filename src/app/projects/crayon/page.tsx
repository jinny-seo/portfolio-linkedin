"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image, { StaticImageData} from "next/image";

import Windows95FrameInner from "@/components/Windows95FrameInner";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { BulletList } from "@/components/BulletList";
import { CaseStudyImage } from "@/components/CaseStudyImage";

import { projAssets } from "@/assets/projAssets";
import { caseStudyCrayon } from "@/assets/caseStudyImages";
import CaseStudyNav from "@/components/CaseStudyNav";
import { CardGap } from "@/components/CardGap";
import { icon } from "@/assets/icon";



const caseStudyData = {
  team: [
    "Main designer (me)",
    "Team of 4 developers",
    "Product Manager",
    "Chief Product Officer",
  ],
  role: [
    "Discovery",
    "Prototyping",
    "Usability testing",
    "Feature launch",
  ],
  hero: projAssets[2].imageSecondary,
  heroDesc: "Crayon project hero image",
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
          <p className="text-lg">What began as a navigation redesign evolved into a comprehensive onboarding reimagination — reducing support requirements while empowering users to self-service their competitive intelligence ecosystem.</p>
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

      {/* * * * * Section - Problem: START * * * * */}
      <CaseStudyTitleDivider title="Problem"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection>
            <CardGap>
              <CardSection>
                <p>The original ask was simple: <b>Redesign the navigation.</b> However, once I started digging into Crayon’s platform, it became clear that navigation wasn’t the root problem. Behind it was a tangle of onboarding friction, underused features, and unclear value delivery.</p>                
              </CardSection>
              <CardSection sectionTitle="The old interface">
                <p>New users landed on an empty “My Feed” page with no context or direction. Critical features like saved searches—the engine behind Crayon’s daily email alerts—were hidden, and many users didn’t even know how they got their alerts, let alone how to set up new ones.</p>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonOldMyFeed} alt="Old landing page" caption="New users landed on an empty page without a clear CTA"/>
                </div>
                <p>Power users had learned to work around the platform’s gaps, but newer users struggled. And nearly all users relied on CS teams to configure what was meant to be a self-service experience.</p>
              </CardSection>
              <CardSection sectionTitle="Core challenge">
                <p>We needed to <b>help users understand and activate the power of Crayon’s competitive intelligence platform</b>, without needing handholding from customer success.</p>
                <CardSection smaller sectionTitle="Areas for improvement">
                  <BulletList>
                    <li><b>Self-Service adoption gap.</b> Users relied heavily on manual onboarding from customer success teams rather than configuring their own monitoring settings</li>
                    <li><b>Email-dependent workflow.</b> Users found value in daily email alerts but struggled to update them or set up new ones</li>
                    <li><b>Integration underutilization.</b> The platform's integration capabilities were hard to discover</li>
                  </BulletList>
                </CardSection>
              </CardSection>
            </CardGap>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Team: END */}
      
      {/* * * * * Problem: START * * * * */}
      <CaseStudyTitleDivider title="Research"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection>
                <p>I integrated <b>customer feedback gathered Productboard</b>, <b>input from customer success team members</b>, and <b>Heap data from the Product team</b> to develop a larger picture of the current state of the platform.</p>
                <p>It became clear that <b>the interface had grown a “Frankensteined nav”</b> with vestigial features, confusing terminology, and redundant features. The onboarding experience hadn’t kept up with the platform’s evolution.</p>
              </CardSection>
              <CardSection sectionTitle="System analysis">
                <p>Looking beyond the navigation problem, I restructured the problem into three focus areas.</p>                  
                <CardSection smaller sectionTitle="Navigation clarity">
                  <BulletList>
                    <li>New users landed on empty "My Feed" pages with unclear next steps</li>
                    <li>The distinction between "My Feed" and "All Insights" created confusion</li>
                    <li>Saved searches, the core value driver of Crayon, wasn't effectively introduced</li>
                  </BulletList>
                </CardSection>
                <CardSection smaller sectionTitle="Frankensteined features">
                  <BulletList>
                    <li>Navigation structure had evolved reactively without strategic planning</li>
                    <li>Growing numbers of saved searches made the quick links workaround unwieldy</li>
                    <li>Underutilized features took up valuable navigation space</li>
                  </BulletList>
                </CardSection>
                <CardSection smaller sectionTitle="Integration opportunities">
                  <BulletList>
                    <li>Setting up and managing email digests required customer success assistance</li>
                    <li>Integration capabilities existed but weren't optimized for self-service configuration</li>
                    <li>Needed to better support Crayon's "meet users where they are" strategy by integrating competitive intelligence within the apps users already rely on daily</li>
                  </BulletList>
                </CardSection>
              </CardSection>              
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Problem: END */}

        {/* * * * * Solution: START * * * * */}
        <CaseStudyTitleDivider title="Solution"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection sectionTitle="Navigation transformation">
              <BulletList>
                <li>Streamlined navigation by consolidating saved searches into a dropdown menu, clarifying relationships between key sections while reducing context switching</li>
                <li>Replaced the makeshift "Quick Links" section with a feature to star frequently used searches that elevated them to the top of the saved searches list</li>
                <li>Removed underutilized feature like Team Activity based on usage analytics, focusing the interface on high-value features</li>
                <li>Created prominent KPI cards that doubled as quick filters, surfacing the most frequently used filters from the extensive sidebar options</li>
              </BulletList>
            </CardSection>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewInsights} alt="Crayon new insights" />
        </Windows95FrameInner>

        <Windows95FrameInner>
          <CardContainer>
            <CardSection sectionTitle="Onboarding enhancements">
              <BulletList>
                <li>Transformed the new user experience by replaced the blank "My feed" landing page with relevant industry insights based on user input during onboarding</li>
                <li>Implemented guided onboarding with Appcues with tooltips that introduced core platform concepts to encourage exploration</li>
                <li>Streamlined saved searches creation while clarifying their relationship to the daily email updates that the users valued</li>
              </BulletList>
            </CardSection>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewAppcues} alt="Crayon new dropdown" />
        </Windows95FrameInner>

        <Windows95FrameInner>
          <CardContainer>
            <CardSection sectionTitle="Integration focus">
              <BulletList>
                <li>Designed and implemented the Gong integration feature, from setup to notifications, supporting a key business partnership</li>
                <li>Enhanced integration discoverability through notification badges and making integrations part of onboarding</li>
                <li>Accelerated competitor selection with a custom dropdown solution, partnering with the design system team to add it to the shared library</li>
              </BulletList>
            </CardSection>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewGong2} alt="Crayon new gong" />
        </Windows95FrameInner>
        {/* Solution: END */}
        
        {/* * * * * Post-launch: START * * * * */}
        <CaseStudyTitleDivider title="Post-launch iteration"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <p>Shortly after launch, we noticed a friction point: users were thrown off by the saved search they were currently viewing jumping to the top of the list.</p>
              <p>Through observation and testing, we realized many users processed searches sequentially. I worked with the development team to quickly update the pattern to preserve static order of the saved searches, improving predictability.</p>
            </CardSection>
          </CardContainer>
        </Windows95FrameInner>
        {/* Post-launch: END */}
        {/* * * * * Retrospective: START * * * * */}
        <CaseStudyTitleDivider title="Retrospective"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <p>This project taught me that onboarding isn’t a moment, but a system. These are the things I would push for if I could do it again.</p>
              <CardSection smaller sectionTitle="Deeper segmentation">
                <p>We relied heavily on power users for feedback, which skewed our assumptions about needs and behaviors. The squeaky wheel gets the grease, but that is not representative of all users.</p>
              </CardSection>
              <CardSection smaller sectionTitle="Progressive onboarding">
                <p>To improve sign-up conversion, we pared down the requirements for user input, but we lost valuable context. Instead, we could’ve explored approaches where we collect and refine user inputs over time instead of all up front.</p>
              </CardSection>
              <CardSection smaller sectionTitle="Alternate solution to tooltip tutorials">
                <p>No one likes to read. Users skip tooltips While Appcues provided a fast and analytics-friendly way to onboard users, integrating feature education more deeply into the app to provide context and feedback would've been a more effective way to educate the user and dovetailed with progressive onboarding.</p>
              </CardSection>
            </CardSection>
          </CardContainer>
        </Windows95FrameInner>
        {/* Retrospective: END */}

        {/* * * * * Retrospective: START * * * * */}
        <CaseStudyTitleDivider title="Impact"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <BulletList>
              <li>Successfully launched with no negative feedback, despite changing core navigation flows</li>
              <li>Increased user understanding of saved searches and daily alert mechanics</li>
              <li>Created a new onboarding foundation that reduced CS dependency and supported Crayon’s shift toward true self-service</li>
              </BulletList>
            </CardSection>
          </CardContainer>
        </Windows95FrameInner>
        {/* Retrospective: END */}

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
  