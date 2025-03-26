import React from "react";

export const HeroSection = () => {
    return (
        <div id="" className="p-container">
            <div className="mx-1 h-[85vh] flex items-center">
                <div className="flex flex-1">
                    <div className="pr-12">
                        <div className="p-hero w-full flex-1">
                            <h1 className="title-hero">Eunji Jinny Seo</h1>
                            <p className="subtitle-hero">Enterprise Product Designer</p>
                            <p className="subtitle-hero divider-hero-spacing">. . .</p>
                            <div className="w-full">
                                <p className="max-w-[800px]">
                                    I'm a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                                </p>
                                </div>
                            <p className="flex gap-[0.5rem] font-Doto my-8">
                                <span>Hand-coded with 🩷 by Jinny (c) 2025</span>
                            </p>
                        </div>
                    </div>

                    {/* Red box: match height of blue box */}
                    <div className="flex flex-col justify-center gap-6 px-12 border-l border-slate-500 bg-red-500/0">
                        <div className="flex flex-col gap-1">
                            <p className="font-Doto">Contact me</p>
                            <p>ogum536@gmail.com</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="font-Doto">Socials</p>
                            <p>LinkedIn</p>
                            <p>Instagram</p>
                            <p>Medium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
