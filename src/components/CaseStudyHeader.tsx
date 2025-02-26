import React from "react";
import Image, { StaticImageData} from "next/image";
import { toSentenceCase } from "@/utils/format";


export const CaseStudyHeader = () => {
    return(
    <div className="grid gap-4 p-8 md:p-10 lg:p-16 xl:p-20 ">
        <h1 className="font-PixelifySans">Transforming a pharmaceutical cost-savings platform</h1>
        <div className="">
            <p className="text-md">
                I led the transformation of AmerisourceBergen's internal pricing tool into a customer-facing platform, helping pharmacy managers identify cost-saving opportunities.
            </p> 
            <p className="pb-4">
                Despite the push to directly copy the internal PowerBI dashboard due to deadline pressures, I advocated for a deeper redesign and delivered a solution that balanced complex pricing data with intuitive user experience.
            </p>

            <hr></hr>

            <div className="pt-4">
                <h3 className="subheading">Timeline</h3>
                <p className="pb-2">Mar 2021 – Dec 2021 (10 months)</p>
            </div>
            
            <div className="w-full">
                <h3 className="subheading">Team</h3>
                <ul className="list-disc pl-5 pb-3">
                    <li>Sole designer (Me)</li>
                    <li>Senior Director of Product Development</li>
                    <li>Product Owner</li>
                    <li>Engineering team of 6 developers</li>
                </ul>
            </div>
            
            <div className="w-full">
                <h3 className="subheading">My role</h3>
                <p>Led end-to-end process from discovery to MVP launch</p>
            </div>
        </div>
    </div>        
    );
}

