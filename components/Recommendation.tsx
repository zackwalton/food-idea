'use client'
import useSWR from "swr";
import React from "react";
import Link from "next/link";

interface Props {
    places: []
    preferences: string[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Recommendation({ places, preferences }: Props) {
    let place_names: string[] = []
    for (let i = 0; i < places.length; i++) {
        place_names.push(places[i]['displayName']['text'])
    }

    const { data, error, isLoading } = useSWR(
        `/api/recommendation?locations=${JSON.stringify(place_names)}&preferences=${JSON.stringify(preferences)}`, fetcher)

    if (error) return <div>Error!</div>

    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[500px] bg-white rounded-lg"}>
            <p className={"text-2xl font-bold text-center p-3 m-2 border-black border-2 rounded-lg"}>Recommendation</p>
            <div className={"flex flex-col items-center gap-6 text-center p-3 leading-7"}>
                {isLoading ?
                    <div className={"animate-bounce mt-14 text-xl"}><span className={"font-bold text-blue-300"}>
                        TasteMate AI</span> is thinking!
                    </div>
                    : data['choices'][0]['message']['content']}
                {!isLoading ?
                    <Link href={`https://maps.google.com/?q=${data['choices'][0]['message']['content'].split('"')[1]}`}
                          className={"flex flex-row justify-center align-middle gap-2 bg-blue-300 p-2 rounded-lg w-[200px] font-bold"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                        Show me the way!
                    </Link> : null}
            </div>

        </div>
    </div>
}