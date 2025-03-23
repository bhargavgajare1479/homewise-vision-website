"use client"

import Image from "next/image"
import { Bookmark, Clock, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  progress: number
  lastEdited: string
  saved?: boolean
}

export function ProjectCard({ title, description, image, progress, lastEdited, saved = false }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {saved && (
              <div className="absolute top-2 right-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background/90 rounded-full">
                    <Bookmark className="h-4 w-4 fill-primary" />
                    <span className="sr-only">Saved</span>
                  </Button>
                </motion.div>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium">{progress}%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Progress value={progress} className="h-1" />
            </motion.div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          Last edited {lastEdited}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

