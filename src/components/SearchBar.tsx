import { useEffect, useState } from "react"

export const SearchBar = () => {
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

    }, [])
    return (
        <div className="w-2/4 mt-1">
            <form>
                {isDarkMode ?
                <div className="flex flex-row items-center">
                    <div className="max-sm:hidden sm:w-48 lg:w-96 xl:w-[500px] flex border border-gray-800 rounded-3xl p-1 pl-3 text-sm pr-2">
                        <input id="default-search" 
                                className="w-full bg-slate-950 text-white border-none outline-none" 
                                placeholder="Search" required />
                        <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg className="w-4 h-4" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="size-6">
                            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                        </svg>
                    </div>
                    :
                    <div className="max-sm:hidden sm:w-48 lg:w-96 flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                        <input id="default-search" className="w-full bg-white text-slate-800 border-none outline-none" placeholder="Search" required />
                        <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                }

            </form>
        </div>
    )
}