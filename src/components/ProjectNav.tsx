"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { projAssets } from "@/assets/projAssets";
import { NavItem } from "@/components/NavItem";
import { navImage } from "@/assets/navImages";

export const ProjectNav: React.FC = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

    // Ensure the component renders only on the client
    useEffect(() => {
        setCurrentPath(pathname.replace("/projects/", ""));
        setIsMounted(true);
    }, [pathname]);

    // Prevent rendering until the component is fully mounted
    if (!isMounted || !currentPath) return null;

    // Find the index of the current project
    const currentIndex = projAssets.findIndex((project) => project.link === currentPath);

    // If the project isn't found, return nothing to prevent crashes
    if (currentIndex === -1) return null;

    // Looping logic: Wrap around when at the first or last project
    const prevProject = projAssets[(currentIndex - 1 + projAssets.length) % projAssets.length];
    const nextProject = projAssets[(currentIndex + 1) % projAssets.length];

    // Generate the "All Works" link with an anchor to the current project
    const allWorksLink = `/#project-${currentPath}`;

    return (
        <div className="flex justify-between">
            {/* Previous Button */}
            <NavItem
                image={navImage.arrowLeft}
                imageHover={navImage.arrowLeftHover}
                label="Prev"
                size="sm"
                link={`/projects/${prevProject.link}`}
            />

            {/* "All Works" Button Navigating to Parent Page with Anchor */}
            <NavItem
                image={navImage.art}
                imageHover={navImage.artHover}
                label="All Works"
                size="sm"
                link={allWorksLink} // Dynamically generate link to the parent page with anchor
            />

            {/* Next Button */}
            <NavItem
                image={navImage.arrowRight}
                imageHover={navImage.arrowRightHover}
                label="Next"
                size="sm"
                link={`/projects/${nextProject.link}`}
            />
        </div>
    );
};
