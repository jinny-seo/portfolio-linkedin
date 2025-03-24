"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { projAssets } from "@/assets/projAssets";
import { NavItem } from "@/components/NavItem";
import { navImage } from "@/assets/navImages";

import { CaseStudyNavButton } from "./CaseStudyNavButton";
import Windows95FrameInner from "./Windows95FrameInner";

interface CaseStudyNavigationProps {
    date?: string;
    duration?: string;
    currProjLink: string;
    linkPrev: string;
    linkNext: string;
}

export default function CaseStudyNavigation({ date, duration, currProjLink, linkPrev, linkNext }: CaseStudyNavigationProps) {

    return (
        <nav className="flex gap-[0.25rem] my-[0.2rem]">

            <div className="py-[1.5px]">
                <CaseStudyNavButton label="Work" image={navImage.arrowCurve} imageHover={navImage.arrowCurveHover} link={`/#project-${currProjLink}`}
                />
            </div>
            
            <div className={`flex flex-col flex-1 `}>
                <div className={`flex-1`}>
                    <Windows95FrameInner>
                        <span className={`flex font-Doto px-2`}>{date}</span>
                    </Windows95FrameInner>
                </div>
                <div className={`flex-1`}>
                    <Windows95FrameInner>
                        <span className={`flex font-Doto px-2`}>{duration}</span>
                    </Windows95FrameInner>
                </div>
            </div>
            <div className="py-[1.5px]">
                <CaseStudyNavButton label="Prev" image={navImage.arrowLeft} imageHover={navImage.arrowLeftHover} link={linkPrev}/>
            </div>
            <div className="py-[1.5px]">
                <CaseStudyNavButton label="Next" image={navImage.arrowRight} imageHover={navImage.arrowRightHover} link={linkNext}/>
                
            </div>
        </nav>
    );
};
