import { useState, useEffect } from "react";

export const activeNavItem = ( sectionIDs: string[] ) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(
        () => {
            const handleScroll = () => {
                let currentActive = null;
                for (const id of sectionIDs) {
                    const section = document.getElementById(id);
                    if (section) {
                        const rect = section.getBoundingClientRect(); 
                        // Check if section is at least partially visible
                        if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
                            currentActive = id;
                            break;
                        }
                    }
                }
                setActiveSection(currentActive);
            };
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Run on mount to detect initial section

            return () => window.removeEventListener("scroll", handleScroll);
        }, [sectionIDs]
    );
    return activeSection;
}