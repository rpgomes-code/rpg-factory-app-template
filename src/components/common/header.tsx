"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    } | null;
}

export function Header({ user }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <FadeIn>
            <header className="w-full border-b bg-background">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-semibold">NextJS Template</span>
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <div className="hidden md:flex gap-2">
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <Link href="/dashboard">
                                        <Button variant="outline">Dashboard</Button>
                                    </Link>
                                    <Link href="/api/auth/signout">
                                        <Button variant="ghost">Sign Out</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Link href="/auth/signin">
                                        <Button variant="outline">Sign In</Button>
                                    </Link>
                                    <Link href="/auth/signup">
                                        <Button>Sign Up</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={toggleMobileMenu}
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
                                className={cn(
                                    "h-6 w-6 transition-all",
                                    isMobileMenuOpen ? "rotate-90" : ""
                                )}
                            >
                                {isMobileMenuOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="4" y1="18" x2="20" y2="18" />
                                    </>
                                )}
                            </svg>
                        </Button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="container md:hidden px-4 pb-4">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "px-2 py-1.5 text-sm font-medium transition-colors hover:text-primary rounded-md",
                                        pathname === item.href
                                            ? "bg-muted text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-2 flex flex-col gap-2">
                                {user ? (
                                    <>
                                        <Link href="/dashboard">
                                            <Button className="w-full" variant="outline">
                                                Dashboard
                                            </Button>
                                        </Link>
                                        <Link href="/api/auth/signout">
                                            <Button className="w-full" variant="ghost">
                                                Sign Out
                                            </Button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/auth/signin">
                                            <Button className="w-full" variant="outline">
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link href="/auth/signup">
                                            <Button className="w-full">Sign Up</Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </FadeIn>
    );
}