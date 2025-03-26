import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";

export const HeroSection = () => {
    return (
        <div id="" className="p-container">
            <div className="mx-1 h-[85vh] flex items-center">
                <div className="flex flex-1">
                    <div className="pr-12">
                        <div className=" w-full flex-1">
                            <h1 className="title-hero">Eunji Jinny Seo</h1>
                            <p className="subtitle-hero">Enterprise Product Designer</p>
                            <p className="subtitle-hero divider-hero-spacing">. . .</p>
                            <div className="w-full">
                                <p className="max-w-[800px] lg:max-w-[836px] p-hero">
                                    I'm a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                                </p>
                                <div className="flex gap-12 mt-11 mb-12 lg:hidden">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-Doto p-hero">Contact me</p>
                                        <p className="p-hero">ogum536@gmail.com</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-Doto p-hero">Socials</p>
                                        <ul className="flex gap-4">
                                            <li><Image src={icon.medium} alt="Medium" width={26} /></li>
                                            <li><Image src={icon.linkedin} alt="LinkedIn" width={26} /></li>
                                            <li><Image src={icon.instagram} alt="Instagram" width={26} /></li>
                                            <li><Image src={icon.behance} alt="Behance" width={26} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="flex gap-[0.5rem] font-Doto my-8">
                                <span>Hand-coded with 🩷 by Jinny (c) 2025</span>
                            </p>
                        </div>
                    </div>

                    {/* Red box: match height of blue box */}
                  
                        <div className="hidden lg:flex flex-col justify-center gap-12 px-12 border-l border-slate-500 bg-red-500/0 p-hero">
                            <div className="flex flex-col gap-2">
                                <p className="font-Doto">Contact me</p>
                                <p>ogum536@gmail.com</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-Doto">Socials</p>
                                <ul className="flex gap-6">
                                    <li><Image src={icon.medium} alt="Medium" width={32} /></li>
                                    <li><Image src={icon.linkedin} alt="LinkedIn" width={32} /></li>
                                    <li><Image src={icon.instagram} alt="Instagram" width={32} /></li>
                                    <li><Image src={icon.behance} alt="Behance" width={32} /></li>
                                </ul>
                            </div>
                        </div>
                  
                </div>
            </div>
        </div>
    );
}
