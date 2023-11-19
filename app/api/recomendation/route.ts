

import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI();

// export async function GET(request: Request) {
//     const users = await prisma.user.findMany()  // get all users from database

//     return NextResponse.json(users)  // return users as JSON
// }


 export async function POST(request: NextRequest) {

  let body = await request.json()
  let locations = body['locations'] as Array<string> 
  // lcoations = [location,location,location]
  let prefrences = body['prefrences'] as Array<string>
  // prefrences = [liked location ,disliked location ,liked location]
  var location_message = 'The list of possible restraunts I want to go to are, '
  for(let i = 0; i<locations.length; i++){
    location_message = location_message + locations[i] + ', '
  }

  var refrence_messge = 'The following is the list of restraunts I prefer, I '
  for(let i = 0; i<prefrences.length; i++){
    refrence_messge = refrence_messge + prefrences[i] + ', '
  }

  const completion = await openai.chat.completions.create({
    messages: [
      {role: 'system',content: "You are a restraunt recomondation engine, please only recomond 1 restraunt" },
      {role: "user", content: "Based on the following restraunt raitings please give me a recomondation." },
      {role: "user", content: "The following is a list of possible restraunt options."},
      {role: "user", content: location_message},
      {role: "user", content: "The following is a list of prefrences."},
      {role: "user", content: refrence_messge}

    ],
    model: "gpt-3.5-turbo",
  });

  return NextResponse.json(completion);
}