import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MonGrandBloc from "@/components/MonGrandBloc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { ModuleActifProvider } from "@/components/Provider/ModuleActifProvider";
import { TitreModuleProvider } from "@/components/Provider/TitreModuleProvider";
import { InstalledDateProvider } from "@/components/Provider/InstalledDateProvider";
import { ThemeColorProvider } from "@/components/Provider/ThemeColorProvider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programmation web avancé",
  description:
    "Site web présentant différentes fonctionnalités de React et Next.js",
  openGraph: {
    title: "Programmation web avancé",
    description:
      "Site web présentant différentes fonctionnalités de React et Next.js",
    images: [
      "https://sedricouambo.github.io/programmation_web_avance/react.png",
    ],
  },
  manifest: "./manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + " " + styles.body}>
        <ModuleActifProvider>
          <TitreModuleProvider>
            <InstalledDateProvider>
              <ThemeProvider>
                <ThemeColorProvider>
                  <Header />
                  <MonGrandBloc />
                  <main className={styles.main}>
                    <section className={styles.section_main}>
                      <div className={styles.children}>{children}</div>
                    </section>
                  </main>
                  <Footer />
                </ThemeColorProvider>
              </ThemeProvider>
            </InstalledDateProvider>
          </TitreModuleProvider>
        </ModuleActifProvider>
      </body>
    </html>
  );
}
