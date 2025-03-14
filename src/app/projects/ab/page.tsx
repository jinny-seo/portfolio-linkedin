import { BulletList } from "@/components/BulletList";
import { CardContainer } from "@/components/CardContainer";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import Image, { StaticImageData} from "next/image";
import { caseStudyAB } from "@/assets/caseStudyImages";

const caseStudyData = {
    title: "Transforming a pharmaceutical cost-savings platform",
    description:[
        "I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities.",
        "Despite push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience."
    ],
    timeline: "Mar 2021 – Dec 2021 (10 months)",
    duration: "10 months",
    team: [
      "Sole designer (Me)",
      "Senior Director of Product",
      "Product Owner",
      "Engineering team of 6 developers",
    ],
    role: [
      "Discovery & requirements gathering",
      "Stakeholder management",
      "Customer interviews & usability testing",
      "MVP launch & design QA",
      "Feature prioritization",
    ],
    heroImage: caseStudyAB.ABhero,
    heroImageAlt: "AB  project hero image",
}

export default function abProject() {
  
    return (
      <div className="grid gap-6">
        
        <CaseStudyHeader data={caseStudyData}/>
        <CardContainer>
          <h2 className="font-PixelifySans mt-8">Background</h2>
          <p>Pharmacy managers could only access cost-saving alternatives through sales rep phone calls, creating three key problems:</p>
          <BulletList>
            <li>Sales reps spent valuable time explaining savings rather than building strategic relationships</li>
            <li>Customers missed time-sensitive opportunities between scheduled calls</li>
            <li>Access to savings information depended entirely on sales rep availability</li>
          </BulletList>
          <p>Our vision was to transform this internal PowerBI dashboard into a self-service external tool where customers could independently discover savings opportunities.</p>
        </CardContainer>
        

        <CardContainer>
          <h2 className="font-PixelifySans">Stakeholder management</h2>
          <div className="flex flex-col gap-4">
            <div>
              <p>Initially, leadership pushed to port our internal PowerBI dashboard directly to customers to meet tight deadlines. Despite deadline pressures, I advocated for a foundational redesign rather than a direct port by making a case for user adoption.</p>
              <p>Additionally, I identified and resolved misalignment around MVP feature expectations, getting all stakeholders on the same page. This strategic pivot informed our navigation design, prioritizing user understanding and engagement.</p>
            </div>
            <div>
              <Image className="lg:max-w-[650px]" src={caseStudyAB.ABinternaldash} alt="Original internal PowerBI dashboard"/>
              <p className="caption mt-[0.5rem]">Original internal PowerBI dashboard contained a table with 23 columns.</p>
            </div>
            <div>
              <Image className="shadow-md lg:max-w-[650px]" src={caseStudyAB.ABinitialdesignfilters} alt="Proposed initial design with filters drawer"/>
              <p className="caption">The proposed initial design I received was a direct port of the internal sales tool and had a host of usability issues.</p>
            </div>  
          </div>
        </CardContainer>

        <CardContainer>
          <h2 className="font-PixelifySans">Navigation strategy</h2>
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
        </CardContainer>

        <CardContainer>
          <h2 className="font-PixelifySans">KPI visualization</h2>
          <p>PRxO contribution metrics are critical for customers of AmerisourceBergen, as reaching certain thresholds impacts available discounts.</p>
          <p>However, I identified a critical disconnect: AmerisourceBergen measured PRxO compliance in <b>percentages for discount qualification</b>, but the source design only displayed <b>absolute dollar amounts.</b></p>
          <p>My solution was to transform this KPI into a more active decision-making tool by...</p>
          <BulletList>
            <li>Redesigning the metrics display to emphasize percentage contribution supported by dollar amounts</li>
            <li>Creating a prominent KPI showing total PRxO contribution with a companion percentage showing potential increase</li>
            <li>Connecting these metrics to the interactive filtering system so users could see real-time updates as they explored different product alternatives</li>
          </BulletList>
          <p>This approach directly aligned the interface with the actual business decision-making process, allowing users to immediately see how close they were to discount thresholds and identify which product substitutions would be most effective.</p>
        </CardContainer>

        <CardContainer>
          <h2 className="font-PixelifySans">Usability enhancements</h2>
          <p>Additionally, I identified and addressed several critical barriers to effective use of the application.</p>
          <h3 className="subheading">Streamlined information architecture</h3>
          <BulletList>
            <li>Reducing 23 jargon-heavy columns to 10 essential ones</li>
            <li>Grouping related information logically</li>
            <li>Translating internal terminology into user-friendly language</li>
          </BulletList>
          <h3 className="subheading">Clear visual hierarchy</h3>
          <BulletList>
            <li>Clearly separated Accounts, Products, and Opportunities sections</li>
            <li>Implemented visual indicators for savings potential</li>
            <li>Created distinct styling for interactive elements</li>
          </BulletList>
          <h3 className="subheading">Enhanced product identification</h3>
          <p>A pain point I discovered through customer and stakeholder interviews was that users were translating between different product identification systems (ABC, ABC8, NDC) using lookup tools.</p>
          <p>My solution introduced an elegant dropdown system built directly into the product tables to allow seamless switching between ID systems without disrupting workflow or losing context.</p>
          </CardContainer>
          
          {/* Impact */}
          <CardContainer>
            <h2 className="font-PixelifySans">Impact</h2>
            <p>The investment in proper discovery and design delivered significant results.</p>
            <BulletList>
              <li>Achieved 8.2/10 rating with 10 participants, receiving the highest score out of the three tools tested</li>
              <li>Customers praised clarity, usability, and business value of the product</li>
            </BulletList>
            <p>The dashboard designs and the usability findings were presented at a C-level stakeholders meeting, who enthusiastically approved the next phase of development, securing buy-in for this proposal originally pitched by the Senior Director.</p>
          </CardContainer>

          {/* MVP delivery */}
          <CardContainer>
            <h2 className="font-PixelifySans">MVP delivery</h2>
            <p>I led this project for just over a year, successfully launching a working MVP by the end-of-year deadline. My role included...</p>
            <BulletList>
              <li>Facilitating feature prioritization sessions with product and engineering teams</li>
              <li>Driving implementation through detailed Jira tickets and rigorous design QA</li>
              <li>Creating a strategic roadmap for future development phases</li>
            </BulletList>
          </CardContainer>

          {/* Future roadmapping */}
          <CardContainer>
            <h2 className="font-PixelifySans">Future roadmapping</h2>
            <p>Before transitioning off the project, I established a foundation for future success by analyzing user testing feedback and developing a comprehensive enhancement roadmap. I prioritized features based on urgency and implementation complexity to guide resource allocation.</p>
            <h3 className="subheading">Short-term enhancements</h3>
            <BulletList>
              <li>Collapsible rows for managing multiple alternate options</li>
              <li>"Show X more..." patterns for improved discovery</li>
              <li>Export functionality for external analysis</li>
            </BulletList>
            <h3 className="subheading">Long-term enhancements</h3>
            <BulletList>
              <li>Workflow assistance features including hide/favorite capabilities for alternative products</li>
              <li>Overview dashboard page for executive-level insights</li>
              <li>Permission controls for sensitive data</li>
            </BulletList>
          </CardContainer>

          <CardContainer>
            <h2 className="font-PixelifySans">Impact</h2>
            <p>The redesigned platform delivered significant business value.</p>
            <BulletList>
              <li>Transformed complex pricing data into clear decision support for customers</li>
              <li>Established new design standards for translating internal tools into customer-facing products</li>
              <li>Positioned the company to drive increased adoption of their PRxO program</li>
            </BulletList>
          </CardContainer>
        

        <div className="relative w-full">
          <div className="relative w-full">
          <iframe 
          className="top-0 left-0 w-full aspect-[16/12]"
          src="https://embed.figma.com/proto/Fp1MLLi2sW5IoULLeFjHj4/AmerisourceBergen?page-id=25%3A23163&node-id=25-23164&viewport=-1535%2C289%2C0.94&scaling=fit-width&device-frame=0&content-scaling=fixed&embed-host=share&hide-ui=1" />
        </div>
        </div>
        
      </div>
    );
  }