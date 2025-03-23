"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function TestimonialSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from architects, homeowners, and contractors who use Homewise Vision
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-0.5">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  "Homewise Vision transformed how I present designs to clients. The AR visualization helps them
                  understand the space better than traditional blueprints ever could."
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="rounded-full overflow-hidden w-10 h-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Architect, Johnson Design</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-0.5">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  "The cost estimation feature saved us thousands of dollars. Being able to see exactly how different
                  materials affect the budget in real-time is invaluable."
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="rounded-full overflow-hidden w-10 h-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Homeowner</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-0.5">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  "As a contractor, the structural integrity testing has been a game-changer. It helps identify
                  potential issues before construction even begins."
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="rounded-full overflow-hidden w-10 h-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Robert Davis</p>
                    <p className="text-xs text-muted-foreground">Contractor, Davis Construction</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

