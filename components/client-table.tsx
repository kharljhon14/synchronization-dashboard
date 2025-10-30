'use client';

import { useState } from 'react';
import UserRow from './user-row';
import { Button } from '@/components/ui/button';

export default function ClientTable({ initialUsers }: { initialUsers: any[] }) {
  const [users, setUsers] = useState(initialUsers);

  function handleUserSynced(updated: any) {
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  }

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b bg-muted/50">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <UserRow
                key={u.id}
                user={u}
                onSynced={handleUserSynced}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {users.map((user) => {
          const isSynced = !!user.synced_at;
          return (
            <div
              key={user.id}
              className="border border-border rounded-lg p-4 shadow-sm flex flex-col space-y-2"
            >
              <div className="font-medium text-lg">{user.name}</div>
              <div className="text-sm text-muted-foreground truncate">{user.email}</div>
              <div>
                Status:{' '}
                {isSynced ? (
                  <span className="text-green-600 font-medium">
                    Synced at {new Date(user.synced_at).toLocaleString()}
                  </span>
                ) : (
                  <span className="text-gray-500 font-medium">Not synced</span>
                )}
              </div>
              {!isSynced && (
                <Button
                  size="sm"
                  onClick={() => handleUserSynced({ ...user, synced_at: new Date().toISOString() })}
                >
                  Sync Data
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
