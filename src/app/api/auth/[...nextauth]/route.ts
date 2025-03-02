// src/app/api/auth/[...nextauth]/route.ts
import { auth } from "@/lib/auth/server-auth";

// Export the auth handlers directly
export const GET = auth;

export const POST = auth;