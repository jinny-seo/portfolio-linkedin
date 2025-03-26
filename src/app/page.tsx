"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";
import { Navigation } from "@/components/Navigation";
import { activeScroll } from "@/utils/activeScroll";
import { projAssets } from "@/assets/projAssets";
import { ProjectItem } from "@/components/ProjectItem";
import Windows95FrameInner from "@/components/Windows95FrameInner";
import Windows95FrameOuter from "@/components/Windows95FrameOuter";
import ProjectPreviewNav from "@/components/ProjectPreviewNav";
import { HeroSection } from "@/sections/HeroSection";
import { SectionTitle } from "@/sections/SectionTitle";
import { icon } from "@/assets/icon";

export default function Home() {
  const isNavVisible = activeScroll();
  return (
    <main className="flex flex-col w-full ">
      
      {/* Navigation: START */}
      <div className={`${isNavVisible ? "-translate-y-[10%]" : "translate-y-[120%]"} transition-transform duration-300 
      fixed flex justify-center bottom-0 left-0 right-0 z-10
      lg:translate-y-0 lg:justify-end md:m-4`}>
        <div className="bg-purple-200/20 backdrop-blur-lg rounded-lg border-purple-400 border-none">
          <Navigation/>
        </div>
      </div>
      {/* Navigation: END */}

      {/* Hero: START */}
      <div className="h-[100vh]">
      <div className="bg-hero-grid ">
        <div className="bg-hero-gradient">
          <HeroSection/>
        </div>
      </div>
      </div>
      {/* Hero: END */}

      <div className="flex flex-col p-container">
        {/* Work: START */}
        <div id="work" className="py-container">
          <div className="flex flex-col">
            <SectionTitle title="Work"/>
            {projAssets.map( (project, index) => {
                const prevProjLink =
                  index > 0 ? `#project-${projAssets[index - 1].link}` : null;
                const nextProjLink =
                  index < projAssets.length - 1 ? `#project-${projAssets[index + 1].link}` : null;
                return (
                  <div key={project.name} id={`project-${project.link}`} className="pt-[1rem] md:pt-[2rem] pb-[2rem] md:pb-[4rem] ">
                    <ProjectItem
                      name={project.name}
                      company={project.company}
                      date={project.date}
                      description={project.description}
                      link={`/projects/${project.link}`}
                      image={project.image}
                      prevProjLink={prevProjLink}
                      nextProjLink={nextProjLink}
                    />
                  </div>
                );
            })}
          </div>
        </div>
        {/* Work: END */}

        {/* Resume: START */}
        <div id="resume" className="py-container">
          
          <div className="bg-white border border-slate-500/10 max-w-[1024px] md:mr-[5rem] lg:mr-[22rem] xl:mr-[24rem] max-w-[800px]">
            <div className="flex">
              <div className="border-r border-red-400/50">
                <div className="w-[7rem]" />
              </div>
              <div className="flex items-end w-full pt-16 px-2">
                <h2 className="flex-1 self-end font-Doto leading-[70%] text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]">Resume</h2>
                <a href="/seo-resume.pdf" target="_blank" rel="noopener noreferrer" 
                className="font-Doto text-blue-800 hover:underline ">
                  <div className="flex items-center gap-2 px-6">
                  <Image src={icon.download} alt="" width={13.5} height={13.5}/>
                  <p className="mt-[0.1rem]">Download PDF</p>    
                  </div>
                </a>
              </div>
              

              
            </div>
            <div className="flex ">
              <div className="bg-notebook border-r border-red-400/50">
                <div className="w-[7rem]"/>
              </div>
              <div className="w-full  bg-notebook">

                <div className="mt-[2.34rem] mr-[2rem] md:mr-[3rem] lg:mr-[4rem] md:mb-[4rem] lg:mb-[4.5rem] max-w-[650px]">

                  <div className="mt-[1.8rem]">
                    <div className="px-2">
                      <p className="font-Doto leading-[1.8rem] underline">Mimic, Senior Product Designer * 12/2023 – 02/2025</p>
                      <ul className="mb-0">
                        <li className="mb-0 leading-[1.8rem]">- One of two fouding designers at a cybersecurity startup, from its $27M seed to $70M+ in funding</li>
                        <li className="mb-0 leading-[1.8rem]">- MVP platform delivery from initial concept to deployment, securing U.S. government and Fortune 500 clients like REI</li>
                        <li className="mb-0 leading-[1.8rem]">- Established company’s first design system and visual language across internal and external touchpoints</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-[1.8rem] mr-[3rem]">
                    <div className="px-2">
                      <p className="font-Doto leading-[1.8rem] underline">Crayon, Senior UX Designer * 08/2018 – 12/2021</p>
                      <ul className="mb-0">
                        <li className="mb-0 leading-[1.8rem]">- Led onboarding experience redesign, collaborating across engineering, product, and leadership teams to deliver roadmap initiatives</li>
                        <li className="mb-0 leading-[1.8rem]">- Spearheaded first third-party integration experience</li>
                        <li className="mb-0 leading-[1.8rem]">- Collaborated with development to create the company’s first component library</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-[1.8rem] mr-[3rem]">
                    <div className="px-2">
                      <p className="font-Doto leading-[1.8rem] underline">projekt202, Experience Designer * 08/2018 – 12/2021</p>
                      <ul className="mb-0">
                        <li className="mb-0 leading-[1.8rem]">- B2B enterprise consulting engagements for 8 companies, delivering complex systems while building and evolving various design systems</li>
                        <li className="mb-0 leading-[1.8rem]">- Established company-wide audit process for accessibility consulting engagements, leading to internal education initiatives and client implementation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-[1.8rem] mr-[3rem]">
                    <div className="px-2">
                      <p className="font-Doto leading-[1.8rem] underline">Sabre Labs, R&D UX Designer * 08/2018 – 12/2021</p>
                      <ul className="mb-0">
                        <li className="mb-0 leading-[1.8rem]">- Pioneered company’s thought leadership on emerging technologies through research and rapid prototyping</li>
                        <li className="mb-0 leading-[1.8rem]">- Published industry-leading chatbot design guidelines (100k+ views, 2.5k+ likes), establishing thought leadership in conversational UI as one of the first guidelines for chatbots</li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-2 mr-[3rem]">
                    <p className="font-Doto mt-[3.6rem] leading-[1.8rem] text-2xl">
                      Education
                    </p>
                    <p className="mt-[1.8rem] font-Doto leading-[1.8rem] underline">Dartmouth College</p>
                    <p className="leading-[1.8rem]">B.A. in Studio art with minors in Computer Science and Digital Art</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Resume: END */}
      
      </div>
      
    </main>
  );
}
