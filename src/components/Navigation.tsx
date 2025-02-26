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
  {
      label: "resume",
      image: navImage.note,
      imageHover: navImage.noteHover,
  },
  {
      label: "contact",
      image: navImage.mail,
      imageHover: navImage.mailHover,
  },
]

export const Navigation = () => {
    const activeSection = activeNavItem(["work", "resume", "contact"]);
    return(
        <nav className="w-fit rounded-[5px] bg-purple-400">
            <ul className="flex list-none gap-1 p-1">
            {navItemAsset.map(
                (item) => (
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
                )
            )}
            </ul>
        </nav>



    );
}
