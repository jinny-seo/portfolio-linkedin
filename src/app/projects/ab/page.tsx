import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import Image, { StaticImageData} from "next/image";

const caseStudyData = {
    title: "Transforming a pharmaceutical cost-savings platform",
    description:[
        "I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities.",
        "Despite push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience."
    ],
    timeline: "Mar 2021 – Dec 2021 (10 months)",
    team: [
      "Sole designer (Me)",
      "Senior Director of Product",
      "Product Owner",
      "Engineering team of 6 developers",
    ],
    role: [
      "Discovery & requirements gathering",
      "Stakeholder management",
      "User interviews & usability testing",
      "MVP launch & design QA",
      "Future feature prioritization",
    ],
}

export default function abProject() {
  
    return (
      <div className="">
        <CaseStudyHeader data={caseStudyData}/>
        
        

        
        <div className="grid gap-4">
          {/* Strategic initiative */}
          
          <h2 className="text-[1.8rem] font-PixelifySans w-full">Strategic initiative</h2>
              
              <p>When I joined the project, I discovered the existing designs simply mirrored an internal PowerBI dashboard, ignoring external user needs. </p>
              <p>Despite pressure to ship this version quickly, I advocated for a deeper redesign through...</p>
              <ul className="">
                <li>Highlighting the usability needs through cross-team discovery sessions</li>
                <li>Documenting gaps in the current solution</li>
                <li>Interviews with Sales to understand real-world usage patterns</li>
                <li>Successfully convincing senior leadership to pursue a user-centered approach</li>
              </ul>
          
          {/* Challenges & Solutions */}
          <h2 className="text-[1.8rem] font-PixelifySans py-4">Challenges & Solutions</h2>

          {/* Challenge 1 */}
          <div className="flex col-2">
            <div className="w-full">
            <h3 className="text-xl font-bold">Poor visual hierarchy</h3>
            </div>

            <div className="w-full">
              <h4 className="text-gray-500 font-bold">Before</h4>
              <p>Critical cost-saving opportunities buried in data-heavy tables</p>
              <h4 className="text-gray-500 font-bold">After</h4>
              <ul>
                <li>Clear sections for Accounts, Products, and Opportunities</li>
                <li>Visual indicators for savings potential</li>
                <li>Distinct styles for interactive elements</li>
              </ul>
            </div>
          </div>
          
          {/* Challenge 2 */}
          <div className="flex col-2">
            <div className="w-full">
          <h3 className="text-xl font-bold">Complex information architecture</h3>
          </div>
          <div className="w-full">
          <h4 className="">Before</h4>
          <p>Dense tables with 23 columns of pharmaceutical data using internal jargon</p>
          
          <h4 className="">After</h4>
          <ul>
            <li>Consolidated to 10 essential columns by grouping related information</li>
            <li>Created consistent patterns for displaying multiple pricing metrics</li>
            <li>Translated technical terminology into user-friendly language</li>
          </ul>
          </div>
          </div>
          {/* Challenge 3 */}
          <div className="flex col-2">
            <div className="w-full">
              <h3 className="text-xl font-bold">Limited User Guidance</h3>
            </div>
            <div className="w-full">
              <h4 className="">Before</h4>
              <p>Unclear interaction patterns and no actionable items</p>
              <h4 className="">After</h4>
              <ul>
              <li>Explicit affordances for interactive elements</li>
              <li>Clear relationships between linked data</li>
              <li>Progressive disclosure for alternative products</li>
            </ul>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-[1.8rem] font-PixelifySans">Results</h2>
            </div>
            <div>
              <ul>
                <li>Defined core MVP functionality: pricing comparisons, filtering, and essential metadata</li>
                <li>Feature prioritization sessions with product and engineering teams</li>
                <li>Created strategic roadmap for post-MVP features</li>
                <li>Drove implementation through detailed Jira tickets and design QA</li>
                <li>Successfully launched MVP by end-of-year deadline</li>
              </ul>
            </div>
          </div>

          {/* Impact */}
          <h2 className="text-[1.8rem] font-PixelifySans">Impact</h2>
          <p>The investment in proper discovery and design delivered significant results.</p>  
          <ul>
              <li>Achieved 8.2/10 rating in user testing with 10 participants</li>
              <li>Received specific praise for improved clarity and usability</li>  
              <li>Positive reception from the board of execs, including the Senior Director of Product Development</li>
            </ul>
          {/* Quotes */}
          <div className="grid gap-4">
            <blockquote className="border-gray-400/80 text-gray-700 italic">It’s really helpful for us to see the opportunities laid out better and to be able to play with it.</blockquote>
            <blockquote className="border-gray-400/80 text-gray-700 italic">It’s about time!</blockquote>
            <blockquote className="border-gray-400/80 text-gray-700 italic">This would give me a reason to log onto ABC.</blockquote>
          </div>


        </div>

        

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