import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@/components/AuthButtons";

export default function Navbar() {
    return (
        <header className="grid grid-flow-col items-center p-5 mx-auto max-w-[1300px]">
            <Link className="flex items-center"
                  href="/">
                <Image
                    className="invert"
                    src="/cropped TasteMateLogo.png"
                    alt="Next.js Logo"
                    width={150}
                    height={20}
                    priority
                />
            </Link>
            <nav className="flex items-center ml-auto gap-8 text-gray-400 text-sm">
                <Link href={"/swipe"}
                      className={"flex gap-1.5 items-center font-semibold rounded-sm transition text-lg text-blue-400"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>


                    Find a restaurant
                </Link>
                <p className={"font-bold pointer-events-none"}>|</p>
                {/*<Link href={"/login"}*/}
                {/*      className={"flex gap-1.5 items-center font-semibold rounded-sm transition hover:text-blue-400"}>*/}
                {/*    */}
                {/*</Link>*/}
                <SignInButton />   

                

            </nav>
        </header>
    )
}