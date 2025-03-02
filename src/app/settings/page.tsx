import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/ui/motion";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/settings/profile-form";
import AccountForm from "@/components/settings/account-form";
import NotificationsForm from "@/components/settings/notifications-form";
import AppearanceForm from "@/components/settings/appearance-form";
import Link from "next/link";
import {getServerSession} from "@/lib/auth/server-auth";

export const metadata = {
    title: "Settings | NextJS Template",
    description: "Manage your account settings",
};

export default async function SettingsPage() {
    const session = await getServerSession();

    // Redirect if not authenticated
    if (!session) {
        redirect("/auth/signin?callbackUrl=/settings");
    }

    return (
        <MainLayout>
            <div className="container py-10">
                <FadeIn>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">Settings</h1>
                        <p className="text-muted-foreground mt-2">
                            Manage your account settings and preferences.
                        </p>
                    </div>

                    <Tabs defaultValue="profile" className="w-full">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Settings</CardTitle>
                                        <CardDescription>
                                            Manage your account preferences.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <TabsList className="flex flex-col h-auto items-stretch gap-1 bg-transparent">
                                            <TabsTrigger
                                                value="profile"
                                                className="justify-start text-left"
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
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                Profile
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="account"
                                                className="justify-start text-left"
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
                                                        width="20"
                                                        height="14"
                                                        x="2"
                                                        y="5"
                                                        rx="2"
                                                    />
                                                    <line x1="2" x2="22" y1="10" y2="10" />
                                                </svg>
                                                Account
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="notifications"
                                                className="justify-start text-left"
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
                                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                                </svg>
                                                Notifications
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="appearance"
                                                className="justify-start text-left"
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
                                                    <circle cx="12" cy="12" r="3" />
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                </svg>
                                                Appearance
                                            </TabsTrigger>
                                        </TabsList>

                                        <div className="mt-6">
                                            <Button
                                                variant="destructive"
                                                className="w-full"
                                                asChild
                                            >
                                                <Link href="/api/auth/signout">Sign out</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            <TabsContent value="profile">Profile</TabsContent>
                                            <TabsContent value="account">Account</TabsContent>
                                            <TabsContent value="notifications">
                                                Notifications
                                            </TabsContent>
                                            <TabsContent value="appearance">Appearance</TabsContent>
                                        </CardTitle>
                                        <CardDescription>
                                            <TabsContent value="profile">
                                                Manage your public profile information.
                                            </TabsContent>
                                            <TabsContent value="account">
                                                Manage your account settings.
                                            </TabsContent>
                                            <TabsContent value="notifications">
                                                Configure how you receive notifications.
                                            </TabsContent>
                                            <TabsContent value="appearance">
                                                Customize the appearance of the application.
                                            </TabsContent>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <TabsContent value="profile">
                                            <ProfileForm user={session.user ?? null} />
                                        </TabsContent>
                                        <TabsContent value="account">
                                            <AccountForm user={session.user ?? null} />
                                        </TabsContent>
                                        <TabsContent value="notifications">
                                            <NotificationsForm />
                                        </TabsContent>
                                        <TabsContent value="appearance">
                                            <AppearanceForm />
                                        </TabsContent>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Tabs>
                </FadeIn>
            </div>
        </MainLayout>
    );
}