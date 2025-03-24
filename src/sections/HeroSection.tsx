import React from "react";

export const HeroSection = () => {
    return(
        <div id="" className="h-[90vh] flex flex-col gap-4 justify-center px-container gap-2 text-lg ">
            <h1 className="title-hero">Eunji Jinny Seo</h1>
            <p className="subtitle-hero">Enterprise Product Designer</p>

            <p className="subtitle-hero mb-2">. . .</p>
            
            <div className="md:relative lg:pr-32 md:mr-[72px] lg:mr-[350px] xl:mr-[400px] lg:max-w-[1200px]">
                <p className="p-hero">
                    I’m a problem-solving creative with a strong visual foundation and a focus on delivering impactful MVPs. 
                    From B2B SaaS platforms to design systems built from the ground up, I turn complexity into clarity and ship what matters.
                </p>
            </div>
        </div>
    );
}
