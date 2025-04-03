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
          <p className="text-lg">What began as a navigation redesign evolved into a comprehensive onboarding overhaul, reducing support requirements while empowering users to self-service their competitive intelligence ecosystem.</p>
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
                <p>The original ask was simple: <b>Redesign the navigation.</b></p>
                <p>However, once I started digging into Crayon’s platform, it became clear that navigation wasn’t the root problem. Behind it was a tangle of onboarding friction, underused features, and unclear value delivery.</p>
                <p><b>We needed to help users activate the power of Crayon's competitive intelligence platform without requiring hand-holding from customer success.</b></p>
              </CardSection>
            </CardGap>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Team: END */}

      {/* * * * * Section - Discovery: START * * * * */}
      <CaseStudyTitleDivider title="Discovery"/>
      <Windows95FrameInner>  
        <CardContainer>
          <CardSection>
            <CardGap>
              <CardSection>
                <p>To understand the experience more holistically, I partnered with Product to gather data on the following.</p>
                <BulletList>
                  <li><b>Customer feedback</b> from Productboard</li>
                  <li><b>Heap analytics</b> on feature usage</li>
                  <li><b>Interviews</b> with customer success team members</li>
                </BulletList>
              </CardSection>
              <CardSection sectionTitle="Key findings">
                <BulletList>
                  <li><b>Onboarding dependency.</b> New users relied heavily on customer success due to empty default states and a lack of guidance</li>
                  <li><b>Interface redundancy.</b> “My Feed” and the main Insights page were nearly indistinguishable, creating confusion in core navigation</li>
                  <li><b>Unscalable workarounds.</b> Quick links were a stopgap solution that had gained widespread adoption, but this temporary fix didn’t scale with user growth</li>
                  <li><b>Cluttered navigation.</b> Underused features like “Team Activity” occupied prime space in the navigation, distracting from the platform’s core value drivers</li>
                  <li><b>Hidden features.</b> Critical capabilities—like integrations and Saved Searches (which powered email alerts)—were difficult to discover and poorly explained</li>
                </BulletList>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonOldSavedSearches} alt="Old landing page" caption="The platform had grown organically over six years into what I call a “Frankensteined” structure, with redundant elements, vestigial pages, and critical workflows buried in admin-style layouts."/>
                </div>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonOldMyFeed} alt="Old landing page" caption="Furthermore, new users were dropped into a blank “My Feed” page. The CTA assumed familiarity with “Saved Searches,” a core feature most new users would not understand."/>
                </div>
              </CardSection>
              <CardSection sectionTitle="Reframing the problem">
                  <p>Crayon's issues stemmed from more than just navigation problems. They were rooted in onboarding friction and unclear value delivery.</p>
                  <p>This wasn’t just a design issue; it was a perception gap. <b>How could we help users feel Crayon’s value from the start?</b></p>
                </CardSection>
            </CardGap>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Discovery: END */}
      
      {/* * * * * Strategy: START * * * * */}
      <CaseStudyTitleDivider title="Strategy"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection>
                <p>To answer this question, I reorganized the problem into three strategic opportunity areas.</p>
              </CardSection>
              <CardSection sectionTitle="Navigation and onboarding">
                <BulletList>
                  <li><b>First-session activation.</b> Guide users to meaningful action on their very first visit</li>
                  <li><b>Content differentiation.</b> Create clear delineation between "My Feed" and "Search All Insights"</li>
                  <li><b>Value driver education.</b> Introduce Saved Searches as a powerful, accessible tool</li>
                </BulletList>
              </CardSection>
              <CardSection sectionTitle="Feature clarification">
                <BulletList>
                  <li><b>Structural coherence.</b> Replace organic growth with intentional organization</li>
                  <li><b>Scalable solutions.</b> Eliminate workarounds like "quick links" that masked deeper issues</li>
                  <li><b>Real estate optimization.</b> Prioritize high-value features in prime locations</li>
                </BulletList>
              </CardSection>
              <CardSection sectionTitle="Integration ecosystem">
                <BulletList>
                  <li><b>Self-service facilitation.</b> Enable email digest setup without customer success intervention</li>
                  <li><b>Discoverability enhancement.</b> Surface integration options within natural user flows</li>
                  <li><b>Philosophy alignment.</b> Fulfill Crayon's promise to "meet users where they are"</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Strategy: END */}

        {/* * * * * Solution: START * * * * */}
        <CaseStudyTitleDivider title="Solution"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Competitive analysis">
                <p>I began with low-fidelity sketches exploring horizontal tabs, vertical menus, and hybrid structures. After feedback from the CPO that the sketches were too similar to the existing design, I conducted additional competitive analysis beyond feed-based platforms.</p>
                <p>During this second round of iteration, what stood out was a dropdown model that was light and modern while preserving context.</p>
                <div className="py-4">
                  <CaseStudyImage 
                    src={caseStudyCrayon.CrayonCompetitiveAnalysis} alt="Competitive analysis for navigation redesign" 
                    caption="I conducted competitive analysis of navigation models from feed-based platforms and beyond"
                    className="border-none shadow-none"
                  />
                </div>
                
                <div className="py-4">
                  <CaseStudyImage 
                    src={caseStudyCrayon.CrayonNavIterations} 
                    alt="Early iterations of navigation redesign" 
                    caption="Early sketches and higher-fidelity iterations of the navigation redesign"
                    className="border-none shadow-none"
                  />
                </div>
              </CardSection>
              <CardSection sectionTitle="Navigation transformation">
                <p>This led to a two-panel dropdown navigation featuring the following improvements.</p>
                <BulletList>
                  <li><b>Menu item consolidation.</b> Consolidated the main navigation items into a scalable, elastic-searchable dropdown with hover states and expansion options</li>
                  <li><b>Taxonomy clarification.</b> Replaced ambiguous labels with clearer alternatives (e.g., "New Search" to "Search All Insights", "My Feed" to "Following")</li>
                  <li><b>Streamlined actions.</b> Simplified creation of Saved Searches and clarified their connection to the daily email updates that the users valued</li>
                </BulletList>
              </CardSection>
            </CardGap>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewAppcues} alt="Crayon new dropdown" className="border-t"/>
        </Windows95FrameInner>

        <Windows95FrameInner>
          <CardContainer>
            <CardSection sectionTitle="Feature-value clarification">
              <BulletList>
                <li><b>Navigation simplification.</b> Removed low-usage elements like “Team Activity” based on analytics and testing</li>
                <li><b>Quick filter KPI cards.</b> Introduced visual cards for commonly used filters</li>
                <li><b>Onboarding flow improvements.</b> Replaced blank landing pages with pre-populated Insights and added guided tooltips</li>
              </BulletList>
            </CardSection>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewInsights} alt="Crayon new insights" className="border-t"/>
        </Windows95FrameInner>

        <Windows95FrameInner>
          <CardContainer>
            <CardSection sectionTitle="Integration focus">
              <BulletList>
                <li><b>Gong integration.</b> Designed end-to-end experience for a strategic integration partnership between Gong and Crayon</li>
                <li><b>Discovery enhancement.</b> Boosted discoverability of integrations through visual cues</li>
                <li><b>Component library addition.</b> Created a tailored dropdown selector that was added to the shared design system</li>
              </BulletList>
            </CardSection>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewGong1} alt="Crayon-Gong integration landing" className="border-t"/>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewGong2} alt="Crayon-Gong integration wizard" className="border-t"/>
        </Windows95FrameInner>
        {/* Solution: END */}
        
        {/* * * * * Post-launch: START * * * * */}
        <CaseStudyTitleDivider title="User testing"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardGap>
              <CardSection>
                <p>With the redesigned navigation and onboarding prototyped, we turned to user testing.</p>
                <p>I validated designs through two rounds of testing: first with <b>four customer success employees</b>, then with <b>four external customers</b>.</p>
              </CardSection>
              <CardSection sectionTitle="Key findings">
                <BulletList>
                  <li>The dropdown was immediately understood as interactive</li>
                  <li>Landing users on a page with the dropdown already open confused users, and we reverted to landing on "Search All Insights"</li>
                  <li>Tooltips in the "Follow" button helped users connect it to daily alerts</li>
                  <li>Users intuitively grasped the starring mechanism for Saved Searches</li>
                  <li>Removal of low-usage items was not noticed</li>
                  <li>Terminology changes like "My Feed" to "Following" tested positively</li>
                  <li>Quick-filter KPI cards saw strong engagement but had to be scaled down in scope due to technical constraints</li>
                </BulletList>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonUserTesting1} alt="Crayon user testing 1"/>
                </div>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonUserTesting3} alt="Crayon user testing 2" caption="I had discoverability concerns around the navigation dropdown and tested it pre-opened. It did not test well, and further user testing showed users understood the closed dropdown intuitively."/>
                </div>
                <div className="py-4">
                  <CaseStudyImage src={caseStudyCrayon.CrayonUserTesting2} alt="Crayon user testing 2" caption="Just by putting the email explanation inside the 'Follow' button, users better understood that clicking it would start the alerts"/>
                </div>
              </CardSection>
            </CardGap>
          </CardContainer>
        </Windows95FrameInner>
        {/* Post-launch: END */}
        {/* * * * * Retrospective: START * * * * */}
        <CaseStudyTitleDivider title="Delivery"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardGap>
              <p>We launched successfully with no negative feedback in the first month, despite changing core navigation flows</p>
              <CardSection sectionTitle="Post-launch iteration">
                <p>Shortly after launch, we noticed a friction point: users were thrown off by the saved search they were currently viewing jumping to the top of the list.</p>
                <p>Through observation and testing, we realized many users processed searches sequentially. I worked with the development team to quickly update the pattern to preserve static order of the Saved Searches, improving predictability.</p>
              </CardSection>
            </CardGap>
          </CardContainer>
          <CaseStudyImage src={caseStudyCrayon.CrayonNewInsights} alt="Crayon new dropdown" className="border-t"/>
        </Windows95FrameInner>
        {/* Retrospective: END */}
        {/* * * * * Retrospective: START * * * * */}
        <CaseStudyTitleDivider title="Retrospective"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardGap>
            <CardSection>
                <p>This project taught me that onboarding isn’t a moment, but a system. These are the things I would push for if I could do it again.</p>
                <CardSection smaller sectionTitle="Deeper segmentation">
                  <p>Power users were the most vocal and accessible and dominated our feedback loop. However, their advanced behavior doesn't reflect the broader user base — particularly the new users we were concerned about. Equal input from all segments of users would have led to a more balanced solution.</p>
                </CardSection>
                <CardSection smaller sectionTitle="Progressive onboarding">
                  <p>To improve sign-up conversion, we pared down the requirements for user input, but we lost valuable context. Instead, we could’ve explored approaches where we collect and refine user inputs over time, rather than all at once.</p>
                </CardSection>
                <CardSection smaller sectionTitle="Reconsidering tooltip tutorials">
                  <p>No one likes to read. Users skip tooltips. While Appcues offered a quick, trackable onboarding solution through tooltips, embedding feature education into user workflows would offer more meaningful education while dovetailing with progressive onboarding.</p>
                </CardSection>
              </CardSection>                          
              <hr/>
              <p>This project showed me that intuitive onboarding isn’t about adding more guidance—it’s about meeting users where they are. With better segmentation, gradual input collection, and contextual learning, we could have created a more self-sufficient experience that builds trust early and reduces friction throughout.</p>
            </CardGap>
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
  