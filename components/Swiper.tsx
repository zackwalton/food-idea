'use client'
import { useState } from "react";
import { ButtonBad, ButtonGood } from "@/components/Button";
import Image from "next/image";
import Recommendation from "@/components/Recommendation";

interface Props {
    places: []
    googleMapKey: string
}

export default function Swiper({places, googleMapKey}: Props) {

    const [placeIndex, setPlaceIndex] = useState(0);
    let preferences: [string] | [] = []
    const dislikePic = () => {
        // @ts-ignore
        preferences.push('disliked ' + places[placeIndex]['displayName']['text'])
        setPlaceIndex(placeIndex + 1)
    }
    const likePic = () => {
        // @ts-ignore
        preferences.push('liked ' + places[placeIndex]['displayName']['text'])
        setPlaceIndex(placeIndex + 1)
    }
    if (placeIndex + 1 >= places.length / 2) {
        return <Recommendation places={places} preferences={preferences} />
    }
    console.log(places);
    const imageUrl = `https://places.googleapis.com/v1/${places[placeIndex]['photos'][0]['name']}/media?key=${googleMapKey}&maxWidthPx=400`;
    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[600px] bg-white rounded-lg"}>
            <div className={"flex w-full h-full items-center justify-center p-3"}>
                <Image
                    className={"border-2 border-black rounded-lg"}
                    src={imageUrl}
                    alt={"Restaurant"}
                    width={400}
                    height={600}
                />
            </div>
            <ButtonBad className={"absolute bottom-10 left-10"} onClick={likePic} />
            <ButtonGood className={"absolute bottom-10 right-10"} onClick={dislikePic} />
        </div>
    </div>
}