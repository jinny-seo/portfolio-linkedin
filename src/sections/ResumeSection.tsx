import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import NotebookPaperContainer from "@/components/NotebookPaperContainer";
import ResumeExperience from "./ResumeExperience";

export const ResumeSection = () => {
    return (
        <div>
            <div className="bg-white shadow-lg lg:mr-[13rem] xl:mr-[16rem] lg:max-w-[800px]">
                <NotebookPaperContainer notebookPaperBg={false}>
                    <div className="flex mt-[4.5rem]">
                        <h2 className="flex-1 font-Doto -mb-[0.4rem] text-[1.8rem] lg:text-[2rem]">Resume</h2>
                        <a 
                            href="/seo-resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 -mb-[0.84rem] font-Doto text-blue-800 hover:underline "
                        >
                        {/* <div className="flex items-center gap-2 px-6"> */}
                            <Image src={icon.download} alt="" width={13.5} height={13.5}/>
                            <p className="mt-[0.1rem]">View PDF</p>    
                        {/* </div> */}
                        </a>
                    </div>
                </NotebookPaperContainer>

                {/* Content */}
                <NotebookPaperContainer>
                    <div className="mt-[1.8rem] aspect-[8/11]">
                        <div className="flex flex-col gap-[1.8rem] pt-[0.5rem] pb-[3rem]">
                            <ResumeExperience 
                            company="Mimic"
                            title="Senior Product Designer"
                            startDate="12/2023"
                            endDate="02/2025"
                            items={[
                                "One of two founding designers at a cybersecurity startup, supporting company growth from $27M to $70M+ in funding",
                                "Delivered MVP in 8 months, securing U.S. government and Fortune 500 clients like REI",
                                "Established design system and brand identity and ensured WCAG compliance on the public-facing website",
                            ]}
                            />
                            <ResumeExperience 
                            company="Crayon"
                            title="Senior UX Designer"
                            startDate="01/2022"
                            endDate="04/2023"
                            items={[
                                "Led platform-wide redesign of the navigation, onboarding, and integrations to improve user workflows",
                                "Shipped improvements to daily alerts and email clarity, helping users understand key feature values of the platform",
                                "Collaborated with development to create company’s first component library",
                            ]}
                            />
                            <ResumeExperience 
                            company="projekt202"
                            title="Experience Designer"
                            startDate="08/2018"
                            endDate="12/2021"
                            items={[  
                                "Delivered complex B2B enterprise consulting engagements for eight companies across healthcare, financial services, and more",
                                "Built and maintained design systems for complex enterprise solutions",
                                "Created company-wide audit process for accessibility engagements and internal education materials",
                            ]}
                            />  
                            <ResumeExperience 
                            company="Sabre Labs"
                            title="R&D UX Designer"
                            startDate="07/2016"
                            endDate="08/2018"
                            items={[

                                "Created interactive prototypes to explore future tech applications in the travel and hospitality space",
                                "Produced tech trend reports with custom illustrations to communicate R&D insights",
                                "Published industry-first chatbot guidelines with 100k+ views and 2k+ likes",
                            ]}
                            />

                            <span className="font-Doto text-[1.45rem] leading-[1.8rem]">Education</span>
                            <ResumeExperience 
                            company="Dartmouth College"
                            startDate="2012"
                            endDate="2016"
                            items={[
                                "B.A. in Studio Art", 
                                "Minors in Computer Science and Digital Art"
                            ]}
                            />
                        </div>
                    </div>
                </NotebookPaperContainer>
            </div>
        </div>
    );
}
