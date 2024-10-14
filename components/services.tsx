"use client"

import { Code, Rocket, Users, ChevronRight, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function DisruptiveServices() {
    return (
        <div className="min-h-screen bg-background text-foreground p-6 md:p-8 lg:p-12">
            <main className="container mx-auto">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                        Disruptive Space: Where Innovation Meets Collaboration
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join the revolution and shape the future of web development. Contribute your groundbreaking ideas, create custom app routes, and collaborate with visionaries worldwide.
                    </p>
                </section>
                <Tabs defaultValue="services" className="mb-12">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="services">Our Services</TabsTrigger>
                        <TabsTrigger value="opensource">Open Source</TabsTrigger>
                    </TabsList>
                    <TabsContent value="services">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Code className="h-6 w-6 text-primary" />
                                        Open Source Development
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Contribute to our open-source projects and help build the future of web development.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Rocket className="h-6 w-6 text-primary" />
                                        Custom App Routes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Create and manage custom app routes with our intuitive interface and powerful API.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="h-6 w-6 text-primary" />
                                        Collaborative Workspace
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Connect with developers worldwide and work together on groundbreaking projects.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="opensource">
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Open Source Commitment</CardTitle>
                                <CardDescription>
                                    We believe in the power of community-driven development. Here are some of our open source projects:
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                    <ul className="space-y-4">
                                        {["NextJS Boilerplate", "React Component Library", "GraphQL Schema Generator", "Serverless Functions Collection"].map((project, index) => (
                                            <li key={index} className="flex items-center justify-between">
                                                <span>{project}</span>
                                                <Badge variant="outline">Contribute</Badge>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                <Card className="w-full max-w-4xl mx-auto overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-10" />
                        <CardContent className="relative z-10 p-8 text-center">
                            <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                                Embrace the Power of Open Source
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Our commitment to open source drives innovation and fosters a community of passionate developers.
                                Join us in shaping the future of technology.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                                <Button size="lg" className="group w-full sm:w-auto">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                                    <Github className="mr-2 h-4 w-4" />
                                    View on GitHub
                                </Button>
                            </div>
                            <Separator className="my-8" />
                            <div className="flex justify-center items-center gap-8 text-muted-foreground">
                                <div className="flex items-center">
                                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span className="font-semibold">10 Stars</span>
                                </div>
                                <div>
                                    <span className="font-semibold">5+ Contributors</span>
                                </div>
                                <div>
                                    <span className="font-semibold">10+ Projects</span>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </main>
        </div>
    )
}