"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center justify-center py-6 sm:py-8">
            <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                        Welcome to Disruptive Space
                    </h1>
                    <div className="mt-2 h-1 w-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>

                    <p className="mt-2 max-w-2xl py-5 text-xl text-muted-foreground">
                        Join the revolution. Contribute your ideas and create your own app routes in our collaborative ecosystem.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-x-4">
                        <Button asChild size="lg" className="group">
                            <Link href="https://github.com/fariraimasocha/disruptive">
                                Start Contributing
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="https://github.com/fariraimasocha/disruptive">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
                        <div className="relative rounded-lg bg-card p-4 ring-1 ring-border">
                            <div className="flex items-center space-x-4">
                                <Code className="h-6 w-6 text-pink-500" />
                                <span className="text-base font-semibold text-foreground">Your App Route</span>
                                <Zap className="h-5 w-5 text-yellow-400" />
                            </div>
                            <pre className="mt-2 overflow-x-auto rounded bg-muted p-2">
                                <code className="text-xs text-muted-foreground">
                                    {`app/
  your-awesome-app/
    page.tsx
    layout.tsx
    components/
    styles/`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
