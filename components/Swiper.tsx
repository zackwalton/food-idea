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
    const imageUrl = `https://places.googleapis.com/v1/${places[placeIndex]['photos'][0]['name']}/media?key=${googleMapKey}&maxWidthPx=800`;
    return <div className={"flex justify-center"}>
        <div className={"relative w-[600px] min-h-[550px] bg-white rounded-lg"}>
            <div className={"flex flex-wrap w-full h-full items-center content-start p-3"}>
                <Image
                    className={"border-2 border-black rounded-lg"}
                    src={imageUrl}
                    alt={"Restaurant Image"}
                    width={800}
                    height={800}
                />
            </div>
            <div className={"absolute bg-white opacity-50 w-full h-[90px] bottom-3 rounded-lg"} />
            <ButtonBad className={"absolute bottom-10 left-10"} onClick={dislikePic} />
            <PriceLevel levelEnum={places[placeIndex]['priceLevel']}
                        className={"absolute bottom-12 left-[246px]"} />
            <StarRating className={"absolute bottom-5 left-[232px]"} rating={places[placeIndex]['rating']} />
            <ButtonGood className={"absolute bottom-10 right-10"} onClick={likePic} />

        </div>
    </div>
}