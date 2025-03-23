'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic'

// Import critical components normally
import { AnimatedFeatures } from "@/components/animated-features"

// Lazy load non-critical components
const DemoPreview = dynamic(() => import("@/components/demo-preview").then(mod => ({ default: mod.DemoPreview })), {
  loading: () => <div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>
})

const TestimonialSection = dynamic(() => import("@/components/testimonial-section").then(mod => ({ default: mod.TestimonialSection })), {
  loading: () => <div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>
})

const PricingSection = dynamic(() => import("@/components/pricing-section").then(mod => ({ default: mod.PricingSection })), {
  loading: () => <div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>
})

const TeamSection = dynamic(() => import("@/components/team-section").then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>
})

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <HeroSection />
          <div className="h-screen"></div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container px-4 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transform your blueprint into a 3D model with our AR technology
              </p>
            </div>
          </div>
          <AnimatedFeatures />
        </section>

        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It In Action</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience how Homewise Vision transforms your blueprints
                </p>
              </div>
            </div>
            
            <Suspense fallback={<div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>}>
              <DemoPreview />
            </Suspense>
          </div>
        </section>

        <Suspense fallback={<div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>}>
          <TestimonialSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 bg-muted/40 rounded-lg animate-pulse"></div>}>
          <TeamSection />
        </Suspense>
      </main>
    </div>
  )
}

