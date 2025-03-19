import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Shield, Smartphone, Check, Server, Github, Lock } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">KeyHaven</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </a>
            <a href="#platforms" className="text-sm font-medium hover:underline underline-offset-4">
              Platforms
            </a>
            <a href="#hosting" className="text-sm font-medium hover:underline underline-offset-4">
              Hosting Options
            </a>
            <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#download">
              <Button>Get Started</Button>
            </a>
            <a href="https://github.com/melhorzin/keyhaven" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Secure Your Digital Life with <span className="text-primary">KeyHaven</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">The open-source password manager that puts you in control. Available on all your devices, self-hosted or cloud-based.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Download Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </section>

        <section id="features" className="bg-muted/50 py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Security Features</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">KeyHaven combines advanced encryption with ease of use to keep your passwords safe.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-5xl justify-items-center">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all w-full max-w-xs">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground">Your data is encrypted before it leaves your device, ensuring only you can access your passwords.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all w-full max-w-xs">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Self-Hosting Option</h3>
                <p className="text-muted-foreground">Keep complete control of your data by hosting KeyHaven on your own server.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all w-full max-w-xs">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cross-Platform Sync</h3>
                <p className="text-muted-foreground">Access your passwords seamlessly across all your devices with real-time synchronization.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="platforms" className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Available on All Your Devices</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">KeyHaven works wherever you do, with native apps for all major platforms.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto max-w-5xl">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Desktop Applications</h3>
                    <p className="text-muted-foreground">Native apps for Windows, macOS, and Linux.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mobile Apps</h3>
                    <p className="text-muted-foreground">Secure access on iOS and Android devices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Browser Extensions</h3>
                    <p className="text-muted-foreground">Seamless integration with all major browsers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Web Access</h3>
                    <p className="text-muted-foreground">Access your passwords from any device with a web browser.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto w-full max-w-md">
                  <img src="/placeholder.svg?height=400&width=600" alt="KeyHaven on multiple devices" className="rounded-lg shadow-lg" />
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hosting" className="bg-muted/50 py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Hosting Option</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">KeyHaven gives you the freedom to choose how your data is stored.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-5xl justify-items-center">
              <div className="bg-background p-8 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all w-full max-w-md">
                <h3 className="text-2xl font-bold mb-4">Self-Hosted</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Complete control over your data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Run on your own server or NAS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Easy Docker deployment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Open-source and auditable</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm border-primary/20 border-2 hover:-translate-y-1 hover:shadow-md transition-all w-full max-w-md">
                <h3 className="text-2xl font-bold mb-4">Cloud Hosted</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Managed by the melhorzin team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Automatic backups and updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Still end-to-end encrypted</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="download" className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get KeyHaven Today</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">Start securing your passwords with KeyHaven. Download for your platform or try the web version.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-5xl justify-items-center">
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                Windows
              </Button>
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                macOS
              </Button>
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                Linux
              </Button>
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                Android
              </Button>
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                iOS
              </Button>
              <Button variant="outline" className="h-16 text-lg hover:scale-105 transition-transform w-full max-w-xs">
                Web App
              </Button>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">KeyHaven is open-source software. View the source code on GitHub.</p>
              <a href="https://github.com/melhorzin/keyhaven" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted/50 py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About melhorzin</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">We're a group of passionate developers committed to creating secure, open-source solutions.</p>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">KeyHaven was created by the melhorzin team with a simple mission: to provide a secure, user-friendly password manager that respects your privacy and gives you complete control over your data.</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">As advocates for digital privacy and security, we believe that everyone should have access to tools that protect their online presence without compromising on usability or requiring technical expertise.</p>
              <p className="text-muted-foreground leading-relaxed">KeyHaven is and will always remain open-source, allowing the community to verify its security and contribute to its development.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">KeyHaven</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#features" className="text-sm hover:underline underline-offset-4">
                Features
              </a>
              <a href="#platforms" className="text-sm hover:underline underline-offset-4">
                Platforms
              </a>
              <a href="#hosting" className="text-sm hover:underline underline-offset-4">
                Hosting
              </a>
              <a href="#about" className="text-sm hover:underline underline-offset-4">
                About
              </a>
              <a href="#" className="text-sm hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} melhorzin. All rights reserved. KeyHaven is open-source software.</div>
        </div>
      </footer>
    </div>
  );
}
