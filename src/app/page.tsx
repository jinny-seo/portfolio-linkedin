"use client";
import Image from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "../components/NavItem";
import { Navigation } from "@/components/Navigation";
import { activeScroll } from "@/utils/activeScroll";

export default function Home() {

  const isNavVisible = activeScroll();

  
  return (
    <div className="flex flex-col w-full h-full bg-purple-300">
      <main className="grid gap-8 row-start-2 items-center sm:items-start">

        {/* Navigation */}
        <div className={`${isNavVisible ? "translate-y-0" : "translate-y-full"} transition-transform duration-300 
        fixed flex justify-center bottom-0 left-0 right-0 bg-purple-600`}>
          <div className="bg-purple-500">
            <Navigation/>
          </div>
        </div>
        
        {/* Content */}
        <div id="" className="h-[1000px] bg-purple-200">
          <h1>Hero</h1>
          <Image src={navImage.computer} alt="" width={100} height={100} />
        </div>
        <div id="work" className="h-[1000px] bg-purple-200">
          <h1>Work</h1>
          <Image src={navImage.art} alt="" width={100} height={100} />
        </div>
        <div id="resume" className="h-[1000px] bg-purple-200">
          <h1>Resume</h1>
          <Image src={navImage.note} alt="" width={100} height={100} />
        </div>
        <div id="contact" className="h-[1000px] bg-purple-200">
          <h1>Contact</h1>
          <Image src={navImage.mail} alt="" width={100} height={100} />
        </div>
        

        
        



      </main>
    </div>
  );
}
