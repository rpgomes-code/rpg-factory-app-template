import { NextRequest, NextResponse } from "next/server";
import {getServerSession} from "@/lib/auth/server-auth";

export default async function middleware(request: NextRequest) {
    const session = await getServerSession();

    // Define protected routes
    const protectedRoutes = ["/dashboard", "/settings", "/profile"];
    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    );

    // Redirect to log in if accessing protected route without authentication
    if (isProtectedRoute && !session) {
        const redirectUrl = new URL("/auth/signin", request.url);
        redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    }

    // Redirect to dashboard if already authenticated and trying to access auth pages
    if (session && request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};