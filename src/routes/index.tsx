import { SignInForm } from "@/components/form/sign-in-form";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/app/dashboard",
      });
    }
  }
});

function RouteComponent() {
  return (
    <div className="relative min-h-svh w-screen h-screen flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignInForm />
      </div>

      <div className="absolute bottom-4 right-4">
        <LanguageSwitcher variant="header" />
      </div>
    </div>
  );
}
