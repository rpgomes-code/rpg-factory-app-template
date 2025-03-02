// src/lib/auth/server-auth.ts
import { auth } from "@/lib/auth/auth";

// Export the getServerSession function for use in server components
export const getServerSession = auth;