import { VideoCard } from "./VideoCard"
import { VideoContent } from "@/styles/Video"

export const VideoGrid = () => {
    return (
        <div>
            <div className="ml-4 mr-4 mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {VideoContent.map((video) => (
                    <div key={video.title}>
                        <VideoCard
                            title={video.title}
                            thumbnail={video.thumbnail}
                            profile={video.profile}
                            author={video.author}
                            views={video.views}
                            timestamp={video.timestamp} />
                    </div>
                ))}
            </div>
        </div>
    )
}