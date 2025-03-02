"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { FormLabel as Label } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AppearanceForm() {
    const [isLoading, setIsLoading] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Update appearance settings API call would go here
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Appearance settings updated",
                description: "Your appearance settings have been updated successfully",
            });

            router.refresh();
        } catch (error) {
            console.error("Appearance settings update error:", error);
            toast({
                title: "Error",
                description: "Failed to update appearance settings. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-3">
                    <Label>Theme</Label>
                    <RadioGroup
                        value={theme}
                        onValueChange={setTheme}
                        className="grid grid-cols-3 gap-4"
                    >
                        <div>
                            <RadioGroupItem
                                value="light"
                                id="theme-light"
                                className="sr-only"
                            />
                            <Label
                                htmlFor="theme-light"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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
                                    className="h-6 w-6 mb-2"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 2v2" />
                                    <path d="M12 20v2" />
                                    <path d="m4.93 4.93 1.41 1.41" />
                                    <path d="m17.66 17.66 1.41 1.41" />
                                    <path d="M2 12h2" />
                                    <path d="M20 12h2" />
                                    <path d="m6.34 17.66-1.41 1.41" />
                                    <path d="m19.07 4.93-1.41 1.41" />
                                </svg>
                                <span className="text-sm">Light</span>
                            </Label>
                        </div>

                        <div>
                            <RadioGroupItem
                                value="dark"
                                id="theme-dark"
                                className="sr-only"
                            />
                            <Label
                                htmlFor="theme-dark"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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
                                    className="h-6 w-6 mb-2"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                                <span className="text-sm">Dark</span>
                            </Label>
                        </div>

                        <div>
                            <RadioGroupItem
                                value="system"
                                id="theme-system"
                                className="sr-only"
                            />
                            <Label
                                htmlFor="theme-system"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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
                                    className="h-6 w-6 mb-2"
                                >
                                    <rect width="20" height="14" x="2" y="3" rx="2" />
                                    <line x1="8" x2="16" y1="21" y2="21" />
                                    <line x1="12" x2="12" y1="17" y2="21" />
                                </svg>
                                <span className="text-sm">System</span>
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save preferences"}
            </Button>
        </form>
    );
}