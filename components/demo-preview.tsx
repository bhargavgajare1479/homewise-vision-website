"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function DemoPreview() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Blueprint Upload",
      description: "Upload your blueprint to start the visualization process",
      isCustomContent: true
    },
    {
      title: "3D Model Generation",
      image: "/3D-model-1.jpeg",
      description: "Watch as your blueprint transforms into a detailed 3D model",
    },
    {
      title: "Interior Customization",
      image: "/Interior.jpeg",
      description: "Customize your interior with furniture and fixtures",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden">
              <AnimatePresence mode="wait">
                {currentSlide === 0 && slides[currentSlide].isCustomContent ? (
                  <motion.div
                    key="custom-slide-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-muted/20"
                  >
                    <div className="absolute inset-0 flex flex-col">
                      <div className="flex items-center justify-center h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pt-10 w-full max-w-[1400px] mx-auto">
                          <div className="rounded-lg overflow-hidden shadow-lg relative h-[250px] md:h-[300px] lg:h-[380px]">
                            <Image 
                              src="/B5_1.png" 
                              alt="Original Blueprint" 
                              fill
                              className="object-contain bg-white/90"
                              priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                              <p className="text-white text-base md:text-lg font-medium text-center">Original Blueprint</p>
                            </div>
                          </div>
                          <div className="rounded-lg overflow-hidden shadow-lg relative h-[250px] md:h-[300px] lg:h-[380px]">
                            <Image 
                              src="/Blueprint.jpeg" 
                              alt="Blueprint Information" 
                              fill
                              className="object-contain bg-white/90"
                              priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                              <p className="text-white text-base md:text-lg font-medium text-center">Blueprint Information</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16">
                        <div className="p-6 text-white">
                          <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
                            <p>{slides[currentSlide].description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`standard-slide-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {currentSlide === 2 ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <div className="rounded-lg overflow-hidden shadow-lg relative h-[280px] md:h-[340px] lg:h-[420px] w-[80%] max-w-[800px] mx-auto">
                            <Image
                              src={slides[currentSlide].image || "/placeholder.svg"}
                              alt={slides[currentSlide].title}
                              fill
                              className="object-cover bg-white/90 p-2"
                              priority
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16">
                            <div className="p-6 text-white">
                              <div className="text-center">
                                <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
                                <p>{slides[currentSlide].description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : currentSlide === 1 ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <div className="rounded-lg overflow-hidden shadow-lg relative h-[280px] md:h-[340px] lg:h-[420px] w-[80%] max-w-[800px] mx-auto">
                            <Image
                              src={slides[currentSlide].image || "/placeholder.svg"}
                              alt={slides[currentSlide].title}
                              fill
                              className="object-cover bg-white/90 p-2"
                              priority
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16">
                            <div className="p-6 text-white">
                              <div className="text-center">
                                <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
                                <p>{slides[currentSlide].description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={slides[currentSlide].image || "/placeholder.svg"}
                          alt={slides[currentSlide].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
                          <p>{slides[currentSlide].description}</p>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full z-10 shadow-md w-10 h-10"
              onClick={prevSlide}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            
            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full z-10 shadow-md w-10 h-10"
              onClick={nextSlide}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
            
            {/* Fullscreen button */}
            <div className="absolute top-4 right-4 z-10">
              <Link href="/demo">
                <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background/90 rounded-full shadow-md">
                  <Maximize2 className="h-4 w-4" />
                  <span className="sr-only">View full demo</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center p-4 gap-2">
            {slides.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-2 h-2 rounded-full p-0 ${currentSlide === index ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

