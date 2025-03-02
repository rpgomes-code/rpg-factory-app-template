// src/lib/auth/client-auth.ts
"use client";

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";

interface SignInOptions extends Record<string, unknown> {
    callbackUrl?: string;
    redirect?: boolean;
    email?: string;
    password?: string;
}

interface SignOutOptions {
    callbackUrl?: string;
    redirect?: boolean;
}

export const signIn = async (provider: string, options?: SignInOptions) => {
    return nextAuthSignIn(provider, options);
};

export const signOut = async (options?: SignOutOptions) => {
    return nextAuthSignOut(options);
};