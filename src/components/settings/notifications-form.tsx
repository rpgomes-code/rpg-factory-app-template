"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { FormLabel as Label } from "@/components/ui/form";

export default function NotificationsForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [marketingEmails, setMarketingEmails] = useState(false);
    const [securityAlerts, setSecurityAlerts] = useState(true);
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Update notification settings API call would go here
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Notification preferences updated",
                description: "Your notification preferences have been updated successfully",
            });

            router.refresh();
        } catch (error) {
            console.error("Notification settings update error:", error);
            toast({
                title: "Error",
                description: "Failed to update notification preferences. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label
                            htmlFor="email-notifications"
                            className="text-base"
                        >
                            Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Receive emails about your account activity.
                        </p>
                    </div>
                    <Switch
                        id="email-notifications"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label
                            htmlFor="marketing-emails"
                            className="text-base"
                        >
                            Marketing Emails
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Receive emails about new features and offers.
                        </p>
                    </div>
                    <Switch
                        id="marketing-emails"
                        checked={marketingEmails}
                        onCheckedChange={setMarketingEmails}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label
                            htmlFor="security-alerts"
                            className="text-base"
                        >
                            Security Alerts
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Receive emails about your account security.
                        </p>
                    </div>
                    <Switch
                        id="security-alerts"
                        checked={securityAlerts}
                        onCheckedChange={setSecurityAlerts}
                    />
                </div>
            </div>

            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save preferences"}
            </Button>
        </form>
    );
}