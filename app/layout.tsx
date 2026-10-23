import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Khachonyod Komin | Portfolio',
    template: '%s | Khachonyod Komin',
  },
  description:
    'Portfolio ของ Khachonyod Komin — นักศึกษาสาย Full-Stack Developer จาก UTCC ที่สนใจ AI, Web Development และ Computer Vision',
  keywords: [
    'Portfolio',
    'Full-Stack Developer',
    'Next.js',
    'NestJS',
    'React',
    'TypeScript',
    'UTCC',
  ],
  authors: [{ name: 'Khachonyod Komin' }],
  openGraph: {
    title: 'Khachonyod Komin | Portfolio',
    description:
      'Portfolio ของ Khachonyod Komin — นักศึกษาสาย Full-Stack Developer จาก UTCC',
    type: 'website',
    locale: 'th_TH',
    siteName: 'Khachonyod Portfolio',
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-20 antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
