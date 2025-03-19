import { SignUpForm } from "@/components/form/sign-up-form";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {

  return (
    <div className="relative min-h-svh flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <SignUpForm />
    </div>

    <div className="absolute bottom-4 right-4">
      <LanguageSwitcher variant="header" />
    </div>
  </div>
  );
}
