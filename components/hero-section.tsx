"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"
import Link from "next/link"

export default function Component() {
    const [isHovered, setIsHovered] = useState(false)
    const [glitchText, setGlitchText] = useState('Welcome to the Disruptive Space: Where Innovation Meets Collaboration')

    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                setGlitchText(prevText => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                    let newText = ''
                    for (let i = 0; i < prevText.length; i++) {
                        if (Math.random() < 0.1) {
                            newText += chars[Math.floor(Math.random() * chars.length)]
                        } else {
                            newText += prevText[i]
                        }
                    }
                    return newText
                })
            }, 50)

            return () => clearInterval(interval)
        } else {
            setGlitchText('Welcome to the Disruptive Space: Where Innovation Meets Collaboration')
        }
    }, [isHovered])

    return (
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center justify-center py-6 sm:py-8">
            <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <h1
                        className="relative text-4xl font-extrabold tracking-tight sm:text-6xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            {glitchText}
                        </span>
                        <span className="absolute left-0 top-0 z-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent opacity-50 blur-[2px]">
                            {glitchText}
                        </span>
                        <span className="absolute -left-[2px] -top-[2px] z-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent opacity-50 blur-[2px]">
                            {glitchText}
                        </span>
                    </h1>
                    <div className="mt-2 h-1 w-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>

                    <p className="mt-2 max-w-2xl py-5 text-xl text-muted-foreground">
                        Join the revolution and shape the future of web development. Contribute your groundbreaking ideas, create custom app routes, and collaborate with visionaries worldwide.
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="relative">
                                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
                                <div className="relative rounded-lg bg-card p-4 ring-1 ring-border">
                                    <div className="flex items-center space-x-4">
                                        <Code className="h-6 w-6 text-pink-500" />
                                        <span className="text-base font-semibold text-foreground">Your App Route {index}</span>
                                        <Zap className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2">
                                        <code className="text-xs text-muted-foreground">
                                            {`app/
  your-awesome-app-${index}/
    page.tsx
    layout.tsx
    components/
    styles/`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
