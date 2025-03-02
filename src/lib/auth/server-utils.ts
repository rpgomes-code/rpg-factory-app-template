// src/lib/auth/server-utils.ts
// This file should ONLY be imported in server components or API routes
import { hash, compare } from "bcrypt";

// Password hashing for registration
export async function hashPassword(password: string): Promise<string> {
    return hash(password, 10);
}

// Password verification for login
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
}