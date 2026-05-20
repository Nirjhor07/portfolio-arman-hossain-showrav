import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Configure Plus Jakarta Sans for clean, warm, and professional display typography
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Configure Inter for clean, legible body reading copy
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Arman Hossain Showrav | Senior Healthcare Assistant Portfolio",
  description: "Explore the professional healthcare portfolio of Arman Hossain Showrav - a compassionate Senior Healthcare Assistant based in London, UK. Committed to high-quality patient care, safety, and dignity.",
  keywords: "Arman Hossain Showrav, Healthcare Assistant, Senior Healthcare Assistant, London UK care, Patient Care, Metropolitan Care Service, NHS care support, UK Care Assistant portfolio",
  authors: [{ name: "Arman Hossain Showrav" }],
  openGraph: {
    title: "Arman Hossain Showrav | Senior Healthcare Assistant",
    description: "Compassionate and dedicated healthcare professional committed to high-quality patient-centered care, safety, and dignity.",
    url: "https://arman-hossain-showrav.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Hossain Showrav | Senior Healthcare Assistant",
    description: "Compassionate healthcare professional portfolio based in London, UK.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning={true}
    >
      <body 
        className="min-h-full flex flex-col bg-[#050505] text-[#e5e2e1] font-sans"
        suppressHydrationWarning={true}
      >
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full ambient-glow-1 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full ambient-glow-2 blur-[120px] pointer-events-none" />
            
            <div className="flex-1 flex flex-col relative z-10">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
