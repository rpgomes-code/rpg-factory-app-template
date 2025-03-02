// src/lib/auth/client-auth.ts
"use client";

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";

interface SignOutOptions {
    callbackUrl?: string;
    redirect?: boolean;
}

export const signIn = async (provider: string, options?: Parameters<typeof nextAuthSignIn>[1]) => {
    return nextAuthSignIn(provider, options);
};

export const signOut = async (options?: SignOutOptions) => {
    return nextAuthSignOut(options);
};