// src/components/settings/account-form.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel as Label } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AccountFormProps {
    user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | null;
}

export default function AccountForm({ user }: AccountFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const userEmail = user?.email || ""; // Use the user prop

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast({
                title: "Error",
                description: "New passwords do not match",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            // Change password API call would go here
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            toast({
                title: "Password updated",
                description: "Your password has been updated successfully",
            });
        } catch (error) {
            console.error("Password change error:", error);
            toast({
                title: "Error",
                description: "Failed to update password. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                        Update your password to keep your account secure.
                        {userEmail && <span className="block mt-1">Current email: {userEmail}</span>}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form id="password-form" onSubmit={handlePasswordChange} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                            <p className="text-sm text-muted-foreground">
                                Password must be at least 8 characters long.
                            </p>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button
                        type="submit"
                        form="password-form"
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update Password"}
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                    <CardDescription>
                        Permanently delete your account and all associated data.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back. Please be
                        certain.
                    </p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button
                        variant="destructive"
                        onClick={() => {
                            const confirmed = window.confirm(
                                "Are you sure you want to delete your account? This action cannot be undone."
                            );
                            if (confirmed) {
                                // Delete account API call would go here
                                toast({
                                    title: "Account deleted",
                                    description: "Your account has been permanently deleted",
                                });
                                router.push("/");
                            }
                        }}
                    >
                        Delete Account
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}