'use client';

import { useTransition } from 'react';
import { syncUser } from '@/app/sync-dashboard/actions';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

type User = {
  id: number;
  name: string;
  email: string;
  synced_at: string | null;
};

export default function UserRow({
  user,
  onSynced
}: {
  user: User;
  onSynced: (updated: User) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const isSynced = !!user.synced_at;

  const handleSync = async () => {
    startTransition(async () => {
      const res = await syncUser(user.id);
      if (res.success && res.user) onSynced(res.user);
      else alert(res.message || 'Failed to sync user');
    });
  };

  return (
    <tr className="border-b">
      <td className="py-3 px-4">{user.name}</td>
      <td className="py-3 px-4">{user.email}</td>
      <td className="py-3 px-4">
        {isPending ? (
          <Skeleton className="w-24 h-4" />
        ) : isSynced ? (
          <span className="text-green-600">
            Synced at {new Date(user.synced_at!).toLocaleString()}
          </span>
        ) : (
          <span className="text-gray-500">Not synced</span>
        )}
      </td>
      <td className="py-3 px-4 text-right">
        {!isSynced && (
          <Button
            onClick={handleSync}
            disabled={isPending}
          >
            {isPending ? 'Syncing...' : 'Sync Data'}
          </Button>
        )}
      </td>
    </tr>
  );
}
