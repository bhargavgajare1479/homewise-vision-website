import { BlueprintVisualizer } from "@/components/blueprint-visualizer"

export default function DemoPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Demo</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience how Homewise Vision transforms your blueprints into interactive 3D models
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <BlueprintVisualizer />
      </div>
    </div>
  )
}

