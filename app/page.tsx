// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 text-center px-4">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">User Synchronization Dashboard</h1>
        <p className="text-slate-600 mb-6">
          A full-stack demo using <span className="font-semibold">Next.js App Router</span>,{' '}
          <span className="font-semibold">Supabase</span>, and{' '}
          <span className="font-semibold">shadcn/ui</span>.
        </p>
        <Link href="/sync-dashboard">
          <Button
            size="lg"
            className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all"
          >
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
