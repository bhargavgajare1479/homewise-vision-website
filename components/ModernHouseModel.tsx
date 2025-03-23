"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"

function House(props: any) {
  const { scene } = useGLTF("/modern-house.glb")
  return <primitive object={scene} {...props} />
}

export function ModernHouseModel() {
  return (
    <Canvas camera={{ position: [7, 4, 8], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <House scale={0.6} position={[0, -1, 0]} rotation={[0, Math.PI / 6, 0]} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls 
        enableZoom={true}
        maxDistance={15}
        minDistance={4}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
}

// Preload the model
useGLTF.preload("/modern-house.glb") 