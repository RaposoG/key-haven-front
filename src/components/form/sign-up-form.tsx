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
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import { handleAuth } from "@/hooks/auth/handleAuth";
import { RegisterData } from "@/core/interfaces/auth.interface";
import { Eye, EyeOff } from "lucide-react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
    
  const { handleRegister, loading, error } = handleAuth();

  useEffect(() => {
    if (password && passwordConfirmation) {
      setPasswordMatch(password === passwordConfirmation);
    }
  }, [password, passwordConfirmation]);

  const isFormValid =
    name && email && password && passwordConfirmation && passwordMatch;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data: RegisterData = { name, email, password, passwordConfirmation };
    await handleRegister(data);
  };

  const { t } = useTranslation("auth");

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t("labels.create")}</CardTitle>
          <CardDescription>{t("labels.call_to_action")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t("labels.sign-up.name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="example more"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("labels.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    {t("labels.password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setIsPasswordTouched(true);
                      }}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-muted-foreground" />
                      ) : (
                        <Eye size={18} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-sm font-medium"
                  >
                    {t("labels.sign-up.confirm_password")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showPasswordConfirmation ? "text" : "password"}
                      required
                      value={passwordConfirmation}
                      onChange={(e) => {
                        setPasswordConfirmation(e.target.value);
                        setIsPasswordTouched(true);
                      }}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                      onClick={() =>
                        setShowPasswordConfirmation(!showPasswordConfirmation)
                      }
                      aria-label={
                        showPasswordConfirmation
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPasswordConfirmation ? (
                        <EyeOff size={18} className="text-muted-foreground" />
                      ) : (
                        <Eye size={18} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  {isPasswordTouched && !passwordMatch && (
                    <div className="text-red-500">
                      {t("labels.sign-up.mismatch")}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading || !isFormValid}
                >
                  {loading ? t("labels.loading") : t("labels.register")}
                </Button>
              </div>

              {error && <div className="text-red-500 text-center">{error}</div>}

              <div className="text-center text-sm">
                {t("labels.sign-up.already_have_account")}{" "}
                <Link to="/" className="underline underline-offset-4">
                  {t("labels.sign-up.signin")}
                </Link>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2 text-muted-foreground">
                  {t("labels.or_continue_with")}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" type="button">
                  <img
                    src="/github.svg"
                    alt="GitHub icon"
                    className="h-8 w-8"
                  />
                  {t("labels.sign-up.github")}
                </Button>
                <Button variant="outline" className="w-full" type="button">
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
        <Link to="/">{t("labels.terms")}</Link> {t("common.and")}{" "}
        <Link to="/">{t("labels.privacy")}</Link>.
      </div>
    </div>
  );
}
