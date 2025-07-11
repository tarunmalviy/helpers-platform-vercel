import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">


        <div className="p-4 relative z-10 w-full text-center justify-center align-top flex"> 
          <div className="w-60 h-60">
            <Image 
            src="/helpersLogo/helpers-logo.png" 
            alt="helpersLogo"
            width={240}
            height={240}
            ></Image>
          </div>
          
        </div>



        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Helpers Platform
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Connecting the Unorganized Sector with Opportunities
        </p>
        <div className="mt-4">
          <Link href={"/categories"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Categories
            </Button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
