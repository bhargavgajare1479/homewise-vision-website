import { Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">OUR TEAM</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Meet the talented individuals behind Homewise Vision
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Chinmay Sawant */}
          <div className="flex flex-col rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden pt-0">
                <img src="/chinmay.jpeg" alt="Chinmay Sawant" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold">Chinmay Sawant</h3>
              <p className="text-sm text-gray-500 mb-2">Game Developer</p>
              <p className="text-sm text-gray-500 mb-4">Frontend specialist with expertise in creating intuitive and responsive user interfaces.</p>
              <div className="flex items-center space-x-4">
                <Link href="https://www.linkedin.com/in/chinmay-sawant-8b3282266/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/Chinmay-HS" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bhargav Gajare */}
          <div className="flex flex-col rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden pt-0">
                <img src="/bhargav.jpeg" alt="Bhargav Gajare" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold">Bhargav Gajare</h3>
              <p className="text-sm text-gray-500 mb-2">Game Developer</p>
              <p className="text-sm text-gray-500 mb-4">Software engineer specializing in 3D visualization and interactive web applications.</p>
              <div className="flex items-center space-x-4">
                <Link href="https://www.linkedin.com/in/bhargavsg/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Aryan Yadav */}
          <div className="flex flex-col rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden pt-0">
                <img src="/aryan.jpg" alt="Aryan Yadav" className="w-full h-full object-cover" style={{ objectPosition: "center -5px" }} />
              </div>
              <h3 className="text-xl font-bold">Aryan Yadav</h3>
              <p className="text-sm text-gray-500 mb-2">Game Developer</p>
              <p className="text-sm text-gray-500 mb-4">Full-stack developer focused on building robust application architecture and backend systems.</p>
              <div className="flex items-center space-x-4">
                <Link href="https://www.linkedin.com/in/-aryanyadav/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/aryanyadav-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Jash Damania*/}
          <div className="flex flex-col rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden pt-0">
                <img src="/jash.jpeg" alt="Jash Damania" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold">Jash Damania</h3>
              <p className="text-sm text-gray-500 mb-2">Game Developer</p>
              <p className="text-sm text-gray-500 mb-4">AR/VR specialist with a focus on creating immersive spatial computing experiences.</p>
              <div className="flex items-center space-x-4">
                <Link href="https://www.linkedin.com/in/jash-damania-a61281266/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/Intr0vert1648" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 