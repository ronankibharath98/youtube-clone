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
        <div className="mt-2 mb-2 mr-5 flex justify-between">
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
            <div className="inline-flex items-center justify-between space-x-6">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div >
                    <img className="rounded-full w-9 h-auto" src = "/dp/dp-4.png"/>
                </div>
            </div>
        </div>
    );
}
