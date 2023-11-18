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
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={150}
                    height={20}
                    priority
                />
            </Link>
            <nav className="flex items-center ml-auto gap-8 text-gray-400 text-sm">
                <Link href={"/swipe"}
                      className={"flex gap-1.5 items-center font-semibold rounded-sm transition text-lg text-blue-400"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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