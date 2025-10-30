import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'User Sync Dashboard',
  description: 'Sync demo using Next.js App Router + Supabase + shadcn/ui'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-background text-foreground min-h-screen')}>{children}</body>
    </html>
  );
}
