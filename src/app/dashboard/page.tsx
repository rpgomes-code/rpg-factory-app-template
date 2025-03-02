import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import { auth } from "@/lib/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Dashboard | NextJS Template",
    description: "Your personal dashboard",
};

export default async function DashboardPage() {
    const session = await auth();

    // Redirect if not authenticated
    if (!session) {
        redirect("/auth/signin?callbackUrl=/dashboard");
    }

    return (
        <MainLayout>
            <div className="container py-10">
                <FadeIn>
                    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                    <p className="text-muted-foreground mb-8">
                        Welcome back, {session.user?.name || "User"}!
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <SlideIn direction="up" delay={0.1}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Start</CardTitle>
                                    <CardDescription>
                                        Get started with your new project
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-center">
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
                                                className="h-5 w-5 mr-2 text-primary"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                            <span>Set up your profile</span>
                                        </li>
                                        <li className="flex items-center">
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
                                                className="h-5 w-5 mr-2 text-primary"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                            <span>Configure your settings</span>
                                        </li>
                                        <li className="flex items-center text-muted-foreground">
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
                                                className="h-5 w-5 mr-2"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                            <span>Explore the documentation</span>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/settings">Complete Setup</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SlideIn>

                        <SlideIn direction="up" delay={0.2}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Latest Activity</CardTitle>
                                    <CardDescription>
                                        Your recent actions and updates
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="rounded-full bg-primary/10 p-2 mr-3">
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
                                                    className="h-4 w-4 text-primary"
                                                >
                                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">Account created</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Just now
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="rounded-full bg-primary/10 p-2 mr-3">
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
                                                    className="h-4 w-4 text-primary"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">
                                                    Profile setup pending
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Complete your profile
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="text-sm w-full" asChild>
                                        <Link href="/activity">View All Activity</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SlideIn>

                        <SlideIn direction="up" delay={0.3}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Resources</CardTitle>
                                    <CardDescription>
                                        Helpful links and documentation
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link
                                                href="/docs/getting-started"
                                                className="text-sm hover:underline flex items-center text-muted-foreground hover:text-foreground"
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
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                </svg>
                                                Getting Started Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/docs/api"
                                                className="text-sm hover:underline flex items-center text-muted-foreground hover:text-foreground"
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
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                                    <polyline points="2 17 12 22 22 17" />
                                                    <polyline points="2 12 12 17 22 12" />
                                                </svg>
                                                API Documentation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/docs/components"
                                                className="text-sm hover:underline flex items-center text-muted-foreground hover:text-foreground"
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
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <rect
                                                        width="7"
                                                        height="7"
                                                        x="3"
                                                        y="3"
                                                        rx="1"
                                                    />
                                                    <rect
                                                        width="7"
                                                        height="7"
                                                        x="14"
                                                        y="3"
                                                        rx="1"
                                                    />
                                                    <rect
                                                        width="7"
                                                        height="7"
                                                        x="14"
                                                        y="14"
                                                        rx="1"
                                                    />
                                                    <rect
                                                        width="7"
                                                        height="7"
                                                        x="3"
                                                        y="14"
                                                        rx="1"
                                                    />
                                                </svg>
                                                Component Library
                                            </Link>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="secondary" className="w-full" asChild>
                                        <Link href="/docs">Explore Documentation</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SlideIn>
                    </div>
                </FadeIn>
            </div>
        </MainLayout>
    );
}