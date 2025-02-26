"use client";
import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";
import { Navigation } from "@/components/Navigation";
import { activeScroll } from "@/utils/activeScroll";
import { projAssets } from "@/assets/projAssets";

export default function Home() {

  const isNavVisible = activeScroll();

  
  return (
    <div className="flex flex-col w-full bg-red-100 md:bg-yellow-200 lg:bg-blue-200 xl:bg-purple-200">
      <main className="grid gap-8 row-start-2 items-center sm:items-start">

        {/* Navigation */}
        <div className={`${isNavVisible ? "translate-y-0" : "translate-y-full"} transition-transform duration-300 
        fixed flex justify-center bottom-0 left-0 right-0
        lg:translate-y-0 lg:justify-end lg:m-4`}>
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
        <div id="work" className=" bg-black/20">
          <h1>Work</h1>
          {projAssets.map(
            (project) => (
              <div key={project.name} className="relative lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] lg:max-w-[1024px]  bg-yellow-500/50">
                <div className="bg-red-500/50">
                  <Image src={project.image} alt={project.name}/>
                </div>
                <div className="lg:absolute lg:top-1/2 lg:-right-[56px] xl:-right-[168px] lg:w-[400px] xl:w-[480px] bg-blue-800/50">
                  <p className="p-8">{project.description}</p>
                </div>
              </div>
            )
          )}

        </div>
        <div id="resume" className="h-[1000px] bg-black/40">
          <h1>Resume</h1>
        </div>
        <div id="contact" className="h-[1000px] bg-black/60">
          <h1>Contact</h1>
        </div>
      </main>
    </div>
  );
}
