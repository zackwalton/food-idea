import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/Navbar";
import AuthProvider from "@/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TasteMate AI',
    description: 'TasteMate AI makes it easy to find the perfect restaurant for you!',
}

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <html lang="en">
            <body className={inter.className + " text-black bg-blue-100"}>
            <Navbar />
            <div className={"flex flex-col items-center"}>
                <div className={"w-[756px] h-full"}>{children}</div>
            </div>
            </body>
            </html>
        </AuthProvider>
    )
}
