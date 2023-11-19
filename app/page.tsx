import Swiper from "@/components/Swiper";

export default async function Page() {
    const longitude = 45.507730
    const latitude = -73.579140

    const places_payload = {
        "includedTypes": ["restaurant"],
        "languageCode": "en",
        "maxResultCount": 12,
        "locationRestriction": {
            "circle": {
                "center": {
                    "latitude": longitude,
                    "longitude": latitude
                },
                "radius": 750.0
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
            "X-Goog-FieldMask": "places.id,places.displayName,places.photos,places.rating," +
                "places.priceLevel",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(places_payload)
    }).then(res => res.json());
    console.log('api call');

    places = places['places']
    console.log(places);

    return <div className={"w-full h-full"}>
        <Swiper places={places} googleMapKey={google_maps_key} />
    </div>
}