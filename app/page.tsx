import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">User Synchronization Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Manage and synchronize user data between Supabase and an external system.
          </p>
          <Link href="/sync-dashboard">
            <Button
              size="lg"
              className="w-full"
            >
              Go to Sync Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
