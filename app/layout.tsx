import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Arvizu Portfolio",
  description: "Frontend Developer",
};

type RootLayoutProps = {
  children: React.ReactNode | null | undefined;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
