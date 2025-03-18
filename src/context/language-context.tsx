import { createContext, useState, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );
  const { i18n } = useTranslation();

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("preferredLanguage", language.code);
    i18n.changeLanguage(language.code);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
