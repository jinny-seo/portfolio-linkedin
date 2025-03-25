import React from "react";

export const HeroSection = () => {
    return(
        <div id="" className="p-container">
            <div className="h-[85vh] flex flex-col justify-center mx-1">
                <h1 className="title-hero">Eunji Jinny Seo</h1>
                <p className="subtitle-hero">Enterprise Product Designer</p>
                <p className="subtitle-hero divider-hero-spacing">. . .</p>
                <p className="p-hero max-w-[800px]">
                    I’m a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                </p>
                <p className="flex gap-[0.5rem] font-Doto my-8">
                    <span>Hand-coded with 🩷 by Jinny (c) 2025</span>
                </p>
            </div>
        </div>
    );
}
