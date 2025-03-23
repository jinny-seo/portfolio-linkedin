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
import { caseStudyCrayon } from "@/assets/caseStudyImages";

const caseStudyData = {
  team: [
    "Senior Product Designer (Me)",
    "Design Architect (Manager)",
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

  const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
  const nextProject = projAssets[(currentIndex + 1) % projAssets.length];
  return (
    <Windows95FrameOuter label={currentProject.company} date={currentProject.date} duration={currentProject.duration}>
      {/* * * * * Header: START * * * * */}
      <CaseStudyHeader 
      title={currentProject.name}
      company={currentProject.company} 
      date={currentProject.date} 
      duration={currentProject.duration}>
        <p>As one of the two founding designers at Mimic, I shipped the technically-driven MVP platform and evolved it into a user-centered solution, while setting up the design system and brand expression from scratch.</p>
        <div className="quote my-3">
          <p className="mb-2">This is the best looking MVP I've ever seen from a startup.</p>
          <span className="text-[1.1rem] not-italic">— REI, Design partner</span>
        </div>
        <p>The strength of our product and design helped Mimic secure $50 million in funding from Google Ventures a year after I joined.</p>
      </CaseStudyHeader>
      {/* Header: END */}
      {/* * * * * Hero image: START * * * * */}
      <Windows95FrameInner>
        <Image src={caseStudyData.hero as StaticImageData} alt={caseStudyData.heroDesc || "Hero image"}/>
      </Windows95FrameInner>
      {/* Hero image: END */}

      {/* * * * * Section - Background: START * * * * */}
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
          <CardSection sectionTitle="Initial MVP delivery">
            <p>To secure their first customers and investors, Mimic needed to quickly ship an MVP that allows customers to monitor and manage security agents (nodes) across their systems. </p>
            <p>With limited time for upfront user research, we built the first iteration of the platform based primarily on technical requirements while establishing the foundations of the Mimic design system.</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Background: END */}

      {/* * * * * Problem: START * * * * */}
      <CaseStudyTitleDivider title="Problem"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Post-Launch initiative">
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
            <div className="grid gap-3 md:grid-cols-2">
              <CardSection smaller sectionTitle="Manage (IT Operations)">
                <BulletList>
                  <li>Primary Role: Deploy and maintain security agents</li>
                  <li>Key concerns: Connectivity status, credential management, configurations, operational health</li>
                  <li>Critical for our near-term growth—getting our agents deployed</li>
                </BulletList>
              </CardSection>
              <CardSection smaller sectionTitle="Monitor (Security Analysts)">
                <BulletList>
                  <li>Primary responsibility: Investigating security events and incidents</li>
                  <li>Key concerns: Timeline of events, severity assessment, threat detection</li>
                  <li>Future focus: This persona would become increasingly important as our platform matured</li>
                </BulletList>
              </CardSection>
            </div>
            <p>While we needed to eventually serve both personas, we determined that focusing on the "Manage" persona would address our immediate growth challenge—getting our security agents deployed across customer systems.</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Problem: END */}

      {/* * * * * Solution: START * * * * */}
      <CaseStudyTitleDivider title="Solution"/>
      <Windows95FrameInner>  
        <CardContainer>
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
        </CardContainer>
      </Windows95FrameInner>
      {/* Solution: END */}

      {/* * * * * Additional contributions: START * * * * */}
      <CaseStudyTitleDivider title="Additional contributions"/>
      <Windows95FrameInner>  
        <CardContainer>
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

    </Windows95FrameOuter>
  );
}






