import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";
import { SlideIn, FadeIn } from "@/components/ui/motion";
import Link from "next/link";

export default function HomePage() {
  return (
      <MainLayout>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <SlideIn direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Next.js Template
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A comprehensive Next.js template with all the modern
                    technologies for building scalable web applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/docs">
                    <Button size="lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="https://github.com/yourusername/nextjs-template">
                    <Button variant="outline" size="lg">
                      GitHub
                    </Button>
                  </Link>
                </div>
              </SlideIn>
              <FadeIn delay={0.2} className="flex justify-center">
                <div className="rounded-lg border bg-card p-8 shadow-sm">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Packed with powerful technologies
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">NextAuth</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                          <path d="M4 14h16v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">Prisma</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="M12 2H2v10h10V2z" />
                          <path d="M12 12v10h10V12H12z" />
                          <path d="M22 2h-6v6h6V2z" />
                          <path d="M8 16H2v6h6v-6z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">Tailwind</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">Docker</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                          <path d="M8 16h.01" />
                          <path d="M8 20h.01" />
                          <path d="M12 18h.01" />
                          <path d="M12 22h.01" />
                          <path d="M16 16h.01" />
                          <path d="M16 20h.01" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">Redis</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
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
                            className="h-5 w-5 text-primary"
                        >
                          <path d="m13 2-2 2.5-2-2.5" />
                          <path d="M8 4H6a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2H5" />
                          <path d="M17 6h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3h-1a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2h5" />
                          <path d="m13 22 2-2.5 2 2.5" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium">Stripe</h4>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/features">
                      <Button variant="link">View All Features</Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </MainLayout>
  );
}