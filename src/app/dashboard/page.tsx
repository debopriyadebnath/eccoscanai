'use client'
import { useState } from 'react'
import { ArrowRight, Leaf, Recycle, Users, Coins, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

import Link from 'next/link'



function AnimatedGlobe() {
  return (
    <div>
      <Leaf />
    </div>
  )
}

export default function Home() {
  const [loggedIn] = useState(false);
  const [impactData] = useState({
    wasteCollected: 0,
    reportsSubmitted: 0,
    tokensEarned: 0,
    co2Offset: 0
  });

  return (
    <div>
      <section>
        <AnimatedGlobe />
        <h1>
          Zero-to-Hero <span>Waste Management</span>
        </h1>
        <p>
          Join our community in making waste management more efficient and rewarding!
        </p>
        {!loggedIn ? (
          <Button>
            Get Started
            <ArrowRight />
          </Button>
        ) : (
          <Link href="/report">
            <Button>
              Report Waste
              <ArrowRight />
            </Button>
          </Link>
        )}
      </section>
      
      <section>
        <FeatureCard
          icon={Leaf}
          title="Eco-Friendly"
          description="Contribute to a cleaner environment by reporting and collecting waste."
        />
        <FeatureCard
          icon={Coins}
          title="Earn Rewards"
          description="Get tokens for your contributions to waste management efforts."
        />
        <FeatureCard
          icon={Users}
          title="Community-Driven"
          description="Be part of a growing community committed to sustainable practices."
        />
      </section>
      
      <section>
        <h2>Our Impact</h2>
        <div>
          <ImpactCard title="Waste Collected" value={`${impactData.wasteCollected} kg`} icon={Recycle} />
          <ImpactCard title="Reports Submitted" value={impactData.reportsSubmitted.toString()} icon={MapPin} />
          <ImpactCard title="Tokens Earned" value={impactData.tokensEarned.toString()} icon={Coins} />
          <ImpactCard title="CO2 Offset" value={`${impactData.co2Offset} kg`} icon={Leaf} />
        </div>
      </section>
    </div>
  )
}

function ImpactCard({ title, value, icon: Icon }: { title: string; value: string | number; icon: React.ElementType }) {
  const formattedValue = typeof value === 'number' ? value.toLocaleString('en-US', { maximumFractionDigits: 1 }) : value;
  
  return (
    <div>
      <Icon />
      <p>{formattedValue}</p>
      <p>{title}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div>
      <div>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}