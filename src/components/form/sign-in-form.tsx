import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import React from "react";

export function SignInForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // alert(event.currentTarget.email.value);
  }

  const { t } = useTranslation("auth");

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">KeyHaven</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("labels.email")}</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">{t("labels.password")}</Label>
                    <Link to="/" className="ml-auto text-sm underline-offset-4 hover:underline">
                      {t("labels.forgot_password")}
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  {t("labels.login")}
                </Button>
              </div>

              <div className="text-center text-sm">
                {t("labels.no_account")}{" "}
                <Link to="/sign-up" className="underline underline-offset-4">
                  {t("labels.register")}
                </Link>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">{t("labels.or_continue_with")}</span>
              </div>

              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" type="button">
                  <img src="/github.svg" alt="icon do github" className="h-8 w-8" />
                  {t("labels.github")}
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  <img src="/google.svg" alt="icon do google" className="h-8 w-8" />
                  {t("labels.google")}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        {t("labels.terms_advice")} <Link to="/">{t("labels.terms")}</Link> {t("and")} <Link to="/">{t("labels.privacy")}</Link>.
      </div>
    </div>
  );
}
