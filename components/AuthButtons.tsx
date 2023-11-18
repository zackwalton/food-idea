'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SignInButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>...</div>;
    }

    if (status === "authenticated") {
        return (
            <Link href={"/me"}
                  className={"flex gap-1.5 items-center font-semibold rounded-sm transition hover:text-blue-400"}>
                {session.user?.image ? (
                    <Image
                        src={session.user?.image}
                        alt="Profile Picture"
                        width={32}
                        height={32}
                        className="rounded-full" />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                )}
                <SignOutButton />
            </Link>
        )
    }
    return <Link href={""} onClick={() => signIn()}
                 className={"flex gap-1.5 items-center font-semibold rounded-sm transition hover:text-blue-400"}>
        Sign in
    </Link>
}

export default function SignOutButton() {
    return <Link href={""} onClick={() => signOut()}
                 className={"flex gap-1.5 items-center font-semibold rounded-sm transition hover:text-blue-400"}>
        Sign out
    </Link>
}