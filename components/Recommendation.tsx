'use client'
import useSWR from "swr";

interface Props {
    places: []
    preferences: [string] | []
}

const fetcher = async (
    url: string,
    payload?: string,
) => {
    const options = {
        method: payload ? "POST" : "GET",
        ...(payload && {body: payload}),
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    return fetch(url, options).then(r => r.json());

};

export default function Recommendation({places, preferences}: Props) {
    let place_names: [string] | [] = []
    for (let i = 0; i < places.length; i++) {
        place_names.push(places[i]['displayName']['text'])
    }

    const {data, isLoading, error} = useSWR(
        [
            `/api/recommendation`,
            JSON.stringify({locations: place_names, preferences: preferences}),
        ],
        fetcher,
        {
        },
    );

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.toString()}</div>
    console.log(data);

    return <div className={"flex justify-center"}>
        <div className={"relative w-[400px] h-[600px] bg-white rounded-lg"}>
            <p className={"text-2xl font-bold text-center p-5"}>Recommendation</p>
        </div>
    </div>
}