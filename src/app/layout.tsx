// src/app/layout.tsx
import '@/styles/custom-bootstrap.scss';  // Keep this as the first import
import '@/styles/custom-bootstrap.scss';
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
  title: "Galería Dinámica de Imágenes",
  description: "Galería dinámica de imágenes moderna construida con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100">
      <body className={`${geistSans.variable} ${geistMono.variable} d-flex flex-column h-100`}>
        <SSRProvider>
          <NavBar />
          <main className="flex-shrink-0">
            <Container className="py-5">
              {children}
            </Container>
          </main>
          <footer className="footer mt-auto py-3 bg-light">
            <Container>
              <div className="text-center text-muted">
                <p className="mb-0">© 2025 Galería Dinámica de Imágenes. Todos los derechos reservados.</p>
              </div>
            </Container>
          </footer>
        </SSRProvider>
      </body>
    </html>
  );
}