"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./components/locale-switcher";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="header">
        <h1>{t("title")}</h1>
        <LocaleSwitcher />
      </div>
      <p>{t("content")}</p>
      <Link href="/about">About</Link>
    </div>
  );
}
