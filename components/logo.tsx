"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DisruptiveLogo() {
    const [isHovered, setIsHovered] = useState(false)
    const [glitchText, setGlitchText] = useState('Disruptive')

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
            setGlitchText('Disruptive')
        }
    }, [isHovered])

    return (
        <div className="relative font-mono text-2xl font-bold">
            <Link
                href="/"
                className="relative inline-block"
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
            </Link>
        </div>
    )
}