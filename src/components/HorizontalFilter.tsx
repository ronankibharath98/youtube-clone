export const HorizontalFilter = () => {

    const items: string[] = ["All", "Tech", "Music", "System design", "API's", "Live", "Telugu cinema", "Data Structures", "News",
        "Mixes", "T-seris", "Comedy", "Presentation", "Bollywood Music", "Mixes", "News"]
    return (
        <div className="flex flex-row items-center mt-5 ml-3 mr-5 ">
            <div className="flex-none drop-shadow-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

            <div className="flex flex-row whitespace-nowrap overflow-x-auto h-auto space-x-4">
                {items.map((item, index) => (
                    <div key={index} className="px-3 py-1 text-black font-semibold bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg cursor-pointer dark:text-white shadow-md">
                        {item}
                    </div>
                ))}
            </div>
            <div className="flex-none ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

        </div>
    )
}