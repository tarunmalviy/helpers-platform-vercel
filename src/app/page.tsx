import FeaturedCourses from "@/components/featuredContributions";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import MeetInstructors from "@/components/meetTeam";
import InfiniteMovingCardsDemo from "@/components/happyCustomers";
import UpcomingWebinars from "@/components/popularServices";
import WhyChooseUS from "@/components/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUS/>
        <InfiniteMovingCardsDemo/>
        <UpcomingWebinars/>
        <MeetInstructors/>
        <Footer/>
    </main>
  );
}
