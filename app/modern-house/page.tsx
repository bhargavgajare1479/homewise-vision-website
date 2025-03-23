"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ModernHouseModel } from "@/components/ModernHouseModel"
import { Loader, Html } from "@react-three/drei"

export default function ModernHousePage() {
  const [loadingError, setLoadingError] = useState(false)

  // Handle errors in the 3D canvas
  const handleCanvasError = (error: any) => {
    console.error("Canvas error:", error)
    setLoadingError(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Modern House 3D Model Viewer</h1>
          
          <div className="relative w-full h-[80vh] bg-muted/40 rounded-lg overflow-hidden border shadow-lg">
            {loadingError ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-red-50 p-4 rounded-md text-red-800">
                  <h3 className="font-bold mb-2">Error Loading Model</h3>
                  <p>There was a problem loading the 3D model. Please check the console for details.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
            ) : (
              <Canvas
                shadows={{ type: 'soft', enabled: true }}
                camera={{ position: [5, 5, 5], fov: 45 }}
                className="w-full h-full"
                dpr={[1, 2]} // Optimize for device pixel ratio
                gl={{ 
                  antialias: true,
                  alpha: true,
                  logarithmicDepthBuffer: true,
                  powerPreference: 'high-performance'
                }}
                onCreated={({ gl }) => {
                  gl.setClearColor('#f5f5f5')
                  // Enable better depth testing
                  gl.setPixelRatio(window.devicePixelRatio)
                }}
                onError={handleCanvasError}
              >
                <color attach="background" args={['#f5f5f5']} />
                <fog attach="fog" args={['#f5f5f5', 10, 100]} />
                
                <Suspense fallback={
                  <Html center>
                    <div className="bg-white p-4 rounded-md shadow-md">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                      <p className="text-sm">Loading 3D Model...</p>
                    </div>
                  </Html>
                }>
                  <ModernHouseModel />
                </Suspense>
              </Canvas>
            )}
            <Loader />
            
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-700">
              Auto-scaled and centered using useGLTF and Box3
            </div>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <h2 className="font-medium text-lg mb-2">How to interact:</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Left click + drag: Orbit around the model</li>
              <li>Right click + drag: Pan the camera</li>
              <li>Scroll: Zoom in/out</li>
              <li>Use the on-screen buttons to toggle rotation or reset the view</li>
            </ul>
            
            <h2 className="font-medium text-lg mt-4 mb-2">Technical implementation:</h2>
            <p>This viewer:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Analyzes the model's bounding box using Three.js Box3</li>
              <li>Automatically scales the model to fit the canvas</li>
              <li>Centers the model at origin for proper camera controls</li>
              <li>Sets optimal camera position based on model dimensions</li>
              <li>Adds smooth rotation animation and enhanced lighting</li>
              <li>Implements camera position animation for view resets</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
} 