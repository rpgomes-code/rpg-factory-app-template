import { NextRequest } from "next/server";
import { auth } from "@/lib/auth/server-auth";

export async function GET(request: NextRequest) {
    return await auth.handleRequest(request);
}

export async function POST(request: NextRequest) {
    return await auth.handleRequest(request);
}