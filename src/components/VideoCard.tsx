export const VideoCard = (props: any) => {
    return (
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={props.thumbnail} />
            </div>
            <div className="grid grid-cols-12 pt-4">
                <div className="col-span-1">
                    <img className={"rounded-full h-auto w-16"} src={props.profile} />
                </div>
                <div className="col-span-11 pl-2">
                    <div className="flex font-semibold">
                        {props.title}
                        <div className="col-span-11">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-11 text-gray-700 dark:text-gray-400 text-sm">
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-700 dark:text-gray-400 text-sm">
                        {props.views} | {props.timestamp}
                    </div>

                </div>

            </div>


        </div>
    )
}