import { useState, useEffect, useRef } from "react";

export const activeScroll = (): boolean => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(
        () => {
            const handleScroll = () => { 
                const currentScrollY = window.scrollY;

                if (currentScrollY < lastScrollY.current) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY.current) {
                    setIsVisible(false);
                }
                lastScrollY.current = currentScrollY;

            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]
    );
    return isVisible;
}