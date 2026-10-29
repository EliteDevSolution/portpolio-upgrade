import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageMotion } from "@/components/PageMotion";
import "./globals.css";

const description =
  "Baros Akriovs Jiang, Software Engineer. Building reliable, user-focused web & mobile experiences. Reach me at barosjiang@gmail.com";

export const metadata: Metadata = {
  title: {
    default: "Baros Akriovs Jiang's Portfolio",
    template: "%s",
  },
  description,
  openGraph: {
    title: "Baros Akriovs Jiang's Portfolio",
    description,
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('data-theme');if(!t||t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <div className="page-shell">
          <Header />
          <main className="flex-1">
            <PageMotion>{children}</PageMotion>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
