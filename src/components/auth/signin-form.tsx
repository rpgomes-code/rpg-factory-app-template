"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel as Label } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Scale } from "@/components/ui/motion";

export default function SignInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                toast({
                    title: "Error",
                    description: "Invalid email or password",
                    variant: "destructive",
                });
                setIsLoading(false);
                return;
            }

            toast({
                title: "Success",
                description: "You have been signed in",
            });

            router.push("/dashboard");
            router.refresh();
        } catch (error) {
            console.error("Sign in error:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
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
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Button
                                    variant="link"
                                    className="h-auto p-0 text-sm"
                                    onClick={() => router.push("/auth/forgot-password")}
                                    type="button"
                                >
                                    Forgot password?
                                </Button>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                disabled={isLoading}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" disabled={isLoading} className="mt-2">
                            {isLoading ? "Signing in..." : "Sign in"}
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