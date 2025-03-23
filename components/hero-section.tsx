"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ModernHouseModel } from "@/components/ModernHouseModel"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                variants={item}
              >
                Transform Blueprints into 3D Reality
              </motion.h1>
              <motion.p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400" variants={item}>
                Homewise Vision uses AR technology to bring your blueprints to life, helping you visualize and plan your
                dream home with precision.
              </motion.p>
            </div>
            <motion.div className="flex flex-col gap-2 min-[400px]:flex-row" variants={item}>
              <Link href="/demo">
                <Button size="lg" className="group">
                  Try Demo
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
              <ModernHouseModel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

