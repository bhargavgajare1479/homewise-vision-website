import { redirect } from "next/navigation"
import { FileText, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

// Mock function to simulate authentication check
// In a real app, you would use a proper auth solution
const getUser = () => {
  // Return null to simulate not logged in
  // return null

  // Return user object to simulate logged in
  return {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
  }
}

export default function DashboardPage() {
  const user = getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/login")
  }

  return (
    <div className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your projects and visualizations</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Create New Project</CardTitle>
                <CardDescription>Start a new visualization from scratch</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="rounded-full bg-muted p-6">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Project
                </Button>
              </CardFooter>
            </Card>

            <ProjectCard
              title="Modern Apartment"
              description="2 bedroom, 2 bathroom apartment design"
              image="/placeholder.svg?height=200&width=300"
              progress={85}
              lastEdited="2 days ago"
            />

            <ProjectCard
              title="Family Home"
              description="4 bedroom suburban house with garden"
              image="/placeholder.svg?height=200&width=300"
              progress={42}
              lastEdited="1 week ago"
            />
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <FileText className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Modern Apartment</CardTitle>
                  <CardDescription>Edited 2 days ago</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Last modified: Added furniture to living room and adjusted kitchen layout
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="ml-auto">
                  Open
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <FileText className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Cost Estimation</CardTitle>
                  <CardDescription>Generated 3 days ago</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cost breakdown for Modern Apartment project with premium finishes
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="ml-auto">
                  View
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Beach House"
              description="Vacation home concept with ocean view"
              image="/placeholder.svg?height=200&width=300"
              progress={100}
              lastEdited="1 month ago"
              saved
            />

            <ProjectCard
              title="Office Renovation"
              description="Open plan office space with meeting rooms"
              image="/placeholder.svg?height=200&width=300"
              progress={100}
              lastEdited="2 months ago"
              saved
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

