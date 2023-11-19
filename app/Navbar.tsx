'use client'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
                    <Link href={"/"}
                          className={"flex flex-row items-center gap-2 p-3 border-2 border-black bg-white rounded-full transition ease-in delay-50 hover:bg-blue-200"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                        Get started
                    </Link>
                </div>
            </nav>
        </header>
    )
}