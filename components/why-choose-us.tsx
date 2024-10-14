"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Laptop, HelpCircle, Rocket } from "lucide-react"

const features = [

    {
        icon: Users,
        title: "Collaborate",
        description: "Connect with like-minded developers and work on exciting projects together.",
    },
    {
        icon: Laptop,
        title: "Showcase Projects",
        description: "Display your best work and gain recognition in the developer community.",
    },
    {
        icon: HelpCircle,
        title: "Get Help",
        description: "Receive support and guidance from experienced developers whenever you need it.",
    },
    {
        icon: Rocket,
        title: "Network",
        description: "Build valuable connections and expand your professional network.",
    },
]

export default function WhyChooseDisruptive() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                        Why Disruptive
                    </h2>
                    <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Empower your development journey with our unique features and supportive community. Discover new opportunities, enhance your skills, and build lasting connections in our thriving ecosystem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
