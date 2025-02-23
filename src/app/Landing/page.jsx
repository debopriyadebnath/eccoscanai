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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Video Section with text overlay */}
      <div className="relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

       
      </div>

      <EcoGallery />
      <AppleCardsCarouselDemo />
      <VelocityScroll className="bg-pink-400">EduScan AI</VelocityScroll>
      <EcoScanMission/>
      <FAQAccordion/>
      <ContactUs/>
      <main className="container mx-auto px-4 py-12">


        <section className="border-2 border-green-500 p-8 mb-16 bg-white">
          <h2 className="text-3xl font-bold text-green-500 mb-4 text-center ">=== How It Works ===</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4 text-green-400 ">
                <li>&gt; Upload your eco-friendly images to our platform</li>
                <li>&gt; Our AI analyzes the environmental impact of the content</li>
                <li>&gt; Receive a detailed report on your contribution</li>
                <li>&gt; Earn Web3 tokens based on the positive impact</li>
                <li>&gt; Join our community of eco-warriors making a difference</li>
              </ol>
            </div>
            <div className="relative h-64 md:h-full border-2 border-green-500">
              <Image
                src="/logoimg.png"
                alt="EcoScan-AI Process"
                fill
                style={{ objectFit: "cover" }}
                className=""
              />
            </div>
          </div>
        </section>

       
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