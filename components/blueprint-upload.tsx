"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Upload, ArrowRight } from "lucide-react"

export function BlueprintUpload() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-3">Upload Your Blueprint</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Transform your 2D blueprints into interactive 3D models. Upload your blueprint and see the magic happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image 
                src="/B5_1.png" 
                alt="Blueprint Example 1" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h4 className="font-semibold">Original Blueprint</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Standard 2D floor plan</p>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image 
                src="/Blueprint.jpeg" 
                alt="Blueprint Example 2" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h4 className="font-semibold">Processed Blueprint</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ready for 3D conversion</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Your Blueprint
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            See More Examples
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 