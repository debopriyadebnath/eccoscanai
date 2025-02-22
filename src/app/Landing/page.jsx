import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, ImageIcon, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4 py-6 border-b-2 border-green-500">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-500 animate-pulse" />
            <span className="text-2xl font-bold text-green-500 font-['Courier_New']">EcoScan-AI</span>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-green-500 hover:text-green-400 underline font-['Courier_New']">
              [About]
            </a>
            <a href="#" className="text-green-500 hover:text-green-400 underline font-['Courier_New']">
              [How It Works]
            </a>
            <a href="#" className="text-green-500 hover:text-green-400 underline font-['Courier_New']">
              [Contact]
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 border-2 border-green-500 p-8">
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-green-500 font-['Courier_New']">
            <span>EcoScan-AI: Sustainable Future</span>
            <br />
            <span>Powered by AI</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of
            Stake, its consensus algorithm enables unlimited speeds.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Get started
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-purple-400/10 to-purple-600/10 hover:from-purple-400/20 hover:to-purple-600/20 backdrop-blur-sm"
            >
              Ecosystems
            </Button>
          </div>
        </div>
          <p className="text-xl text-green-400 mb-8 font-['Courier_New']">
            &gt;&gt; Upload eco-friendly images, get AI analysis, and earn Web3 tokens! &lt;&lt;
          </p>
          <Link href='/dashboard'>
          <button className="bg-green-500 text-black px-6 py-3 text-lg font-bold hover:bg-green-400 transition duration-300 flex items-center mx-auto font-['Courier_New'] border-2 border-green-300">
            [GET STARTED NOW]
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="border-2 border-green-500 p-6 text-center bg-black">
            <ImageIcon className="h-12 w-12 text-green-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-xl font-bold text-green-500 mb-2 font-['Courier_New']">&lt;Upload Images&gt;</h2>
            <p className="text-green-400 font-['Courier_New']">Share your eco-friendly snapshots and initiatives</p>
          </div>
          <div className="border-2 border-green-500 p-6 text-center bg-black">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-xl font-bold text-green-500 mb-2 font-['Courier_New']">&lt;AI Analysis&gt;</h2>
            <p className="text-green-400 font-['Courier_New']">Our AI evaluates the environmental impact</p>
          </div>
          <div className="border-2 border-green-500 p-6 text-center bg-black">
            <Award className="h-12 w-12 text-green-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-xl font-bold text-green-500 mb-2 font-['Courier_New']">&lt;Earn Tokens&gt;</h2>
            <p className="text-green-400 font-['Courier_New']">Get rewarded with Web3 tokens for your contributions</p>
          </div>
        </section>

        <section className="border-2 border-green-500 p-8 mb-16 bg-black">
          <h2 className="text-3xl font-bold text-green-500 mb-4 text-center font-['Courier_New']">=== How It Works ===</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4 text-green-400 font-['Courier_New']">
                <li>&gt; Upload your eco-friendly images to our platform</li>
                <li>&gt; Our AI analyzes the environmental impact of the content</li>
                <li>&gt; Receive a detailed report on your contribution</li>
                <li>&gt; Earn Web3 tokens based on the positive impact</li>
                <li>&gt; Join our community of eco-warriors making a difference</li>
              </ol>
            </div>
            <div className="relative h-64 md:h-full border-2 border-green-500">
              <Image
                src={'/logoimg.png'}
                alt="EcoScan-AI Process"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
          </div>
        </section>

        <section className="text-center border-2 border-green-500 p-8">
          <h2 className="text-3xl font-bold text-green-500 mb-4 font-['Courier_New']">*** Join the Green Revolution ***</h2>
          <p className="text-xl text-green-400 mb-8 font-['Courier_New']">&gt;&gt; Be part of the solution. Start scanning and earning today! &lt;&lt;</p>
          <button className="bg-green-500 text-black px-6 py-3 text-lg font-bold hover:bg-green-400 transition duration-300 font-['Courier_New'] border-2 border-green-300">
            [SIGN UP NOW]
          </button>
        </section>
      </main>

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
    </div>
  )
}

export default LandingPage