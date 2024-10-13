'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from "@/components/ui/button"
import DisruptiveLogo from '@/components/logo'

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
            <nav className='container flex max-w-5xl items-center justify-between'>
                <div>
                    <Link href='/' className='font-serif text-2xl font-bold'>
                        <DisruptiveLogo />
                    </Link>
                </div>

                <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
                    <li className='transition-colors hover:text-foreground'>
                        <Link href='/posts'>Posts</Link>
                    </li>
                    <li className='transition-colors hover:text-foreground'>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className='transition-colors hover:text-foreground'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <Button
                        variant={resolvedTheme === 'dark' ? 'outline' : 'default'}
                        size="sm"
                        asChild
                    >
                        <Link href="/auth/signin">Sign In</Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
