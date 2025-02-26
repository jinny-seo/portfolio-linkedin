import { useState, useEffect } from "react";

export const activeScroll = (): boolean => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(
        () => {
            const handleScroll = () => { setIsVisible(window.scrollY <= 50); };
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );
    return isVisible;
}