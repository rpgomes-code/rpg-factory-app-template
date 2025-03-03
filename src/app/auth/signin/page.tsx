// src/app/auth/signin/page.tsx
import SignInForm from "@/components/auth/signin-form";
import { PageTransition } from "@/components/ui/motion";
import Link from "next/link";

export const dynamic = 'force-dynamic'; // Disable static generation for this page

export const metadata = {
    title: "Sign In",
    description: "Sign in to your account",
};

export default function SignInPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <PageTransition>
                <Link
                    href="/"
                    className="absolute left-4 top-4 md:left-8 md:top-8 hover:bg-accent p-2 rounded-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    <span className="sr-only">Go back</span>
                </Link>
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email and password to sign in to your account
                        </p>
                    </div>
                    <SignInForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </PageTransition>
        </div>
    );
}