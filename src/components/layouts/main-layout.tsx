import React from "react";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { getServerSession } from "@/lib/auth/server-auth";
import { PageTransition } from "@/components/ui/motion";

interface MainLayoutProps {
    children: React.ReactNode;
}



export async function MainLayout({ children }: MainLayoutProps) {
    const session = await getServerSession();

    return (
        <div className="flex min-h-screen flex-col">
            <Header user={session?.user} />
            <main className="flex-1">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
        </div>
    );
}