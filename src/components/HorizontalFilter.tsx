export const HorizontalFilter = () => {

    const items: string[] = ["All", "Tech", "Music", "System design", "API's", "Live", "Telugu cinema", "Data Structures", "News",
        "Mixes", "T-seris", "Comedy", "Presentation", "Bollywood Music", "Mixes", "News"]
    return (
        <div className="p-2 flex flex-row whitespace-nowrap overflow-x-auto h-16 space-x-4">
            {items.map((item, index) => (
                <div key={index} className="px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-xl cursor-pointer text-white shadow-md">
                    {item}
                </div>
            ))}
        </div>
    )
}