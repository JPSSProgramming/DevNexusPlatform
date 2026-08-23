import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/providers/query-provider';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export const metadata: Metadata = {
    title: 'DevNexusPlatform | AI Code Review',
    description: 'AI-Assisted Open Source Hub & Peer Code Review Platform',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
        <body className="antialiased bg-background text-foreground min-h-screen">
        <QueryProvider>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </QueryProvider>
        </body>
        </html>
    );
}