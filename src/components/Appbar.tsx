import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

export const Appbar = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(darkModeMediaQuery.matches);

        // Listener to detect changes in dark mode preference
        const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

        // Add event listener for when preference changes
        darkModeMediaQuery.addEventListener("change", handleChange);

        // Clean up the listener on component unmount
        return () => darkModeMediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <div className="mt-2 mb-2 flex justify-between">
            <div className="inline-flex items-center pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/* Adjust the margin here */}
                <img className="w-24 h-8 ml-4" src={isDarkMode ? '/Logo_dark.png' : '/Logo_white.png'} />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="inline-flex items-center pr-5">
                Sign in
            </div>
        </div>
    );
}
