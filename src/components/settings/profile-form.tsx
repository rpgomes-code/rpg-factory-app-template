"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel as Label } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ProfileFormProps {
    user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | null;
}

export default function ProfileForm({ user }: ProfileFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(user?.name || "");
    const [bio, setBio] = useState("");
    const [website, setWebsite] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Update profile API call would go here
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Profile updated",
                description: "Your profile has been updated successfully",
            });

            router.refresh();
        } catch (error) {
            console.error("Profile update error:", error);
            toast({
                title: "Error",
                description: "Failed to update profile. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={user?.email || ""}
                        disabled
                    />
                    <p className="text-sm text-muted-foreground">
                        Your email address cannot be changed.
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={4}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                        id="website"
                        type="url"
                        placeholder="https://example.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
            </div>

            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save changes"}
            </Button>
        </form>
    );
}