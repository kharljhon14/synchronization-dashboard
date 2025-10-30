'use client';

import { useState } from 'react';
import UserRow from './user-row';

export default function ClientTable({ initialUsers }: { initialUsers: any[] }) {
  const [users, setUsers] = useState(initialUsers);

  function handleUserSynced(updated: any) {
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  }

  return (
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
  );
}
