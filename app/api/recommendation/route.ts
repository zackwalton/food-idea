import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI();


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const locations = searchParams.get('locations');
    const preferences = searchParams.get('preferences');

    if (!locations || !preferences) {
        return NextResponse.json({ error: 'Please provide a list of locations and preferences' }, { status: 400 });
    }

    const locations_json = JSON.parse(locations) as string[];
    const preferences_json = JSON.parse(preferences) as string[];

    let locations_message = 'The list of possible restaurants I want to go to are, ';
    for (let i = 0; i < locations_json.length; i++)
        locations_message = locations_message + locations_json[i] + ', ';

    let preferences_message = 'The following is the list of restaurants I prefer, I ';
    for (let i = 0; i < preferences_json.length; i++)
        preferences_message = preferences_message + preferences_json[i] + ', ';

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system', content: "You are an concise and friendly restaurant recommendation engine, " +
                    "only recommend a single restaurant. You encourage the user to go to the restaurant"
            },
            { role: "user", content: "The following is a list of possible restaurant options." },
            { role: "user", content: locations_message },
            { role: "user", content: "The following is a list of preferences." },
            { role: "user", content: preferences_message }
        ],
        model: "gpt-4",
    });
    return NextResponse.json(completion);
}