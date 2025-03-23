"use client"

import { Building, Calculator, Home, Layers } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"

export function AnimatedFeatures() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
      <FeatureCard
        icon={<Layers className="h-10 w-10 text-primary" />}
        title="Blueprint Visualization"
        description="Upload your blueprint and see it transform into a detailed 3D model in real-time."
        index={0}
      />
      <FeatureCard
        icon={<Calculator className="h-10 w-10 text-primary" />}
        title="Cost Estimation"
        description="Get accurate cost estimates for your project based on your location and selected materials."
        index={1}
      />
      <FeatureCard
        icon={<Building className="h-10 w-10 text-primary" />}
        title="Interior Design"
        description="Customize your interior with furniture and fixtures from our extensive catalog."
        index={2}
      />
      <FeatureCard
        icon={<Home className="h-10 w-10 text-primary" />}
        title="Structural Integrity"
        description="Test the structural integrity of your design with our advanced simulation tools."
        index={3}
      />
    </div>
  )
}

