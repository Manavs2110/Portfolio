"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-0 bg-background shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image || "./placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-primary/10 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Button variant="default" asChild className="gap-2">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-background">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" asChild className="gap-2 w-full">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
