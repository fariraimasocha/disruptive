"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

// Define the Project type
type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    githubUrl: string
    liveUrl: string
    imageUrl: string
}

// Sample projects data
const projects: Project[] = [
    {
        id: 1,
        title: "Linkgenie",
        description: "A revolutionary app that does amazing things.",
        tags: ["React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/yourusername/project-alpha",
        liveUrl: "https://project-alpha.com",
        imageUrl: "/images/genie.png",
    },
    {
        id: 2,
        title: "Disruptive",
        description: "An innovative solution for common problems.",
        tags: ["Vue.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/project-beta",
        liveUrl: "https://project-beta.com",
        imageUrl: "/images/disruptive.png",
    },
]

export default function ProjectSection() {
    const [, setHoveredProject] = useState<number | null>(null)

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                    Disruptive Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            <Card className="h-full flex flex-col overflow-hidden">
                                <CardHeader className="p-0">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                </CardHeader>
                                <CardContent className="flex-grow p-4">
                                    <CardTitle className="mb-2">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <div className="flex justify-between w-full">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button variant="default" size="sm" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
