'use client'
import { useState } from "react";
import { ButtonBad, ButtonGood } from "@/components/Button";
import Image from "next/image";
import Recommendation from "@/components/Recommendation";
import StarRating from "@/components/StarRating/StarRating";
import PriceLevel from "@/components/PriceLevel/PriceLevel";

interface Props {
    places: []
    googleMapKey: string
}

export default function Swiper({ places, googleMapKey }: Props) {

    const [placeIndex, setPlaceIndex] = useState(0);
    const [preferences, setPreferences] = useState([]);
    const dislikePic = () => {
        // @ts-ignore
        setPreferences(['disliked ' + places[placeIndex]['displayName']['text'], ...preferences]);
        setPlaceIndex(placeIndex + 1)
    }
    const likePic = () => {
        // @ts-ignore
        setPreferences(['liked ' + places[placeIndex]['displayName']['text'], ...preferences]);
        setPlaceIndex(placeIndex + 1)
    }
    if (placeIndex + 1 >= places.length) {
        return <Recommendation places={places} preferences={preferences} />
    }
    const imageUrl = `https://places.googleapis.com/v1/${places[placeIndex]['photos'][0]['name']}/media?key=${googleMapKey}&maxWidthPx=600`;
    return <div className={"flex justify-center"}>
        <div className={"relative w-[600px] h-[550px] bg-white rounded-lg"}>
            <div className={"flex flex-wrap w-full h-full items-center content-start p-3"}>
                <Image
                    className={"border-2 border-black rounded-lg"}
                    src={imageUrl}
                    alt={"Restaurant Image"}
                    width={600}
                    height={400}
                />
            </div>
            <ButtonBad className={"absolute bottom-10 left-10"} onClick={dislikePic} />
            <PriceLevel levelEnum={places[placeIndex]['priceLevel']} className={"absolute bottom-12 left-[246px]"} />
            <StarRating className={"absolute bottom-5 left-[232px]"} rating={places[placeIndex]['rating']} />
            <ButtonGood className={"absolute bottom-10 right-10"} onClick={likePic} />
        </div>
    </div>
}