"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import { navImage } from "../assets/navImages";
import { NavItem } from "./NavItem";
import { activeNavItem } from "../utils/activeNavItem"; // Import custom hook


export const navItemAsset = [
  {
      label: "home",
      image: navImage.computer,
      imageHover: navImage.computerHover,
  },
  {
      label: "work",
      image: navImage.art,
      imageHover: navImage.artHover,
  },
//   {
//       label: "resume",
//       image: navImage.note,
//       imageHover: navImage.noteHover,
//   },
//   {
//       label: "contact",
//       image: navImage.mail,
//       imageHover: navImage.mailHover,
//   },
]

export const Navigation = () => {
    const activeSection = activeNavItem(["work", "resume", "contact"]);
    return(
        <nav className="mx-2 mt-2 mb-1">
            <ul className="flex list-none gap-1 ">
                {navItemAsset.map((item) => (
                    <li key={item.label}>
                        <NavItem 
                            image={item.image} 
                            imageHover={item.imageHover} 
                            label={item.label}     
                            size="sm"
                            link={ item.label === "home" ? "#" : `#${item.label}` }
                            isActive={ item.label === activeSection}
                        />
                    </li>
                ))}
                <li>
                    {/* Resume link for larger breakpoints */}
                    <div className="hidden md:block">
                        <NavItem 
                            image={navImage.note}
                            imageHover={navImage.noteHover}
                            label="resume"
                            size="sm"
                            link="#resume"
                        />
                    </div>
                    {/* Resume download link for smaller breakpoints */}
                    <div className="md:hidden">
                        <a href="/seo-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 -mb-[0.84rem] font-Doto">
                            <div className={`flex flex-col justify-center gap-1 items-center pt-1 w-[72px] h-[72px] rounded-[3px] hover:bg-purple-600/20 group`}>                        
                                {/* Default image - Hide on hover */}
                                <Image src={navImage.note} alt="" width={32} className={`object-cover group-hover:hidden`} />
                                {/* Hover image - Show on hover */}
                                <Image src={navImage.noteHover} alt="" width={32} className={`object-cover group-hover:block hidden`} />
                                <span className="font-Tiny5 text-[0.82rem]">Resume</span>
                            </div>
                        </a>
                    </div>
                </li>


            </ul>
        </nav>



    );
}
