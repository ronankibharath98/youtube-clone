export interface Video {
    title: string,
    thumbnail: string,
    profile: string,
    author: string,
    views: string,
    timestamp: string
}
export const VideoContent: Video[] = [
    {
        title: "The Naval Podcast - Naval Ravikant with BeerBiceps | TRS",
        thumbnail: '/thumbnails/tn-1.png',
        profile: 'dp/dp-1.png',
        author: "BeerBiceps",
        views: "1.8M views",
        timestamp: "2 days ago"
    },
    {
        title: "What do you get from IIT Degree | Placement | Connections",
        thumbnail: '/thumbnails/tn-2.png',
        profile: '/dp/dp-2.png',
        author: "Harkirat Singh",
        views: "100K views",
        timestamp: "8 hours ago"
    },
    {
        title: "Yantara Lokapu Sundarive Video Song | 4k | 2.0 Telugu Songs",
        thumbnail: '/thumbnails/tn-3.png',
        profile: '/dp/dp-3.png',
        author: "Sony Music",
        views: "104K views",
        timestamp: "2 years ago"
    },
    {
        title: "INDIA'S GOT LATENT Bonus Ep 2 ft Badshah, Siddhant chaturvedi",
        thumbnail: '/thumbnails/tn-4.png',
        profile: '/dp/dp-4.png',
        author: "Samay Raina",
        views: "22K views",
        timestamp: "6 hours ago"
    },
    {
        title: "Tu Har Lamha - Lyrical Video | Khamoshiyan | Ali Fazal | Sapna Pabbi",
        thumbnail: '/thumbnails/tn-5.png',
        profile: '/dp/dp-3.png',
        author: "Sony Music",
        views: "1.8 M",
        timestamp: "2 years ago"
    },
    {
        title: "Unfolding The Mysteries Behind UDAY KIRAN's Death | Documentary",
        thumbnail: '/thumbnails/tn-6.png',
        profile: '/dp/dp-5.png',
        author: "Sadiq files",
        views: "1.8 M",
        timestamp: "2 days ago"
    },
    {
        title: "Ayudha Pooja Audio Song | Devara | NTR | Saif Ali Khan | Koratala Siva",
        thumbnail: "/thumbnails/tn-8.png",
        profile: "/dp/dp-9.png",
        author: "T-Series Telugu",
        views: "3.2 M",
        timestamp: "27 hours ago"
    },
    {
        title: "INDIA'S GOT LATENT | EP 07 ft. @rajviguptacomedy @raghirlive",
        thumbnail: "/thumbnails/tn-9.png",
        profile: "/dp/dp-4.png",
        author: "Samay Raina",
        views: "200k views",
        timestamp: "11 hours ago"
    },
    {
        title: "Mudduletti Video || Super Movie || Nagarjuna, Ayesha Takia, Anushka",
        thumbnail: "/thumbnails/tn-12.png",
        profile: "/dp/dp-8.png",
        author: "Annpurna Studios",
        views: "10M views",
        timestamp: "10 years ago"
    },
    {
        title: "Fitness Tips for Beginners  Core Workouts | |Health Guru",
        thumbnail: "/thumbnails/tn-7.png",
        profile: "/dp/dp-5.png",
        author: "Alexandria Tapia",
        views: "3.0M views",
        timestamp: "10 days ago"
    },
    {
        title: "Chittor Panganur Incident Explained | Telugu | Aye jude",
        thumbnail: "/thumbnails/tn-10.png",
        profile: "/dp/dp-6.png",
        author: "Aye Jude",
        views: "75K views",
        timestamp: "7 hours ago"
    },
    {
        title: "Build a Stunning React Portfolio: Next.js, Tailwind and CSS Animation",
        thumbnail: "/thumbnails/tn-11.png",
        profile: "/dp/dp-7.png",
        author: "Frontend Tribe",
        views: "22k views",
        timestamp: "2 weeks ago"
    }



]

console.log(VideoContent.length);