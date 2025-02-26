"use client";
import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";
import { Navigation } from "@/components/Navigation";
import { activeScroll } from "@/utils/activeScroll";

export default function Home() {

  const isNavVisible = activeScroll();

  
  return (
    <div className="flex flex-col w-full h-full bg-red-100 md:bg-yellow-200 lg:bg-blue-200 xl:bg-purple-200">
      <main className="grid gap-8 row-start-2 items-center sm:items-start">

        {/* Navigation */}
        <div className={`${isNavVisible ? "translate-y-0" : "translate-y-full"} transition-transform duration-300 
        fixed flex justify-center bottom-0 left-0 right-0
        lg:translate-y-0 lg:justify-end lg:m-4`}>
          <div className="bg-purple-500">
            <Navigation/>
          </div>
        </div>
        
        {/* Content */}
        <div id="" className="h-[1000px]">
          <h1>Hero</h1>
          <p>Some content</p>
          <Image src={navImage.computer} alt="" width={100} height={100} />
        </div>
        <div id="work" className="h-[1000px]">
          <h1>Work</h1>
          {/* Testing out content width */}
          <div className="relative lg:mr-[350px] xl:mr-[500px] 2xl:mr-[600px] h-[400px] max-w-[1024px]  bg-yellow-500/50">
            <div className="w-full h-full bg-red-500/50"></div>
            <div className="lg:absolute lg:top-1/2 lg:-right-[56px] xl:-right-[168px] w-[400px] xl:w-[480px] bg-blue-800/50">
              <p className="p-8">Launching an MVP for a dashboard used by pharmacy purchasing managers to find cheaper alternatives to products</p>
            </div>
          </div>
          <Image src={navImage.art} alt="" width={100} height={100} />
        </div>
        <div id="resume" className="h-[1000px]">
          <h1>Resume</h1>
          <Image src={navImage.note} alt="" width={100} height={100} />
        </div>
        <div id="contact" className="h-[1000px">
          <h1>Contact</h1>
          <Image src={navImage.mail} alt="" width={100} height={100} />
        </div>
        

        
        



      </main>
    </div>
  );
}
