export const VideoCard = (props : any) => {
    return (
        <div>
            <img src={props.thumbnail} />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src={props.profile} />
                </div>
                <div className="col-span-11 pl-2">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.views} | {props.timestam} 
                    </div>
                </div>
            </div>
        </div>
    )
}