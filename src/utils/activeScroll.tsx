import { useState, useEffect, useRef } from "react";

export const activeScroll = (): boolean => {
    //Used to detect scroll up or down
    const [isVisible, setIsVisible] = useState(true); 
    const lastScrollY = useRef(0); 

    //Used to detect if scroll is by mouse
    const isMouseScroll = useRef(false);

    useEffect(
        () => {
            let scrollTimeout: NodeJS.Timeout
            
            
            const handleWheel = () => { isMouseScroll.current = true; } // Mark as mouse scroll 

            const handleScroll = () => { //Recognize if scrolling up or down
                const currentScrollY = window.scrollY;

                if (isMouseScroll.current) {

                    if (currentScrollY < lastScrollY.current) { // If scrolling down, show
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollY.current) { // If scrolling up, hide
                        setIsVisible(false);
                    }
                }
                lastScrollY.current = currentScrollY;

                // Reset mouse scroll flag after some time to allow anchor clicks
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout( () => {isMouseScroll.current=false }, 100)
            };
            window.addEventListener("wheel", handleWheel); // Detects mouse scrolling
            window.addEventListener("scroll", handleScroll); // Detects all scrolling
            
            return () => {
                window.removeEventListener("wheel", handleWheel);
                window.removeEventListener("scroll", handleScroll);
            }
        }, []
    );
    return isVisible;
}