import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Python Nova — Apprendre Python avec l'IA",
  description: "Un laboratoire Python interactif : écris, exécute, comprends et progresse.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
