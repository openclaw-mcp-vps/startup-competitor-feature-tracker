import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompetitorWatch — Track When Competitors Ship New Features",
  description: "Automated monitoring of competitor websites. Get instant alerts with screenshots and AI-powered descriptions when competitors ship new features."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e331673-4c41-4415-bae6-a0994b8467bf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
