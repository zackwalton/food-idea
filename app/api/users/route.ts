import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const users = await prisma.user.findMany()  // get all users from database

    return NextResponse.json(users)  // return users as JSON
}