import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, ImageIcon, Award } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-green-500">EcoScan-AI</span>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              How It Works
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4">Scan, Analyze, Earn Green</h1>
          <p className="text-xl text-gray-400 mb-8">
            Upload eco-friendly images, get AI analysis, and earn Web3 tokens!
          </p>
          <Link href='/dashboard'>
          <button className="bg-yellow-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <ImageIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-500 mb-2">Upload Images</h2>
            <p className="text-gray-400">Share your eco-friendly snapshots and initiatives</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-500 mb-2">AI Analysis</h2>
            <p className="text-gray-400">Our AI evaluates the environmental impact</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-500 mb-2">Earn Tokens</h2>
            <p className="text-gray-400">Get rewarded with Web3 tokens for your contributions</p>
          </div>
        </section>

        <section className="bg-gray-700 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4 text-gray-400">
                <li>Upload your eco-friendly images to our platform</li>
                <li>Our AI analyzes the environmental impact of the content</li>
                <li>Receive a detailed report on your contribution</li>
                <li>Earn Web3 tokens based on the positive impact</li>
                <li>Join our community of eco-warriors making a difference</li>
              </ol>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="EcoScan-AI Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Join the Green Revolution</h2>
          <p className="text-xl text-gray-400 mb-8">Be part of the solution. Start scanning and earning today!</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Sign Up Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 EcoScan-AI. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gray-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-600">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage