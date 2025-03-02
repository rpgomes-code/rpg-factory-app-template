// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth/server-utils";
import logger from "@/lib/logger";

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        if (password.length < 8) {
            return NextResponse.json(
                { message: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "User with this email already exists" },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create user
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Remove password from response
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _password, ...userWithoutPassword } = user;

        logger.info(`User registered successfully: ${email}`);

        return NextResponse.json(
            {
                message: "User registered successfully",
                user: userWithoutPassword,
            },
            { status: 201 }
        );
    } catch (error) {
        logger.error("Registration error:", error);
        return NextResponse.json(
            { message: "An error occurred during registration" },
            { status: 500 }
        );
    }
}