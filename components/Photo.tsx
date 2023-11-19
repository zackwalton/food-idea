import React, { useState } from 'react';
import Image from "next/image";


export function Photo(img: string){
    return <Image src={img} alt="Image should be here" width={100} height={100} />
}

