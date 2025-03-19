import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Process sign up data here
  }

  const { t } = useTranslation("auth");

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t('labels.create')}</CardTitle>
          <CardDescription>
            {t('labels.call_to_action')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("labels.sign-up.name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="example more"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("labels.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">{t("labels.password")}</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">
                    {t("labels.sign-up.confirm_password")}
                  </Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  {t("labels.register")}
                </Button>
              </div>

              <div className="text-center text-sm">
                {t("labels.sign-up.already_have_account")}{" "}
                <Link to="/sign-in" className="underline underline-offset-4">
                  {t("labels.sign-up.signin")}
                </Link>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                  {t("labels.or_continue_with")}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <img
                    src="/github.svg"
                    alt="GitHub icon"
                    className="h-8 w-8"
                  />
                  {t("labels.sign-up.github")}
                </Button>
                <Button variant="outline" className="w-full">
                  <img
                    src="/google.svg"
                    alt="Google icon"
                    className="h-8 w-8"
                  />
                  {t("labels.sign-up.google")}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        {t("labels.sign-up.signup_advice")}{" "}
        <Link to="/">{t("labels.terms")}</Link> {t('common.and')}{" "}
        <Link to="/">{t("labels.privacy")}</Link>.
      </div>
    </div>
  );
}
