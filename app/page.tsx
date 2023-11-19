'use client'

import {ButtonGood, ButtonBad} from "@/components/Button"
import { Photo } from "@/components/photo";
import React,{ useState } from 'react';

export default function Page() {
    let images = ['public/pizza.jpeg', 'public/paella.jpeg']

    let [curImage, setCurImage] = useState(images[0])

    return <div className={"w-full h-[800px] bg-gray-950"}>
        <ButtonGood color="" url=""/>
        <ButtonBad color="" url=""/>
    </div>
    
}