import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import { HeroSocialIcons } from "./HeroSocialIcons";
import CopyButton from "@/components/CopyButton";
import { InTheWildSection } from "./InTheWildSection";
import { ContactMeSection } from "./ContactMeSection";

export const HeroSection = () => {
    return (
        <section id="hero" className="p-container">
            <div className="flex mx-1 md:h-[80vh] md:items-center">
                <div className="flex flex-1">
                    <div className="lg:pr-12 xl:pr-16">
                        <div className="flex-1 w-full ">
                            <h1 className="title-hero">Eunji Jinny Seo</h1>
                            <p className="subtitle-hero">Enterprise Product Designer</p>
                            <p className="subtitle-hero divider-hero-spacing">. . .</p>
                            <div className="flex flex-col w-full">
                                <p className="max-w-[800px] lg:max-w-[836px] p-hero">
                                    I'm a problem-solving creative who digs beyond the surface to uncover the problem worth solving. From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                                </p>
                                <p className="max-w-[800px] lg:max-w-[836px] p-hero">
                                </p>
                                {/* For smaller breakpoints */}
                                <div className="flex flex-col md:flex-row gap-6 my-6 lg:hidden">
                                    <div className="">
                                        <ContactMeSection/>
                                    </div>
                                    <div className="">
                                        <InTheWildSection/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* For larger breakpoints */}
                  
                    <div className="hidden lg:flex flex-col justify-center gap-12 pl-12 xl:pl-16 border-l border-slate-500 bg-red-500/0 p-hero max-w-[40%] min-w-[40%]">
                        <ContactMeSection/>
                        <InTheWildSection/>
                    </div>
                </div>
            </div>
        </section>
    );
}
