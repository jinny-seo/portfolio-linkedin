"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";

import { projAssets } from "@/assets/projAssets";
import { navImage } from "@/assets/navImages";
import { icon } from "@/assets/icon";
import { CaseStudyNavButton } from "./CaseStudyNavButton";
import Windows95FrameInner from "./Windows95FrameInner";
import { Windows95TitleBar } from "./Windows95TitleBar";
import { CardContainer } from "./CardContainer";
import { CardSection } from "./CardSection";
import { TransitionLink } from "@/utils/TransitionLink";
import Windows95ButtonContainer from "./Windows95ButtonContainer";


const CaseStudyNavBottom = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

    // Ensure the component renders only on the client
    useEffect(() => {
        setCurrentPath(pathname.replace("/projects/", ""));
        setIsMounted(true);
    }, [pathname]);

    // Prevent rendering until the component is fully mounted
    if (!isMounted || !currentPath) return null;

    // Find the index of the current project
    const currentIndex = projAssets.findIndex((project) => project.link === currentPath);
    // If the project isn't found, return nothing to prevent crashes
    if (currentIndex === -1) return null;

    // Looping logic: Wrap around when at the first or last project
    const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
    const nextProject = projAssets[(currentIndex + 1) % projAssets.length];

    // Generate the "All Works" link with an anchor to the current project
    const allWorksLink = `/#project-${currentPath}`;

    //Extract dates
    const fullDate = projAssets[currentIndex].date;
    const yearOnly = fullDate.match(/\d{4}/)?.[0]

    return (
        <nav className="flex my-[0.3rem] h-[3.75rem]">
            
                <CaseStudyNavButton label="Work" image={navImage.arrowCurve} imageHover={navImage.arrowCurveHover} link={allWorksLink}/>
                <div className="flex gap-[0.15rem]">
                    <div className="pr-3 md:pr-5 border-slate-500/40 border-r mt-[6px] mb-[3px]" />
                    <div className="pr-3 md:pr-5 border-slate-500/40 border-l mt-[6px] mb-[3px]" />
                </div>
            
            <div className="flex  flex-1 gap-[0.25rem]">
                <div className="flex-1">
                    <CaseStudyNavButton label="Prev project" image={navImage.arrowLeft} imageHover={navImage.arrowLeftHover} link={prevProject.link}/>
                </div>
                <div className="flex-1">
                    <CaseStudyNavButton label="Next project" image={navImage.arrowRight} imageHover={navImage.arrowRightHover} link={nextProject.link}/>
                </div>
            </div>
        </nav>
    );
};

export default CaseStudyNavBottom;