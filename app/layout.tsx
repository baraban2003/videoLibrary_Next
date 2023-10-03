import { TheHeader } from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import { TheFooter } from '@/components/TheFooter';

export const metadata: Metadata = {
  title: 'Video Library',
  description: 'Create next js app for learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main className="container">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
