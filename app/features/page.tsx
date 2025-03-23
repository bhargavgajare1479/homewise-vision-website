import { Building, Calculator, Check, Home, Layers, Ruler, Shield } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container px-4 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover all the powerful features of Homewise Vision
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:gap-16 lg:gap-20 mt-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-2">
            <Layers className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Blueprint Visualization</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Upload your blueprint and see it transform into a detailed 3D model in real-time using our advanced AR
              technology.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Instant 3D rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>AR overlay on physical blueprints</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Scale adjustments</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Calculator className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Cost Estimation</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get accurate cost estimates for your project based on your location and selected materials with our
              AI-powered system.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Location-based pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Material cost breakdown</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Labor cost estimates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-2">
            <Home className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Interior Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Customize your interior with furniture and fixtures from our extensive catalog and see how they look in
              your space.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Extensive furniture catalog</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Drag-and-drop placement</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Real-time lighting simulation</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Shield className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Structural Integrity</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Test the structural integrity of your design with our advanced simulation tools to ensure safety and
              compliance.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Load-bearing analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Building code compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Stress test simulations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-2">
            <Building className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Material Selection</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Choose from a wide range of materials for your walls, floors, and other surfaces to visualize different
              finishes.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Realistic material rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Cost comparison</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Eco-friendly options</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Ruler className="h-10 w-10 text-primary" />
            <h3 className="text-xl font-bold">Measurement Tools</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Take precise measurements in your 3D model to ensure everything fits perfectly in your real space.
            </p>
            <ul className="grid gap-2 mt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Distance measurement</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Area calculation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Volume estimation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

