import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <head>
                    {/*
                    <meta name="viewport" content="width=300px, initial-scale=1" />
                    */}
                    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
                </head>
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </>
    )
}
