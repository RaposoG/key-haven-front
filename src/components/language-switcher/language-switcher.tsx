import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, languages } from "@/context/language-context";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "header" | "sidebar";
  className?: string;
}

export function LanguageSwitcher({ variant = "header", className }: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isSidebar = variant === "sidebar";

  const buttonStyles = cn("relative h-9 w-9 rounded-full bg-background/10 backdrop-blur-sm border-0", "hover:bg-background/20 transition-all duration-300", isSidebar && "h-full w-full justify-start gap-3 rounded-lg px-3 py-2 text-left", className);

  const hoverAnimation = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover="hover" whileTap="tap" variants={hoverAnimation}>
          <Button variant="ghost" size="icon" className={buttonStyles} aria-label="Select language">
            {isSidebar ? (
              <>
                <Globe className="h-4 w-4" />
                <span className="font-medium">{currentLanguage.name}</span>
              </>
            ) : (
              <Globe className="h-4 w-4" />
            )}
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] mt-2 bg-background/80 backdrop-blur-lg border border-border/50 rounded-xl shadow-lg p-1">
        {languages.map((language, i) => (
          <motion.div key={language.code} custom={i} initial="hidden" animate={isOpen ? "visible" : "hidden"} variants={itemVariants}>
            <DropdownMenuItem className={cn("flex items-center gap-2 rounded-lg px-3 py-2 cursor-pointer", "hover:bg-accent/80 transition-colors duration-300", currentLanguage.code === language.code && "bg-accent/50")} onClick={() => setLanguage(language)}>
              <span className="text-base mr-2">{language.flag}</span>
              <span className="flex-1 font-medium">{language.name}</span>
              {currentLanguage.code === language.code && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          </motion.div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
