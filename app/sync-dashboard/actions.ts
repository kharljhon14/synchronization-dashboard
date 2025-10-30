'use server';

import { supabaseServer } from '@/lib/supabase-server';

export async function syncUser(id: number) {
  try {
    // Simulate external API delay
    await new Promise((r) => setTimeout(r, 1500));

    const { data, error } = await supabaseServer
      .from('users')
      .update({ synced_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { success: true, user: data };
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) {
      return { success: false, message: err.message };
    }

    return { success: false, message: 'Something went wrong: sync-dasboard action' };
  }
}
