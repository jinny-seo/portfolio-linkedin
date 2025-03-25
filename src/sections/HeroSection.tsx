import React from "react";

export const HeroSection = () => {
    return(
        <div id="" className="h-[85vh] flex flex-col justify-center px-container">
            <h1 className="title-hero">Eunji Jinny Seo</h1>
            <p className="subtitle-hero">Enterprise Product Designer</p>
            <p className="subtitle-hero divider-hero-spacing">. . .</p>
            <div className="lg:mr-[350px] xl:mr-[400px] lg:max-w-[1200px]">
                <p className="p-hero max-w-[800px]">
                    I’m a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                </p>
            </div>
        </div>
    );
}
