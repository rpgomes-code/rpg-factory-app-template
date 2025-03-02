import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";
import { FadeIn } from "@/components/ui/motion";

export default function NotFound() {
    return (
        <MainLayout>
            <FadeIn className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 text-center">
                <h1 className="text-9xl font-extrabold tracking-tighter text-primary">
                    404
                </h1>
                <h2 className="text-3xl font-bold mt-8">Page Not Found</h2>
                <p className="text-muted-foreground mt-4 max-w-md">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <Button className="mt-8" size="lg" asChild>
                    <Link href="/">Go Home</Link>
                </Button>
            </FadeIn>
        </MainLayout>
    );
}