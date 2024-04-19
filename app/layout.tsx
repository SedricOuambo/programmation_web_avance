import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MonGrandBloc from "@/components/MonGrandBloc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './page.module.css';
import { ModuleActifProvider } from "@/components/Provider/ModuleActifProvider";
import { TitreModuleProvider } from "@/components/Provider/TitreModuleProvider";
import { MenuActifProvider } from '@/components/Provider/MenuActifProvider';
import { InstalledDateProvider } from '@/components/Provider/InstalledDateProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Accueil | Web Avancée',
  description: 'Un site web présentant différentes fonctionnalités de React et Next.js',
  openGraph: {
    title: 'Accueil | Web Avancée',
    description: 'Un site web présentant différentes fonctionnalités de React et Next.js',
    images: ['/react.png']
  },
  manifest: './manifest.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + ' ' + styles.body}>
        <ModuleActifProvider>
          <TitreModuleProvider>
            <MenuActifProvider>
              <InstalledDateProvider>
                <Header />
                <main className={styles.main}>
                  <section className={styles.section_main}>
                    <MonGrandBloc />
                    <div className={styles.children}>
                      {children}
                    </div>
                  </section>
                </main>
                <Footer />
              </InstalledDateProvider>
            </MenuActifProvider>
          </TitreModuleProvider>
        </ModuleActifProvider>
      </body>
    </html>
  );
}
