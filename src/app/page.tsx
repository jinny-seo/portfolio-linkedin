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
          <SectionTitle title="Resume"/>
        </div>
        {/* Resume: END */}
        
        {/* Contact: START */}
        <div id="contact" className="py-container">
          <SectionTitle title="Contact"/>
        </div>
        {/* Contact: END */}
      
      </div>
      
    </main>
  );
}
