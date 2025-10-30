import { supabaseServer } from '@/lib/supabase-server';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import ClientTable from '@/components/client-table';

export default async function SyncDashboard() {
  const { data: users } = await supabaseServer.from('users').select('*').order('id');

  return (
    <main className="min-h-screen bg-muted/40 p-8 flex justify-center">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">User Sync Dashboard</CardTitle>
          <p className="text-sm text-muted-foreground">
            Sync user records to an external system (demo only)
          </p>
        </CardHeader>
        <CardContent>
          <ClientTable initialUsers={users || []} />
        </CardContent>
      </Card>
    </main>
  );
}
