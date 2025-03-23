"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Grid, Html } from "@react-three/drei"
import { Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  Maximize,
  Minimize,
  TableProperties,
  Sofa,
} from "lucide-react"
import Link from "next/link"

// Simple house model component
function HouseModel({ selectedDoor, selectedWall, selectedRoom, selectedFurniture, onSelectDoor, onSelectWall, onSelectRoom }) {
  // Floor
  const floorWidth = 10
  const floorDepth = 8

  // Walls
  const wallHeight = 2.5
  const wallThickness = 0.1

  // Room dimensions
  const livingRoomWidth = 6
  const livingRoomDepth = 4
  const kitchenWidth = 4
  const kitchenDepth = 4
  const bedroomWidth = 4
  const bedroomDepth = 4

  return (
    <group position={[0, 0, 0]}>
      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[floorWidth, floorDepth]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Outer Walls */}
      {/* Front Wall */}
      <mesh 
        position={[0, wallHeight / 2, floorDepth / 2]} 
        rotation={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("exterior_front")
        }}
      >
        <boxGeometry args={[floorWidth, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "exterior_front" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "exterior_front" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "exterior_front" ? 0.3 : 0}
        />
        {selectedWall === "exterior_front" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Front Wall
            </div>
          </Html>
        )}
      </mesh>

      {/* Back Wall */}
      <mesh 
        position={[0, wallHeight / 2, -floorDepth / 2]} 
        rotation={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("exterior_back")
        }}
      >
        <boxGeometry args={[floorWidth, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "exterior_back" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "exterior_back" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "exterior_back" ? 0.3 : 0}
        />
        {selectedWall === "exterior_back" && (
          <Html position={[0, 0, -0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Back Wall
            </div>
          </Html>
        )}
      </mesh>

      {/* Left Wall */}
      <mesh 
        position={[-floorWidth / 2, wallHeight / 2, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("exterior_left")
        }}
      >
        <boxGeometry args={[floorDepth, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "exterior_left" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "exterior_left" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "exterior_left" ? 0.3 : 0}
        />
        {selectedWall === "exterior_left" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Left Wall
            </div>
          </Html>
        )}
      </mesh>

      {/* Right Wall */}
      <mesh 
        position={[floorWidth / 2, wallHeight / 2, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("exterior_right")
        }}
      >
        <boxGeometry args={[floorDepth, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "exterior_right" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "exterior_right" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "exterior_right" ? 0.3 : 0}
        />
        {selectedWall === "exterior_right" && (
          <Html position={[0, 0, -0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Right Wall
            </div>
          </Html>
        )}
      </mesh>

      {/* Interior Walls */}
      {/* Living Room / Kitchen Divider */}
      <mesh 
        position={[1, wallHeight / 2, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("interior_kitchen")
        }}
      >
        <boxGeometry args={[floorDepth, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "interior_kitchen" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "interior_kitchen" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "interior_kitchen" ? 0.3 : 0}
        />
        {selectedWall === "interior_kitchen" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Kitchen Divider
            </div>
          </Html>
        )}
      </mesh>

      {/* Bedroom Wall */}
      <mesh 
        position={[-1, wallHeight / 2, 0]} 
        rotation={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectWall("interior_bedroom")
        }}
      >
        <boxGeometry args={[4, wallHeight, wallThickness]} />
        <meshStandardMaterial 
          color={selectedWall === "interior_bedroom" ? "#0ea5e9" : "#e0e0e0"} 
          emissive={selectedWall === "interior_bedroom" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedWall === "interior_bedroom" ? 0.3 : 0}
        />
        {selectedWall === "interior_bedroom" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Bedroom Wall
            </div>
          </Html>
        )}
      </mesh>

      {/* Doors */}
      {/* Bedroom Door */}
      <mesh 
        position={[-1, wallHeight / 4, 0]} 
        rotation={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectDoor("bedroom")
        }}
      >
        <boxGeometry args={[1, wallHeight / 2, wallThickness * 1.5]} />
        <meshStandardMaterial 
          color={selectedDoor === "bedroom" ? "#0ea5e9" : "#d1d5db"} 
          emissive={selectedDoor === "bedroom" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedDoor === "bedroom" ? 0.5 : 0}
        />
        {selectedDoor === "bedroom" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Bedroom Door
            </div>
          </Html>
        )}
      </mesh>

      {/* Kitchen Door */}
      <mesh 
        position={[1, wallHeight / 4, -1]} 
        rotation={[0, Math.PI / 2, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectDoor("kitchen")
        }}
      >
        <boxGeometry args={[1, wallHeight / 2, wallThickness * 1.5]} />
        <meshStandardMaterial 
          color={selectedDoor === "kitchen" ? "#0ea5e9" : "#d1d5db"} 
          emissive={selectedDoor === "kitchen" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedDoor === "kitchen" ? 0.5 : 0}
        />
        {selectedDoor === "kitchen" && (
          <Html position={[0, 0, 0.1]}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Kitchen Door
            </div>
          </Html>
        )}
      </mesh>

      {/* Room Markers */}
      {/* Bedroom */}
      <mesh 
        position={[-3, 0.01, -2]} 
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectRoom("bedroom")
        }}
      >
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial 
          color={selectedRoom === "bedroom" ? "#0ea5e9" : "#f0f0f0"} 
          opacity={0.2} 
          transparent={true}
          emissive={selectedRoom === "bedroom" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedRoom === "bedroom" ? 0.2 : 0}
        />
      </mesh>

      {/* Living Room */}
      <mesh 
        position={[-3, 0.01, 2]} 
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectRoom("living")
        }}
      >
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial 
          color={selectedRoom === "living" ? "#0ea5e9" : "#f0f0f0"} 
          opacity={0.2} 
          transparent={true}
          emissive={selectedRoom === "living" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedRoom === "living" ? 0.2 : 0}
        />
      </mesh>

      {/* Kitchen */}
      <mesh 
        position={[3, 0.01, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectRoom("kitchen")
        }}
      >
        <planeGeometry args={[4, 6]} />
        <meshStandardMaterial 
          color={selectedRoom === "kitchen" ? "#0ea5e9" : "#f0f0f0"} 
          opacity={0.2} 
          transparent={true}
          emissive={selectedRoom === "kitchen" ? "#0ea5e9" : "#000000"}
          emissiveIntensity={selectedRoom === "kitchen" ? 0.2 : 0}
        />
      </mesh>

      {/* Room Labels */}
      <Html position={[-3, 0.1, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <div className={`${selectedRoom === "bedroom" ? "bg-primary text-white" : "bg-background/80"} p-2 rounded text-xs font-medium`}>
          Bedroom
        </div>
      </Html>

      <Html position={[-3, 0.1, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <div className={`${selectedRoom === "living" ? "bg-primary text-white" : "bg-background/80"} p-2 rounded text-xs font-medium`}>
          Living Room
        </div>
      </Html>

      <Html position={[3, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <div className={`${selectedRoom === "kitchen" ? "bg-primary text-white" : "bg-background/80"} p-2 rounded text-xs font-medium`}>
          Kitchen
        </div>
      </Html>

      {/* Simple furniture */}
      {/* Sofa */}
      <mesh position={[-3, 0.3, 3]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.5, 0.6, 3]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>

      {/* Coffee Table */}
      <mesh position={[-3, 0.2, 1.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="#a1a1aa" />
      </mesh>

      {/* Kitchen Counter */}
      <mesh position={[3, 0.4, -2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 0.8, 1]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      {/* Kitchen Island */}
      <mesh position={[3, 0.4, 1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.8, 1.5]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      {/* Bed */}
      <mesh position={[-3, 0.3, -2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.6, 3]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
    </group>
  )
}

// Furniture item that can be placed
function FurnitureItem({ position, rotation, type, color, id, onSelect, isSelected }) {
  let dimensions

  switch (type) {
    case "sofa":
      dimensions = [2, 0.8, 1]
      break
    case "chair":
      dimensions = [0.8, 0.8, 0.8]
      break
    case "table":
      dimensions = [1.5, 0.5, 1]
      break
    case "bed":
      dimensions = [2, 0.5, 3]
      break
    default:
      dimensions = [1, 1, 1]
  }

  let furnitureLabel = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <mesh
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(id)
      }}
    >
      <boxGeometry args={dimensions} />
      <meshStandardMaterial 
        color={isSelected ? "#0ea5e9" : color} 
        emissive={isSelected ? "#0ea5e9" : "#000000"}
        emissiveIntensity={isSelected ? 0.5 : 0}
      />
      {isSelected && (
        <Html position={[0, dimensions[1] / 2 + 0.2, 0]}>
          <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {furnitureLabel}
          </div>
        </Html>
      )}
    </mesh>
  )
}

export function BlueprintVisualizer() {
  const [view, setView] = useState("3d")
  const [selectedFurniture, setSelectedFurniture] = useState(null)
  const [selectedDoor, setSelectedDoor] = useState(null)
  const [selectedWall, setSelectedWall] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [furnitureItems, setFurnitureItems] = useState([
    { id: 1, type: "sofa", position: [-3, 0.4, 3], rotation: [0, Math.PI / 2, 0], color: "#6b7280" },
    { id: 2, type: "table", position: [-3, 0.25, 1.5], rotation: [0, 0, 0], color: "#a1a1aa" },
    { id: 3, type: "bed", position: [-3, 0.25, -2], rotation: [0, 0, 0], color: "#9ca3af" },
  ])

  const [cameraPosition, setCameraPosition] = useState([10, 10, 10])
  const [zoom, setZoom] = useState(1)
  
  // Reset all selections when view changes
  useEffect(() => {
    setSelectedDoor(null);
    setSelectedWall(null);
    setSelectedRoom(null);
    setSelectedFurniture(null);
  }, [view]);

  const handleSelectDoor = (doorId) => {
    setSelectedDoor(doorId === selectedDoor ? null : doorId)
    setSelectedWall(null)
    setSelectedRoom(null)
    setSelectedFurniture(null)
  }

  const handleSelectWall = (wallId) => {
    setSelectedWall(wallId === selectedWall ? null : wallId)
    setSelectedDoor(null)
    setSelectedRoom(null)
    setSelectedFurniture(null)
  }

  const handleSelectRoom = (roomId) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId)
    setSelectedDoor(null)
    setSelectedWall(null)
    setSelectedFurniture(null)
  }

  const handleSelectFurniture = (id) => {
    setSelectedFurniture(id === selectedFurniture ? null : id)
    setSelectedDoor(null)
    setSelectedWall(null)
    setSelectedRoom(null)
  }

  const doorData = {
    bedroom: {
      id: "bedroom",
      name: "Bedroom Door",
      width: "32 inches",
      height: "80 inches",
      material: "Solid Core Wood",
      type: "Hinged",
      swing: "Left-hand",
    },
    kitchen: {
      id: "kitchen",
      name: "Kitchen Door",
      width: "36 inches",
      height: "80 inches",
      material: "Hollow Core",
      type: "Pocket Door",
      swing: "N/A",
    }
  }

  const wallData = {
    exterior_front: {
      id: "exterior_front",
      name: "Front Wall",
      thickness: "8 inches",
      height: "8 feet",
      material: "Brick Veneer",
      insulation: "R-19 Fiberglass",
      features: "2 Windows",
    },
    exterior_back: {
      id: "exterior_back",
      name: "Back Wall",
      thickness: "8 inches",
      height: "8 feet",
      material: "Brick Veneer",
      insulation: "R-19 Fiberglass",
      features: "Sliding Door",
    },
    exterior_left: {
      id: "exterior_left",
      name: "Left Wall",
      thickness: "8 inches",
      height: "8 feet",
      material: "Brick Veneer",
      insulation: "R-19 Fiberglass",
      features: "1 Window",
    },
    exterior_right: {
      id: "exterior_right",
      name: "Right Wall",
      thickness: "8 inches",
      height: "8 feet",
      material: "Brick Veneer",
      insulation: "R-19 Fiberglass",
      features: "None",
    },
    interior_bedroom: {
      id: "interior_bedroom",
      name: "Bedroom Wall",
      thickness: "4.5 inches",
      height: "8 feet",
      material: "Drywall",
      insulation: "Sound Insulation",
      features: "Electrical Outlets",
    },
    interior_kitchen: {
      id: "interior_kitchen",
      name: "Kitchen Divider",
      thickness: "4.5 inches",
      height: "8 feet",
      material: "Drywall",
      insulation: "None",
      features: "Electrical, Plumbing",
    },
  }

  const roomData = {
    bedroom: {
      id: "bedroom",
      name: "Bedroom",
      area: "120 sq ft",
      flooring: "Carpet",
      ceiling: "Flat, 8 feet",
      features: "Walk-in Closet",
      lighting: "Recessed, Ceiling Fan",
    },
    living: {
      id: "living",
      name: "Living Room",
      area: "200 sq ft",
      flooring: "Hardwood",
      ceiling: "Vaulted, 10 feet",
      features: "Fireplace",
      lighting: "Recessed, Sconces",
    },
    kitchen: {
      id: "kitchen",
      name: "Kitchen",
      area: "150 sq ft",
      flooring: "Tile",
      ceiling: "Flat, 8 feet",
      features: "Island, Pantry",
      lighting: "Recessed, Pendant",
    },
  }

  const furnitureData = {
    1: {
      id: 1,
      name: "Sofa",
      dimensions: "84\" × 35\" × 33\"",
      material: "Fabric Upholstery",
      color: "Gray",
      style: "Modern",
    },
    2: {
      id: 2,
      name: "Coffee Table",
      dimensions: "48\" × 24\" × 18\"",
      material: "Wood and Glass",
      color: "Walnut",
      style: "Mid-Century Modern",
    },
    3: {
      id: 3,
      name: "Bed",
      dimensions: "Queen, 60\" × 80\"",
      material: "Wood Frame",
      color: "Dark Gray",
      style: "Platform",
    },
  }

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 2))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 0.5))
  }

  // Use useEffect to ensure client-side only rendering for Canvas
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.div className="grid gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Tabs defaultValue="3d" onValueChange={setView}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="3d">3D View</TabsTrigger>
            <TabsTrigger value="blueprint">Blueprint</TabsTrigger>
            <TabsTrigger value="ar">AR Preview</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" onClick={handleZoomOut}>
                <Minimize className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" onClick={handleZoomIn}>
                <Maximize className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "3d" && (
            <motion.div
              key="3d-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="3d" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full h-[500px] bg-muted/40 rounded-lg overflow-hidden">
                      {isMounted && (
                        <Canvas camera={{ position: cameraPosition, zoom: zoom }}>
                          <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={0.5} />
                            <HouseModel selectedDoor={selectedDoor} selectedWall={selectedWall} selectedRoom={selectedRoom} selectedFurniture={selectedFurniture} onSelectDoor={handleSelectDoor} onSelectWall={handleSelectWall} onSelectRoom={handleSelectRoom} />

                            {furnitureItems.map((item) => (
                              <FurnitureItem
                                key={item.id}
                                position={item.position}
                                rotation={item.rotation}
                                type={item.type}
                                color={item.color}
                                id={item.id}
                                onSelect={handleSelectFurniture}
                                isSelected={item.id === selectedFurniture}
                              />
                            ))}

                            <Grid infiniteGrid fadeDistance={30} fadeStrength={5} />
                            <Environment preset="apartment" />
                            <OrbitControls
                              enableZoom={true}
                              enablePan={true}
                              enableRotate={true}
                              minDistance={2}
                              maxDistance={20}
                            />
                          </Suspense>
                        </Canvas>
                      )}

                      <motion.div
                        className="absolute bottom-4 left-4 right-4 bg-background/90 p-3 rounded-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {selectedDoor && (
                            <motion.div 
                              initial={{ scale: 0.9, opacity: 0 }} 
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-full"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-sm font-semibold">{doorData[selectedDoor].name}</h3>
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1 text-xs">
                                    <div>
                                      <span className="font-medium">Width:</span> {doorData[selectedDoor].width}
                                    </div>
                                    <div>
                                      <span className="font-medium">Height:</span> {doorData[selectedDoor].height}
                                    </div>
                                    <div>
                                      <span className="font-medium">Material:</span> {doorData[selectedDoor].material}
                                    </div>
                                    <div>
                                      <span className="font-medium">Type:</span> {doorData[selectedDoor].type}
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setSelectedDoor(null)}
                                  className="ml-4"
                                >
                                  Close
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {selectedWall && (
                            <motion.div 
                              initial={{ scale: 0.9, opacity: 0 }} 
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-full"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-sm font-semibold">{wallData[selectedWall].name}</h3>
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1 text-xs">
                                    <div>
                                      <span className="font-medium">Thickness:</span> {wallData[selectedWall].thickness}
                                    </div>
                                    <div>
                                      <span className="font-medium">Height:</span> {wallData[selectedWall].height}
                                    </div>
                                    <div>
                                      <span className="font-medium">Material:</span> {wallData[selectedWall].material}
                                    </div>
                                    <div>
                                      <span className="font-medium">Insulation:</span> {wallData[selectedWall].insulation}
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setSelectedWall(null)}
                                  className="ml-4"
                                >
                                  Close
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {selectedRoom && (
                            <motion.div 
                              initial={{ scale: 0.9, opacity: 0 }} 
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-full"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-sm font-semibold">{roomData[selectedRoom].name}</h3>
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1 text-xs">
                                    <div>
                                      <span className="font-medium">Area:</span> {roomData[selectedRoom].area}
                                    </div>
                                    <div>
                                      <span className="font-medium">Flooring:</span> {roomData[selectedRoom].flooring}
                                    </div>
                                    <div>
                                      <span className="font-medium">Ceiling:</span> {roomData[selectedRoom].ceiling}
                                    </div>
                                    <div>
                                      <span className="font-medium">Lighting:</span> {roomData[selectedRoom].lighting}
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setSelectedRoom(null)}
                                  className="ml-4"
                                >
                                  Close
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {selectedFurniture && furnitureData[selectedFurniture] && (
                            <motion.div 
                              initial={{ scale: 0.9, opacity: 0 }} 
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-full"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-sm font-semibold">{furnitureData[selectedFurniture].name}</h3>
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1 text-xs">
                                    <div>
                                      <span className="font-medium">Dimensions:</span> {furnitureData[selectedFurniture].dimensions}
                                    </div>
                                    <div>
                                      <span className="font-medium">Material:</span> {furnitureData[selectedFurniture].material}
                                    </div>
                                    <div>
                                      <span className="font-medium">Color:</span> {furnitureData[selectedFurniture].color}
                                    </div>
                                    <div>
                                      <span className="font-medium">Style:</span> {furnitureData[selectedFurniture].style}
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setSelectedFurniture(null)}
                                  className="ml-4"
                                >
                                  Close
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          )}

          {view === "blueprint" && (
            <motion.div
              key="blueprint-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="blueprint" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full h-[500px] bg-muted/10 rounded-lg overflow-hidden flex items-center justify-center">
                      <motion.div
                        className="p-8 border-2 border-dashed border-muted-foreground/50 rounded-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg width="400" height="320" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
                          {/* Floor plan outline */}
                          <rect x="10" y="10" width="380" height="300" fill="none" stroke="black" strokeWidth="2" />

                          {/* Interior walls */}
                          {/* Vertical divider wall */}
                          <g className="wall-element">
                            <line 
                              x1="200" y1="10" x2="200" y2="310" 
                              stroke={selectedWall === "interior_kitchen" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "interior_kitchen" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("interior_kitchen")}
                            />
                            <title>Kitchen Divider Wall</title>
                          </g>
                          
                          {/* Horizontal bedroom wall */}
                          <g className="wall-element">
                            <line 
                              x1="10" y1="160" x2="200" y2="160" 
                              stroke={selectedWall === "interior_bedroom" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "interior_bedroom" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("interior_bedroom")}
                            />
                            <title>Bedroom Wall</title>
                          </g>

                          {/* Exterior walls */}
                          <g className="wall-element">
                            <line 
                              x1="10" y1="10" x2="390" y2="10" 
                              stroke={selectedWall === "exterior_back" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "exterior_back" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("exterior_back")}
                            />
                            <title>Back Wall</title>
                          </g>
                          
                          <g className="wall-element">
                            <line 
                              x1="10" y1="310" x2="390" y2="310" 
                              stroke={selectedWall === "exterior_front" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "exterior_front" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("exterior_front")}
                            />
                            <title>Front Wall</title>
                          </g>
                          
                          <g className="wall-element">
                            <line 
                              x1="10" y1="10" x2="10" y2="310" 
                              stroke={selectedWall === "exterior_left" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "exterior_left" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("exterior_left")}
                            />
                            <title>Left Wall</title>
                          </g>
                          
                          <g className="wall-element">
                            <line 
                              x1="390" y1="10" x2="390" y2="310" 
                              stroke={selectedWall === "exterior_right" ? "#0ea5e9" : "black"} 
                              strokeWidth={selectedWall === "exterior_right" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectWall("exterior_right")}
                            />
                            <title>Right Wall</title>
                          </g>

                          {/* Doors */}
                          <g className="door-element">
                            <line 
                              x1="120" y1="160" x2="140" y2="160" 
                              stroke={selectedDoor === "bedroom" ? "#0ea5e9" : "white"} 
                              strokeWidth={selectedDoor === "bedroom" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectDoor("bedroom")}
                            />
                            <title>Bedroom Door</title>
                          </g>
                          
                          <g className="door-element">
                            <line 
                              x1="200" y1="100" x2="200" y2="120" 
                              stroke={selectedDoor === "kitchen" ? "#0ea5e9" : "white"} 
                              strokeWidth={selectedDoor === "kitchen" ? "3" : "2"}
                              className="hover:stroke-primary transition-colors duration-300 cursor-pointer"
                              onClick={() => handleSelectDoor("kitchen")}
                            />
                            <title>Kitchen Door</title>
                          </g>

                          {/* Room areas */}
                          <g className="room-element">
                            <rect 
                              x="30" y="30" 
                              width="140" height="100" 
                              fill={selectedRoom === "bedroom" ? "rgba(14, 165, 233, 0.2)" : "none"} 
                              stroke="none"
                              className="cursor-pointer hover:fill-primary/10 transition-colors duration-300"
                              onClick={() => handleSelectRoom("bedroom")}
                            />
                            <title>Bedroom</title>
                          </g>
                          
                          <g className="room-element">
                            <rect 
                              x="30" y="190" 
                              width="140" height="100" 
                              fill={selectedRoom === "living" ? "rgba(14, 165, 233, 0.2)" : "none"} 
                              stroke="none"
                              className="cursor-pointer hover:fill-primary/10 transition-colors duration-300"
                              onClick={() => handleSelectRoom("living")}
                            />
                            <title>Living Room</title>
                          </g>
                          
                          <g className="room-element">
                            <rect 
                              x="230" y="30" 
                              width="140" height="260" 
                              fill={selectedRoom === "kitchen" ? "rgba(14, 165, 233, 0.2)" : "none"} 
                              stroke="none"
                              className="cursor-pointer hover:fill-primary/10 transition-colors duration-300"
                              onClick={() => handleSelectRoom("kitchen")}
                            />
                            <title>Kitchen</title>
                          </g>

                          {/* Room labels */}
                          <text 
                            x="100" y="80" 
                            fontFamily="sans-serif" 
                            fontSize="12" 
                            textAnchor="middle"
                            className={`${selectedRoom === "bedroom" ? "fill-primary font-bold" : ""}`}
                          >
                            Bedroom
                          </text>
                          <text 
                            x="100" y="240" 
                            fontFamily="sans-serif" 
                            fontSize="12" 
                            textAnchor="middle"
                            className={`${selectedRoom === "living" ? "fill-primary font-bold" : ""}`}
                          >
                            Living Room
                          </text>
                          <text 
                            x="300" y="160" 
                            fontFamily="sans-serif" 
                            fontSize="12" 
                            textAnchor="middle"
                            className={`${selectedRoom === "kitchen" ? "fill-primary font-bold" : ""}`}
                          >
                            Kitchen
                          </text>

                          {/* Furniture */}
                          <rect 
                            x="40" y="40" 
                            width="120" height="60" 
                            fill={selectedFurniture === 3 ? "#0ea5e9" : "#9ca3af"} 
                            stroke="black" 
                            strokeWidth="1"
                            className="cursor-pointer hover:fill-primary/80 transition-colors duration-300"
                            onClick={() => handleSelectFurniture(3)}
                          />
                          
                          <rect 
                            x="40" y="220" 
                            width="60" height="60" 
                            fill={selectedFurniture === 1 ? "#0ea5e9" : "#6b7280"} 
                            stroke="black" 
                            strokeWidth="1"
                            className="cursor-pointer hover:fill-primary/80 transition-colors duration-300"
                            onClick={() => handleSelectFurniture(1)}
                          />
                          
                          <rect 
                            x="120" y="220" 
                            width="40" height="40" 
                            fill={selectedFurniture === 2 ? "#0ea5e9" : "#a1a1aa"} 
                            stroke="black" 
                            strokeWidth="1"
                            className="cursor-pointer hover:fill-primary/80 transition-colors duration-300"
                            onClick={() => handleSelectFurniture(2)}
                          />
                          
                          <rect 
                            x="250" y="40" 
                            width="100" height="40" 
                            fill="#94a3b8" 
                            stroke="black" 
                            strokeWidth="1"
                          />
                          
                          <rect 
                            x="250" y="200" 
                            width="80" height="60" 
                            fill="#94a3b8" 
                            stroke="black" 
                            strokeWidth="1"
                          />
                        </svg>
                      </motion.div>

                      {selectedDoor && (
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4 bg-background/90 p-4 rounded-lg shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{doorData[selectedDoor].name}</h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 text-sm">
                                <div>
                                  <span className="font-medium">Width:</span> {doorData[selectedDoor].width}
                                </div>
                                <div>
                                  <span className="font-medium">Height:</span> {doorData[selectedDoor].height}
                                </div>
                                <div>
                                  <span className="font-medium">Material:</span> {doorData[selectedDoor].material}
                                </div>
                                <div>
                                  <span className="font-medium">Type:</span> {doorData[selectedDoor].type}
                                </div>
                                <div>
                                  <span className="font-medium">Swing:</span> {doorData[selectedDoor].swing}
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => setSelectedDoor(null)}
                              className="ml-4"
                            >
                              Close
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {selectedWall && (
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4 bg-background/90 p-4 rounded-lg shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{wallData[selectedWall].name}</h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 text-sm">
                                <div>
                                  <span className="font-medium">Thickness:</span> {wallData[selectedWall].thickness}
                                </div>
                                <div>
                                  <span className="font-medium">Height:</span> {wallData[selectedWall].height}
                                </div>
                                <div>
                                  <span className="font-medium">Material:</span> {wallData[selectedWall].material}
                                </div>
                                <div>
                                  <span className="font-medium">Insulation:</span> {wallData[selectedWall].insulation}
                                </div>
                                <div>
                                  <span className="font-medium">Features:</span> {wallData[selectedWall].features}
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => setSelectedWall(null)}
                              className="ml-4"
                            >
                              Close
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {selectedRoom && (
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4 bg-background/90 p-4 rounded-lg shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{roomData[selectedRoom].name}</h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 text-sm">
                                <div>
                                  <span className="font-medium">Area:</span> {roomData[selectedRoom].area}
                                </div>
                                <div>
                                  <span className="font-medium">Flooring:</span> {roomData[selectedRoom].flooring}
                                </div>
                                <div>
                                  <span className="font-medium">Ceiling:</span> {roomData[selectedRoom].ceiling}
                                </div>
                                <div>
                                  <span className="font-medium">Lighting:</span> {roomData[selectedRoom].lighting}
                                </div>
                                <div>
                                  <span className="font-medium">Features:</span> {roomData[selectedRoom].features}
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => setSelectedRoom(null)}
                              className="ml-4"
                            >
                              Close
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {selectedFurniture && furnitureData[selectedFurniture] && (
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4 bg-background/90 p-4 rounded-lg shadow-md"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{furnitureData[selectedFurniture].name}</h3>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 text-sm">
                                <div>
                                  <span className="font-medium">Dimensions:</span> {furnitureData[selectedFurniture].dimensions}
                                </div>
                                <div>
                                  <span className="font-medium">Material:</span> {furnitureData[selectedFurniture].material}
                                </div>
                                <div>
                                  <span className="font-medium">Color:</span> {furnitureData[selectedFurniture].color}
                                </div>
                                <div>
                                  <span className="font-medium">Style:</span> {furnitureData[selectedFurniture].style}
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => setSelectedFurniture(null)}
                              className="ml-4"
                            >
                              Close
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          )}

          {view === "ar" && (
            <motion.div
              key="ar-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="ar" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                      <motion.div
                        className="rounded-full bg-muted p-6"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Sofa className="h-10 w-10 text-muted-foreground" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <h3 className="text-xl font-medium">AR Preview</h3>
                        <p className="text-muted-foreground mt-2">
                          The AR preview is available in the Homewise Vision mobile app. Download it to experience the
                          full AR capabilities.
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="/unity-link" passHref>
                          <Button className="flex items-center gap-2">
                            <span>Download Homewise App</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}

