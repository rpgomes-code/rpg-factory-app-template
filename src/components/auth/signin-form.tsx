// src/components/auth/signin-form.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Scale } from "@/components/ui/motion";

type SignInFormValues = {
    email: string;
    password: string;
};

export default function SignInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const methods = useForm<SignInFormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: SignInFormValues) => {
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                throw new Error(result.error);
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
                description: "Invalid email or password",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Scale>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-6">
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
                                {...methods.register("email", { required: true })}
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
                                {...methods.register("password", { required: true })}
                            />
                        </div>
                        <Button type="submit" disabled={isLoading} className="mt-2">
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </Scale>
    );
}