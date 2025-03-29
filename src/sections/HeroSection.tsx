import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import { HeroSocialIcons } from "./HeroSocialIcons";
import CopyButton from "@/components/CopyButton";

export const HeroSection = () => {
    return (
        <div id="" className="p-container">
            <div className="mx-1 h-[85vh] flex items-center">
                <div className="flex flex-1">
                    <div className="lg:pr-12">
                        <div className=" w-full flex-1">
                            <h1 className="title-hero">Eunji Jinny Seo</h1>
                            <p className="subtitle-hero">Enterprise Product Designer</p>
                            <p className="subtitle-hero divider-hero-spacing">. . .</p>
                            <div className="w-full">
                                <p className="max-w-[800px] lg:max-w-[836px] p-hero">
                                    I'm a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                                </p>
                                {/* For smaller breakpoints */}
                                <div className="flex flex-col md:flex-row gap-8 mt-11 mb-12 lg:hidden">
                                    <div className="flex flex-1 flex-col gap-1 mr-12">
                                        <p className="font-Doto p-hero">Contact me</p>
                                        <div className="flex gap-[0.6rem]">
                                            <Image src={icon.mail} alt="" width={16} className="ml-[0rem]"/>
                                            <span className="mb-[0.18rem] p-hero">ogum536@gmail.com</span>
                                            <CopyButton/>
                                        </div>
                                        <a className="inline-flex w-fit gap-2" href="https://linkedin.com/in/jinny-seo" target="_blank" rel="noopener noreferrer">
                                            <Image src={icon.link} alt="" width={17} />
                                            <span className="mt-[0rem] p-hero underline underline-offset-2 hover:no-underline">LinkedIn</span>
                                        </a>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                        <p className="font-Doto p-hero">In the wild</p>
                                        <HeroSocialIcons/>
                                    </div>

                                </div>
                            </div>

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
                                <HeroSocialIcons/>
                            </div>
                        </div>
                  
                </div>
            </div>
        </div>
    );
}
