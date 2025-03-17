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

export default function crayonProject() {
    return (
      <CaseStudyContainer>
        <CardContainer>
          <h2 className="font-PixelifySans mt-8 ">Background</h2>
          <p>Pharmacy managers could only access cost-saving alternatives through sales rep phone calls, creating three key problems:</p>
          <BulletList>
            <li>Sales reps spent valuable time explaining savings rather than building strategic relationships</li>
            <li>Customers missed time-sensitive opportunities between scheduled calls</li>
            <li>Access to savings information depended entirely on sales rep availability</li>
          </BulletList>
          <p>Our vision was to transform this internal PowerBI dashboard into a self-service external tool where customers could independently discover savings opportunities.</p>
        </CardContainer>
      </CaseStudyContainer>
    );
  }
  