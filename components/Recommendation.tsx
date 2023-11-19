'use client'
import useSWR from "swr";
import React from "react";

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
    console.log(data);

    if (error) return <div>Error!</div>

    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[400px] bg-white rounded-lg"}>
            <p className={"text-2xl font-bold text-center p-3 m-2 border-black border-2 rounded-lg"}>Recommendation</p>
            <div className={"text-center p-3 leading-7 mt-14"}>
                {isLoading ?
                    <div className={"animate-bounce"}><span className={"font-bold text-blue-300"}>
                        TasteMate AI</span> is thinking!
                    </div>
                    : data['choices'][0]['message']['content']}
            </div>
        </div>
    </div>
}