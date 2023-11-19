'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter();
    return (
        <header className="grid grid-flow-col items-center p-5 mx-auto max-w-[1200px]">
            <Link className="flex items-center"
                  href="/">
                <Image
                    className="rounded-full"
                    src="/Capture.JPG"
                    alt="TasteMate Logo"
                    width={100}
                    height={100}
                    priority
                />
            </Link>
            <nav className="flex items-center ml-auto gap-8 text-black text-sm">
                <div className={"flex gap-1.5 items-center font-bold rounded-sm transition text-lg"}>
                    <button onClick={() => {router.replace("/")}}
                            className={"flex flex-row items-center gap-2 p-3 border-2 border-black bg-white rounded-full transition ease-in delay-50 hover:bg-blue-300"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Find a restaurant
                    </button>
                </div>
            </nav>
        </header>
    )
}