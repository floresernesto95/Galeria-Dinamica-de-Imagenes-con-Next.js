import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from './NavBar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SSRProvider>
          <NavBar />

          <main>
            <Container className='py-4'>
              {children}
            </Container>
          </main>

        </SSRProvider>
      </body>
    </html>
  );
}
