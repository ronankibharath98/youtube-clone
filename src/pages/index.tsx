import Image from "next/image";
import localFont from "next/font/local";
import { VideoCard } from '../components/VideoCard'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <VideoCard 
      title = {"The Naval Podcast - Naval Ravikant with BeerBiceps | TRS"} 
      thumbnail = {'/thumbnail.png'}
      profile = {'/dp.png'}
      author = {"BeerBiceps"}
      views = {"1.8 M"}
      timestam = {"2 days ago"}/>

    </div>
  );
}
