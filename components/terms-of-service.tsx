"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ModernTermsOfService() {
    const lastUpdated = "October 13, 2024"

    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            content: "By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
            id: "use-license",
            title: "Use License",
            content: "Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only."
        },
        {
            id: "disclaimer",
            title: "Disclaimer",
            content: "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
            id: "limitations",
            title: "Limitations",
            content: "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage."
        },
        {
            id: "revisions",
            title: "Revisions and Errata",
            content: "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current. We may make changes to the materials contained on our website at any time without notice."
        },
        {
            id: "modifications",
            title: "Modifications",
            content: "We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
        },
        {
            id: "governing-law",
            title: "Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of your country and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-background">
            {/* Sidebar */}
            <Card className="lg:w-64 lg:h-screen overflow-y-auto border-r">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ScrollArea className="h-[calc(100vh-8rem)] px-4">
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <Button
                                    key={section.id}
                                    variant="ghost"
                                    className="w-full justify-start"
                                    asChild
                                >
                                    <a href={`#${section.id}`}>
                                        {section.title}
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </a>
                                </Button>
                            ))}
                        </nav>
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* Main content */}
            <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
                            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
                        </CardHeader>
                    </Card>

                    {sections.map((section, index) => (
                        <Card key={section.id} id={section.id} className="scroll-mt-16">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{section.content}</p>
                            </CardContent>
                            {index < sections.length - 1 && <Separator className="my-4" />}
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}