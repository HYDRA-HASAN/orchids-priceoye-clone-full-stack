'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestSupabasePage() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from('products').select('*');
      console.log('DATA:', data);
      console.log('ERROR:', error);
    };
    testConnection();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Supabase Sanity Test</h1>
      <p>Open your browser console to see the results.</p>
    </div>
  );
}
