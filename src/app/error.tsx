"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <FadeIn className="container flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-20 text-center">
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
                className="h-16 w-16 text-destructive"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <h2 className="text-3xl font-bold mt-6">Something went wrong!</h2>
            <p className="text-muted-foreground mt-4 max-w-md">
                We apologize for the inconvenience. An error occurred while processing
                your request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button onClick={() => reset()} variant="default">
                    Try again
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        </FadeIn>
    );
}