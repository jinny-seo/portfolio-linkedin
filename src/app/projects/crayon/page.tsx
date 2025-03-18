"use client"
import { usePathname } from "next/navigation";
import { BulletList } from "@/components/BulletList";
import { CardContainer } from "@/components/CardContainer";
import Image, { StaticImageData} from "next/image";
import { caseStudyAB } from "@/assets/caseStudyImages";
import { navImage } from "@/assets/navImages";
import { CaseStudyContainer } from "@/components/CaseStudyContainer";
import { NavItem } from "@/components/NavItem";
import { projAssets } from "@/assets/projAssets";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";


const caseStudyData = {
  intro:[
    "Crayon's competitive intelligence platform helps businesses monitor competitor activities and make strategic decisions. After six years of organic growth, the platform had become fragmented and inefficient.",
    "What began as a navigation redesign evolved into a comprehensive onboarding reimagination — reducing support requirements while empowering users to self-service their competitive intelligence ecosystem.",
  ],
  team: [
    "Main designer (Me)",
    "Design lead",
    "Team of 4 developers",
    "Product Manager",
    "Chief Product Officer",
  ],
  role: [
    "End-to-end design process from discovery through launch",
    "Usability testing",
    "Collaborated with CPO, PM, and engineering team",
  ],
  heroImage: caseStudyAB.ABhero,
  heroImageDesc: "AB  project hero image",
}

export default function crayonProject() {
  const pathname = usePathname();
  const currentPath = pathname.replace("/projects/", "");

  const currentIndex = projAssets.findIndex(project => project.link === currentPath);
  const currentProject = projAssets[currentIndex];

  const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
  const nextProject = projAssets[(currentIndex + 1) % projAssets.length];
  return (
    <CaseStudyContainer>
      <CaseStudyHeader 
        title={currentProject.name}
        company={currentProject.company} 
        intro={caseStudyData.intro} 
        date={currentProject.date} 
        duration={currentProject.duration} 
        team={caseStudyData.team} 
        role={caseStudyData.role} 
        heroImage={caseStudyData.heroImage} 
        heroImageDesc={caseStudyData.heroImageDesc} 
      />
      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">Challenges</h2>
        <p>There were some critical challenges on the Crayon platform, especially around onboarding.</p>
        <BulletList>
          <li><b>Self-Service Adoption Gap.</b> Users relied heavily on manual onboarding from customer success teams rather than configuring their own monitoring settings</li>
          <li><b>Email-Dependent Workflow.</b> Users found value in daily email alerts but struggled to update them or set up new monitoring parameters</li>
          <li><b>Integration Underutilization.</b> The platform's integration capabilities weren't being fully leveraged due to navigation barriers</li>
        </BulletList>
      </CardContainer>

      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">System analysis</h2>
        <p>Through stakeholder interviews, feedback from customers and CSRs, usage metrics, and platform analysis, I identified key workflow barriers.</p>
        <h3 className="subheading">Onboarding obstacles</h3>
        <BulletList>
          <li>New users landed on empty "My Feed" pages with unclear next steps</li>
          <li>The distinction between "My Feed" and "All Insights" created confusion</li>
          <li>The concept of saved searches—the core value driver—wasn't effectively introduced</li>
        </BulletList>
        <h3 className="subheading">Frankensteined features</h3>
        <BulletList>
          <li>Navigation structure had evolved reactively without strategic planning</li>
          <li>Growing numbers of saved searches made the quick links workaround increasingly unwieldy</li>
          <li>Underutilized features took up valuable navigation space</li>
        </BulletList>
        <h3 className="subheading">Navigation inefficiencies</h3>
        <BulletList>
          <li>Separate interfaces for saved searches and main navigation created constant context switching</li>
          <li>Critical saved searches were buried in separate pages requiring extra clicks</li>
          <li>No clear path for creating and managing monitoring parameters</li>
        </BulletList>
        <h3 className="subheading">Integration opportunities</h3>
        <BulletList>
          <li>Platform needed to better support Crayon's strategy as an insights engine for other tools</li>
          <li>Setting up and managing email digests required customer success assistance</li>
          <li>Integration capabilities existed but weren't optimized for self-service configuration</li>
        </BulletList>
      </CardContainer>

      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">Solution</h2>
        <h3 className="subheading">Navigation architecture</h3>
        <BulletList>
          <li>Consolidated separate interfaces into one cohesive system</li>
          <li>Created clear hierarchy for different insight types</li>
          <li>Streamlined path to saved search creation and managemen</li>
        </BulletList>
        <h3 className="subheading">Self-service Enhancement</h3>
        <BulletList>
          <li>Redesigned empty states with clear paths to value creation</li>
          <li>Improved saved search management interface</li>
          <li>Developed clearer information architecture for different insight types</li>
        </BulletList>        
        <h3 className="subheading">Integration focus</h3>
        <BulletList>
          <li>Improved access to integration settings</li>
          <li>Created clearer connections between insights and action paths</li>
          <li>Streamlined workflows for sharing insights across tools</li>
        </BulletList>
      </CardContainer>

      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">User research iteration</h2>
      </CardContainer>

      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">Results</h2>
        <BulletList>
          <li>Successfully launched with no negative feedback despite changing core navigation patterns</li>
          <li>Preserved established user workflows while improving discoverability</li>
          <li>Created foundation for improved self-service onboarding</li>
          <li>Reduced customer success team involvement in basic setup</li>
        </BulletList>
      </CardContainer>

      <CardContainer>
        <h2 className="font-PixelifySans mt-8 ">Post-launch iteration</h2>
        <p>Based on user behavior observation, we quickly adjusted how saved searches were presented.</p>
        <p>Initially, the current saved search moved to the top of the list, but we discovered users typically processed their saved searches sequentially. We modified the design to maintain a static order, supporting this methodical workflow pattern.</p>
        <p>This rapid adjustment demonstrated the value of focused user observation and our commitment to supporting efficient workflows even after launch.</p> 
      </CardContainer>
    </CaseStudyContainer>
  );
}
  