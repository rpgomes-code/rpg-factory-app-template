"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel as Label } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Scale } from "@/components/ui/motion";

export default function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Register the user
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            toast({
                title: "Account created",
                description: "You have successfully created an account",
            });

            // Automatically sign in after registration
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            router.push("/dashboard");
            router.refresh();
        } catch (error) {
            console.error("Registration error:", error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Something went wrong",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Scale>
            <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                autoCapitalize="words"
                                autoComplete="name"
                                autoCorrect="off"
                                disabled={isLoading}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                autoComplete="new-password"
                                disabled={isLoading}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                            <p className="text-xs text-muted-foreground">
                                Password must be at least 8 characters long
                            </p>
                        </div>
                        <Button type="submit" disabled={isLoading} className="mt-2">
                            {isLoading ? "Creating account..." : "Create account"}
                        </Button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        variant="outline"
                        type="button"
                        disabled={isLoading}
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    >
                        Google
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        disabled={isLoading}
                        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </Scale>
    );
}