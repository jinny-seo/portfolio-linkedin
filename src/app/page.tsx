"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { activeScroll } from "@/utils/activeScroll";
import { projAssets } from "@/assets/projAssets";
import { ProjectItem } from "@/components/ProjectItem";
import { HeroSection } from "@/sections/HeroSection";
import { SectionTitle } from "@/sections/SectionTitle";
import { ResumeSection } from "@/sections/ResumeSection";

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
        <section id="resume" className="hidden md:block py-container">
          <ResumeSection/>

          <div className="grid grid-cols-3 gap-x-1 py-12 lg:mr-[13rem] xl:mr-[16rem] lg:max-w-[800px] justify-center">
            <div className="col-span-1">

            <div className="bg-green-200/70 border-orange-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] rotate-2 shadow-lg">
              <span className="font-Doto text-[1.1rem]">Product</span>
              <ul className="grid grid-cols-1 gap-x-[0.5rem] list-inside ">
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  Interaction design
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  Prototyping
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  User research
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  User testing
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  Design systems
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  Accessibility
                </li>
              </ul>
            </div>
            </div>
            <div className="mt-4 col-span-1">
              <div className="bg-yellow-200/80 border-yellow-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] -rotate-3 shadow-lg">
                <span className="font-Doto text-[1.1rem]">Design</span>
                <ul className="grid grid-cols-1 gap-x-[0.5rem] list-inside ">
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    Figma
                  </li>
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    Sketch
                  </li>
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    Illustrator
                  </li>
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    Photoshop
                  </li>
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    After Effects
                  </li>
                  <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                    InDesign
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 ">
            <div className="bg-red-200 border-red-300/50 border-[0.05em] flex flex-col gap-y-2 px-[1.8em] py-[1.5em] w-[16em] h-[16em] aspect-[1] rotate-2 shadow-lg md:-ml-8 lg:-ml-4">
              <span className="font-Doto text-[1.1rem]">Code</span>
              <ul className="grid grid-cols-1 gap-x-[0.5rem] list-inside ">
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  HTML/CSS
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  JavaScript
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  TypeScript
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  React
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  NextJS
                </li>
                <li className="relative pl-5 before:content-['-'] before:absolute before:left-[0.2em] before:top-0">
                  Tailwind
                </li>
              </ul>
            </div>
            </div>

          </div>
        </section>
        {/* Resume: END */}

        {/* Footer: START */}
        <footer className="py-[7rem] lg:pt-[4rem] lg:pb-[0rem]">
          <div className="flex flex-col py-container gap-6 md:gap-8 lg:gap-10 items-center lg:items-start">
            <p className="font-Doto text-[1.15rem] md:text-[1.2rem] lg:text-[1.3rem]">. . .</p>
            <div className="flex flex-col gap-[0.5rem] font-Doto text-center lg:text-left">
              {/* For smaller breakpoints */}
              <div className="block lg:hidden">
                <p>Hand-coded with 🩷 with React, NextJS, and Tailwind</p>
                <a href="https://github.com/jinny-seo/design-portfolio-2025" 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-blue-800 underline underline-offset-2 hover:no-underline"
                >
                  View on Github
                </a>
              </div>
              {/* For larger breakpoints */}
              <div className="hidden lg:block ">
                  <span>Hand-coded with 🩷 with React, NextJS, and Tailwind</span>
                  <a href="https://github.com/jinny-seo/design-portfolio-2025" 
                      target="_blank" rel="noopener noreferrer" 
                      className="text-blue-800 underline underline-offset-2 hover:no-underline mx-2 px-2"
                    >
                      View on Github
                    </a>
              </div>

              <p className="my-6">Jinny Seo (c) 2025</p>
            </div>
          </div>
        </footer>
        {/* Footer: END */}
      </div>     
    </main>
  );
}