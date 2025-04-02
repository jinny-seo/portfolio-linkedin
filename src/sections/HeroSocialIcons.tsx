import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";

type SocialIcon = {
  name: string;
  image: string;
  href: string;
  tooltip: string;
};

const socials: SocialIcon[] = [
  {
    name: "Medium",
    image: icon.medium,
    href: "https://medium.com/@eunjinnyseo",
    tooltip: "Writing",
  },
  {
    name: "Behance",
    image: icon.behance,
    href: "https://www.behance.net/jinny_eunji_seo",
    tooltip: "Art",
  },
  {
    name: "Code",
    image: icon.code,
    href: "https://codesandbox.io/u/jinny-seo",
    tooltip: "Code",
  },
  {
    name: "Instagram",
    image: icon.instagram,
    href: "https://www.instagram.com/jinnyse0",
    tooltip: "Life",
  },

];

export const HeroSocialIcons = () => {
  return (
    <ul className="flex gap-4 py-1">
      {socials.map((item, index) => (
        <li key={index} className="relative group">
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <Image src={item.image} alt={item.name} width={26} height={26} className="block md:hidden"/>
            <Image src={item.image} alt={item.name} width={30} height={30} className="hidden md:block"/>
          </a>
          <div className="absolute left-1/2 -translate-x-1/2 -top-9 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black" >
            {item.tooltip}
          </div>
        </li>
      ))}
    </ul>
  );
};
