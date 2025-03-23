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

export default function Home() {
  const isNavVisible = activeScroll();
  return (
    <main className="flex flex-col w-full bg-red-100 md:bg-yellow-200 lg:bg-blue-200 xl:bg-purple-200">


        {/* Navigation */}
        <div className={`${isNavVisible ? "translate-y-0" : "translate-y-full"} transition-transform duration-300 
        fixed flex justify-center bottom-0 left-0 right-0 z-10
        lg:translate-y-0 lg:justify-end md:m-4`}>
          <div className="bg-purple-500">
            <Navigation/>
          </div>
        </div>
        
        {/* Hero */}
        <div id="" className="h-screen">
          <h1>Hero</h1>
          <p>Some content</p>
          
        </div>

        {/* Work */}
        <div id="work" className="">
          <h1 className="mb-8">Work</h1>

          <div className="flex flex-col gap-8">

          
          {/* <Windows95FrameOuter label="test">
            <Windows95FrameInner>
              <Image src={projAssets[0].image} alt="test" className=""/>
            </Windows95FrameInner>
            <div className='flex flex-col mx-1 mb-4 mt-1 md:hidden'>
              <span className='p-4 pb-5'>test description</span>
              <ProjectPreviewNav currProjLink={projAssets[0].link} prevProjLink={projAssets[0].link} nextProjLink={projAssets[0].link} />
            </div>
          </Windows95FrameOuter> */}

            {projAssets.map(
              (project, index) => {
                const prevProjLink =
                  index > 0 ? `#project-${projAssets[index - 1].link}` : null;
                const nextProjLink =
                  index < projAssets.length - 1 ? `#project-${projAssets[index + 1].link}` : null;
                return (
                  <div key={project.name} id={`project-${project.link}`} className="py-6">
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
        <div id="resume" className="h-[1000px] bg-black/40">
          <h1>Resume</h1>
        </div>
        <div id="contact" className="h-[1000px] bg-black/60">
          <h1>Contact</h1>
        </div>
      
    </main>
  );
}
