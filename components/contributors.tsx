"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface Contributor {
    id: number
    login: string
    avatar_url: string
    contributions: number
    html_url: string
}

export default function Contributors() {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/fariraimasocha/disruptive/contributors')
                if (!response.ok) {
                    throw new Error('Failed to fetch contributors')
                }
                const data = await response.json()
                setContributors(data)
            } catch (error) {
                console.error('Error fetching contributors:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchContributors()
    }, [])

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(2)].map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader className="p-4">
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-16 w-16 rounded-full" />
                                <div>
                                    <Skeleton className="h-6 w-32" />
                                    <Skeleton className="h-4 w-24 mt-2" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <Skeleton className="h-4 w-40" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributors.map((contributor) => (
                <Card key={contributor.id} className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800">
                    <CardHeader className="p-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-16 w-16 border-2 border-primary">
                                <AvatarImage src={contributor.avatar_url} alt={contributor.login} />
                                <AvatarFallback>{contributor.login.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-xl font-bold">{contributor.login}</CardTitle>
                                <Badge variant="secondary" className="mt-2 text-sm">
                                    Contributions: {contributor.contributions}
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <a
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                        >
                            View GitHub Profile
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
