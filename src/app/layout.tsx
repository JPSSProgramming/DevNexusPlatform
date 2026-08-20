import type {Metadata} from 'next';
import './globals.css';
import QueryProvider from '@/providers/query-provider';

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
        <body className="antialiased bg-background text-foreground">
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}