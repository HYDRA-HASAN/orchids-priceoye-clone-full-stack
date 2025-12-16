import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { AuthProvider } from '@/lib/auth-context';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="9ca3df42-fbd7-4e8d-9d55-305933189c05"
        />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}