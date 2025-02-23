import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, ImageIcon, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import EcoGallery from "@/components/GallerProps"
import { AppleCardsCarouselDemo } from "@/components/AppleCards"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import FAQAccordion from "@/components/FAQ"
import EcoScanMission from "@/components/Desc"
import ContactUs from "@/components/Contacts"
import BuzzSection from "@/components/Devs"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Video Section with text overlay */}
      <div className="relative overflow-hidden">
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover brightness-75"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Welcome to EcoScan AI
            </h1>
            <Link href='/dashboard'>
              <Button className="bg-yellow-400 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:scale-105 transition-transform">
                Get Started
              </Button>
            </Link>
            
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

       
      </div>

     
      <AppleCardsCarouselDemo />
      <VelocityScroll className="bg-pink-400">EcoScan AI</VelocityScroll>
      <EcoScanMission/>
      <FAQAccordion/>
      <BuzzSection/>
      <ContactUs/>
      <main className="container mx-auto px-4 py-12">



       
      <footer className="border-t-2 border-green-500 text-green-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center font-['Courier_New']">
          <p>&copy; 2025 EcoScan-AI. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-green-300 underline">[Privacy Policy]</a>
            <a href="#" className="hover:text-green-300 underline">[Terms of Service]</a>
            <a href="#" className="hover:text-green-300 underline">[Contact Us]</a>
          </div>
        </div>
        </footer>
      </main>
      </div>
    );
}

export default LandingPage;