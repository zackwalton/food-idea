'use client'
import { useState } from "react";
import { ButtonBad, ButtonGood } from "@/components/Button";
import Image from "next/image";

interface Props {
    places: [];
}

export default function Swiper({places}: Props) {

    const [placeIndex, setPlaceIndex] = useState(0);
    const nextPic = () => setPlaceIndex(placeIndex + 1)

    console.log(places[placeIndex]['photoUri']);
    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[600px] bg-gray-300"}>
            {<Image src={places[placeIndex]['photoUri']}
                    alt={"Restaurant"}
                    width={400}
                    height={600}
            />}

            <ButtonBad className={"absolute bottom-10 left-10"} onClick={nextPic} />
            <ButtonGood className={"absolute bottom-10 right-10"} onClick={nextPic} />
        </div>
    </div>
}