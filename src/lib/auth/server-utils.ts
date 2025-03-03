// src/lib/auth/server-utils.ts
import * as bcrypt from 'bcryptjs'; // Changed from 'bcrypt'

// Password hashing for registration
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

// Password verification for login
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}