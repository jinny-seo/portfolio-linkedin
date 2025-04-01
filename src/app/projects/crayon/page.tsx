"use client"
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



const caseStudyData = {
  team: [
    "Main designer (Me)",
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


  return (
    <div> 
      {/* <CaseStudyNav/> */}
      <CardContainer bgNone fullWidth>
        <CardSection>
          <h1 className="title-1">{currentProject.name}</h1>
          <p className="text-lg">{currentProject.description}</p>
          <p className="text-lg">What began as a navigation redesign evolved into a comprehensive onboarding reimagination — reducing support requirements while empowering users to self-service their competitive intelligence ecosystem.</p>
        </CardSection>
      </CardContainer>
      
      {/* * * * * Hero image: START * * * * */}
      <Windows95FrameInner>
        <Image src={caseStudyData.hero as StaticImageData} alt={caseStudyData.heroDesc || "Hero image"}/>
      </Windows95FrameInner>
      {/* Hero image: END */}
      
      {/* * * * * Section - Background: START * * * * */}
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

        {/* * * * * Problem: START * * * * */}
        <CaseStudyTitleDivider title="Problem"/>
        <Windows95FrameInner>
          <CardContainer>
            <CardGap>
              <CardSection sectionTitle="Core challenges">
                <BulletList>
                  <li><b>Self-Service adoption gap.</b> Users relied heavily on manual onboarding from customer success teams rather than configuring their own monitoring settings</li>
                  <li><b>Email-dependent workflow.</b> Users found value in daily email alerts but struggled to update them or set up new ones</li>
                  <li><b>Integration underutilization.</b> The platform's integration capabilities were hard to discover</li>
                </BulletList>
                </CardSection>
                
                <CardSection sectionTitle="System analysis">
                  <p>To understand the root causes of the challenges, I conducted a platform evaluation that combined stakeholder interviews, customer feedback, CSR experiences, and usage data to identify barriers to address and opportunities to enhance.</p>
                  <CardSection smaller sectionTitle="Onboarding obstacles">
                    <BulletList>
                      <li>New users landed on empty "My Feed" pages with unclear next steps</li>
                      <li>The distinction between "My Feed" and "All Insights" created confusion</li>
                      <li>Saved searches, the core value driver of Crayon, wasn't effectively introduced</li>
                    </BulletList>
                    <Image src={caseStudyCrayon.CrayonOldMyFeed} alt="Crayon old my feed" />
                  </CardSection>
                  <CardSection smaller sectionTitle="Frankensteined features">
                    <BulletList>
                      <li>Navigation structure had evolved reactively without strategic planning</li>
                      <li>Growing numbers of saved searches made the quick links workaround unwieldy</li>
                      <li>Underutilized features took up valuable navigation space</li>
                    </BulletList>
                    <Image src={caseStudyCrayon.CrayonOldTeamActivity} alt="Crayon old team activity" />
                  </CardSection>
                  
                  <CardSection smaller sectionTitle="Navigation inefficiencies">
                    <BulletList>
                      <li>Separate pages for the navigation menu items created constant context switching</li>
                      <li>Critical saved searches were buried in separate pages requiring extra clicks</li>
                      <li>Navigation included vestigial features, such as duplicate search bars and Team Activity, which analytics showed had minimal usage</li>
                    </BulletList>
                    <Image src={caseStudyCrayon.CrayonOldSavedSearches} alt="Crayon old saved searches" />
                    
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
          <Image src={caseStudyCrayon.CrayonNewInsights} alt="Crayon new insights" />
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
          <Image src={caseStudyCrayon.CrayonNewAppcues} alt="Crayon new dropdown" />
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
          <Image src={caseStudyCrayon.CrayonNewGong2} alt="Crayon new gong" />
        </Windows95FrameInner>
        {/* Solution: END */}

        {/* * * * * Results: START * * * * */}
        <CaseStudyTitleDivider title="Results"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <BulletList>
                <li>Successfully launched with no negative feedback despite changing core navigation patterns</li>
                <li>Preserved established user workflows while improving discoverability</li>
                <li>Created foundation for improved self-service onboarding</li>
                <li>Improved understanding of daily</li>
              </BulletList>
            </CardSection>
          </CardContainer>
        </Windows95FrameInner>
        {/* Results: END */}
        
        {/* * * * * Post-launch: START * * * * */}
        <CaseStudyTitleDivider title="Post-launch iteration"/>
        <Windows95FrameInner>  
          <CardContainer>
            <CardSection>
              <p>Based on user behavior observation, we quickly adjusted how saved searches were presented.</p>
              <p>Initially, the current saved search moved to the top of the list, but we discovered users typically processed their saved searches sequentially. We modified the design to maintain a static order, supporting this methodical workflow pattern.</p>
              <p>This rapid adjustment demonstrated the value of focused user observation and our commitment to supporting efficient workflows even after launch.</p>
              </CardSection>
          </CardContainer>
        </Windows95FrameInner>
        {/* Post-launch: END */}
    
    </div>    
  );
}
  