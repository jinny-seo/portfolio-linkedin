import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import NotebookPaperContainer from "@/components/NotebookPaperContainer";
import ResumeExperience from "./ResumeExperience";

export const ResumeSection = () => {
    return (
        <div id="resume" className="">
            <div className="bg-white shadow-lg lg:mr-[16rem] xl:mr-[18rem] lg:max-w-[800px]">
                <NotebookPaperContainer notebookPaperBg={false}>
                    <div className="flex mt-[4.5rem]">
                        <h2 className="flex-1 font-Doto leading-[70%] text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]">Resume</h2>
                        <a 
                            href="/seo-resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 font-Doto text-blue-800 hover:underline "
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
                                "One of two fouding designers at a cybersecurity startup, from its $27M seed to $70M+ in funding",
                                "MVP platform delivery from initial concept to deployment, securing U.S. government and Fortune 500 clients like REI",
                                "Established company’s first design system and visual language across internal and external touchpoints"
                            ]}
                            />
                            <ResumeExperience 
                            company="Crayon"
                            title="Senior UX Designer"
                            startDate="08/2018"
                            endDate="12/2021"
                            items={[
                                "Led onboarding experience redesign, collaborating across engineering, product, and leadership teams to deliver roadmap initiatives",   
                                "Spearheaded first third-party integration experience",
                                "Collaborated with development to create the company’s first component library"
                            ]}
                            />
                            <ResumeExperience 
                            company="projekt202"
                            title="Experience Designer"
                            startDate="08/2018"
                            endDate="12/2021"
                            items={[  
                                "B2B enterprise consulting engagements for 8 companies, delivering complex systems while building and evolving various design systems",
                                "Established company-wide audit process for accessibility consulting engagements, leading to internal education initiatives and client implementation"
                            ]}
                            />  
                            <ResumeExperience 
                            company="Sabre Labs"
                            title="R&D UX Designer"
                            startDate="08/2018"
                            endDate="12/2021"
                            items={[
                                "Pioneered company’s thought leadership on emerging technologies through research and rapid prototyping",
                                "Published industry-leading chatbot design guidelines (100k+ views, 2.5k+ likes), establishing thought leadership in conversational UI as one of the first guidelines for chatbots"
                            ]}
                            />
                            <ResumeExperience 
                            company="Dartmouth College"
                            startDate="2012"
                            endDate="2016"
                            items={[
                                "B.A. in Studio art", 
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
