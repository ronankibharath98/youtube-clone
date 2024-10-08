export const VideoCard = (props : any) => {
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
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} | {props.timestamp} 
                    </div>
                </div>
            </div>
        </div>
    )
}