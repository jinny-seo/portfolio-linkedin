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


const CaseStudyNav = () => {
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
        <div>
            <Windows95TitleBar>
                <div className="font-Doto">
                <span>Project {currentIndex + 1}</span>
                <span className="px-1">·</span>
                <span>{projAssets[currentIndex].company}</span>
                </div>
            </Windows95TitleBar>

            <nav className="flex gap-[0.25rem] my-[0.2rem]">
                {/* All works button */}
                <div className="py-[1.5px]">
                    <CaseStudyNavButton label="Work" image={navImage.arrowCurve} imageHover={navImage.arrowCurveHover} link={allWorksLink}
                    />
                </div>

                {/* Date & duration metadata: START */}
                <div className={`flex flex-col flex-1 text-sm leading-[160%] md:text-[1rem]`}>
                    <div className={`flex-1`}>
                    <Windows95FrameInner>
                            <div className="flex gap-[0.6rem] px-[0.4rem]">
                                <Image src={icon.calendar} alt="" width={15} className={``}/>
                                <span className={`flex-1 font-Doto`}>
                                    {/* Full date for md+ screens */}
                                    <span className="hidden md:inline">{fullDate}</span>
                                    {/* Year-only for small screens */}
                                    <span className="inline md:hidden">{yearOnly}</span>
                                </span>
                            </div>
                        </Windows95FrameInner>
                    </div>
                    <div className={`flex-1`}>
                        <Windows95FrameInner>
                            <div className="flex gap-[0.6rem] px-[0.4rem]">
                                <Image src={icon.clock} alt="" width={15} className={``}/>
                                <span className="flex-1 font-Doto">
                                    {/* Full duration: X months */}
                                    <span className="hidden md:inline">
                                        {projAssets[currentIndex].duration}
                                    </span>
                                    {/* Abbreviated version for sm screens: X mo */}
                                    <span className="inline md:hidden truncate">
                                        {projAssets[currentIndex].duration.replace('months', 'mo')}
                                    </span>
                                    </span>
                            </div>
                        </Windows95FrameInner>
                    </div>
                </div>
                {/* Date & duration metadata: END */}


                {/* Prev & Next buttons */}
                <div className="py-[1.5px]">
                    <CaseStudyNavButton label="Prev" image={navImage.arrowLeft} imageHover={navImage.arrowLeftHover} link={prevProject.link}/>
                </div>
                <div className="py-[1.5px]">
                    <CaseStudyNavButton label="Next" image={navImage.arrowRight} imageHover={navImage.arrowRightHover} link={nextProject.link}/>
                </div>
            </nav>
            
        </div>
    );
};

export default CaseStudyNav;