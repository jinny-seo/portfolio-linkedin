"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname(); // Detects route changes

    useEffect(() => {
        if (window.location.hash) return; // ✅ Ignore anchor link clicks

        setIsLoading(true); // Show loading indicator

        const timer = setTimeout(() => {
            setIsLoading(false); // Hide loader after 1 second
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);

    // ✅ After loading, scroll to the anchor (if exists)
    useEffect(() => {
        if (!isLoading && window.location.hash) {
            const anchor = document.getElementById(window.location.hash.substring(1));
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [isLoading]); // Runs when loading completes

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
    );
}
