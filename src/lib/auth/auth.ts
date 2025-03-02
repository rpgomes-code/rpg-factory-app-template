import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXTAUTH_SECRET,
});