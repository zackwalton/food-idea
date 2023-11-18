import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/Navbar";
import AuthProvider from "@/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Food Idea App',
    description: 'A simple app to help you find food places to eat at.',
}

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <html lang="en">
            <body className={inter.className + " min-h-screen text-white bg-gray-900"}>
            <Navbar />
            {children}
            </body>
            </html>
        </AuthProvider>
    )
}