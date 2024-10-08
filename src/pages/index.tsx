import localFont from "next/font/local";
import { Appbar } from "@/components/Appbar";
import { VideoGrid } from "@/components/VideoGrid";
import { Leftbar } from "@/components/Leftbar";
import { HorizontalFilter } from "@/components/HorizontalFilter";

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
    <div className="ml-2 mr-2flex flex-col h-screen">
      <Appbar />
      <div className="flex flex-1 h-full">
        <Leftbar />
        <div className="flex flex-col flex-1 min-w-0">
          <HorizontalFilter />
          <div className="overflow-y-auto flex-1">
            <VideoGrid />
          </div>
        </div>    
      </div>
    </div>
  );
}
