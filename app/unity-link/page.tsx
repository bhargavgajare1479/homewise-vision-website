"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, Download, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function UnityLinkPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [platform, setPlatform] = useState<"unknown" | "ios" | "android" | "desktop">("unknown")

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    
    if (/android/i.test(userAgent)) {
      setPlatform("android")
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform("ios")
    } else {
      setPlatform("desktop")
    }
    
    setIsLoading(false)
  }, [])

  const handleDownload = () => {
    // These links would need to be replaced with actual app store links
    if (platform === "android") {
      window.location.href = "https://play.google.com/store/apps/details?id=com.homewise.app"
    } else if (platform === "ios") {
      window.location.href = "https://apps.apple.com/app/homewise-ar/id1234567890"
    } else {
      // For desktop, could provide a direct download link or WebGL experience
      alert("The Homewise App is only compatible with smartphones and tablets.")
    }
  }

  if (isLoading) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Link href="/demo#ar-preview">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to AR Preview
        </Button>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Homewise AR App</CardTitle>
            <CardDescription>
              Experience your designs in augmented reality with our dedicated mobile application
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {platform === "desktop" ? (
              <div className="space-y-6">
                <Alert className="bg-yellow-100 dark:bg-yellow-900/30 border-yellow-400">
                  <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  <AlertTitle>Mobile Only Application</AlertTitle>
                  <AlertDescription>
                    The Homewise AR App is only compatible with smartphones and tablets. Please scan the QR code below or visit this page on your mobile device to download.
                  </AlertDescription>
                </Alert>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    {/* This would be a QR code linking to this page */}
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                      <p className="text-xs text-gray-500 text-center p-2">QR code to download app</p>
                    </div>
                    <p className="text-center text-sm mt-2">Scan to download</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <h3 className="text-lg font-medium">Download Options</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <Button 
                        variant="outline"
                        className="justify-start"
                        onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.homewise.app"}
                      >
                        <img src="/playstore.png" alt="Google Play Store" className="h-6 w-6 mr-2" />
                        Download for Android
                      </Button>
                      <Button 
                        variant="outline"
                        className="justify-start"
                        onClick={() => window.location.href = "https://apps.apple.com/app/homewise-ar/id1234567890"}
                      >
                        <img src="/appstore.png" alt="Apple App Store" className="h-6 w-6 mr-2" />
                        Download for iOS
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-lg bg-primary/10 p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Download Homewise App</h3>
                  <p className="mb-4">We've detected you're using {platform === "ios" ? "an iOS" : "an Android"} device.</p>
                  <Button 
                    size="lg" 
                    className="mt-2 flex items-center"
                    onClick={handleDownload}
                  >
                    <img 
                      src={platform === "ios" ? "/appstore.png" : "/playstore.png"} 
                      alt={platform === "ios" ? "Apple App Store" : "Google Play Store"} 
                      className="h-6 w-6 mr-2" 
                    />
                    Download for {platform === "ios" ? "iOS" : "Android"}
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Augmented Reality</h4>
                    <p className="text-sm text-muted-foreground">View your 3D models in your real-world space using AR technology</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Interactive Visualization</h4>
                    <p className="text-sm text-muted-foreground">Walk through your designs and experience them in real-scale</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Real-time Modifications</h4>
                    <p className="text-sm text-muted-foreground">Make changes to your design directly from your mobile device</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Offline Access</h4>
                    <p className="text-sm text-muted-foreground">Save your projects for offline viewing and modification</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between border-t pt-6">
            <div className="text-sm text-muted-foreground">
              Current version: 1.0.0
              <p className="mt-1">Compatible with iOS 14+ and Android 8.0+</p>
            </div>
            <div className="flex gap-4">
              <Link href="/demo">
                <Button variant="outline">View Demo</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
} 