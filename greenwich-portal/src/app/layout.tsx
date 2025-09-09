import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Greenwich Academic Portal',
  description: 'FPT Greenwich University Academic Management System',
  keywords: 'Greenwich, FPT, university, academic, portal, student, management',
  authors: [{ name: 'Greenwich Development Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'bg-card text-card-foreground border border-border',
              duration: 4000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}