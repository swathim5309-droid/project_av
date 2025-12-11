import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import Image from 'next/image';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between px-4 lg:px-6">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-semibold">ThreatWatch AV</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Real-Time Threat Detection for Autonomous Vehicles
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ThreatWatch AV provides a comprehensive suite of tools to
                    monitor, detect, and analyze security threats for autonomous
                    vehicle fleets.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dashboard">View Demo</Link>
                  </Button>
                </div>
              </div>
               <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fHwxNzE3MjEwODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                data-ai-hint="futuristic car interface"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-6">
        <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ThreatWatch AV. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
