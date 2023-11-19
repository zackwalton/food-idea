import Swiper from "@/components/Swiper";

export default async function Page() {
    const longitude = 45.507730
    const latitute = -73.579140

    const places_payload = {
        "includedTypes": ["restaurant"],
        "languageCode": "en",
        "maxResultCount": 5,
        "locationRestriction": {
            "circle": {
                "center": {
                    "latitude": longitude,
                    "longitude": latitute
                },
                "radius": 500.0
            }
        }
    }

    const google_maps_key = process.env.GOOGLE_MAPS_KEY;

    if (!google_maps_key) {
        throw new Error("No Google Maps API key found");
    }

    let places = await fetch("https://places.googleapis.com/v1/places:searchNearby", {
        method: "POST",
        headers: {
            "X-Goog-Api-Key": google_maps_key,
            "X-Goog-FieldMask": "places.id,places.displayName,places.photos",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(places_payload)
    }).then(res => res.json());

    places = places['places']


    for (let i = 0; i < places.length; i++) {
        const photoName = places[i]['photos'][0]['name'];
        const photoEndpoint = `https://places.googleapis.com/v1/${photoName}/media?key=${process.env.GOOGLE_MAPS_KEY}&maxWidthPx=400`
        console.log(photoEndpoint);
        const response = await fetch(photoEndpoint);
        console.log('photoResource response');
        console.log(response);
        // places['photoUri'] = response['photoUri'];
    }
    console.log(places);

    return <div className={"w-full h-full"}>
        <Swiper places={places}/>
    </div>
}