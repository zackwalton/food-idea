'use client'
import { useEffect, useState } from "react";
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

    const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    useEffect(() => {
        shuffleArray(places);
        console.log('shuffled places');
    }, [places]);
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
    console.log(preferences);
    const imageUrl = `https://places.googleapis.com/v1/${places[placeIndex]['photos'][0]['name']}/media?key=${googleMapKey}&maxWidthPx=400`;
    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[600px] bg-white rounded-lg"}>
            <div className={"flex w-full h-full items-center justify-center p-3"}>
                <Image
                    className={"border-2 border-black rounded-lg"}
                    src={imageUrl}
                    alt={"Restaurant Image"}
                    width={400}
                    height={600}
                />
            </div>
            <ButtonBad className={"absolute bottom-10 left-10"} onClick={dislikePic} />
            <PriceLevel levelEnum={places[placeIndex]['priceLevel']} className={"absolute bottom-12 left-[146px]"} />
            <StarRating className={"absolute bottom-5 left-[132px]"} rating={places[placeIndex]['rating']} />
            <ButtonGood className={"absolute bottom-10 right-10"} onClick={likePic} />
        </div>
    </div>
}