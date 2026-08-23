'use client';

import { useDevNexusStore } from '@/store/useDevNexusStore';
import { Button } from '@/components/ui/button';
import { PanelLeft, Code2, Bell, User } from 'lucide-react';

export function Header() {
    const { toggleSidebar } = useDevNexusStore();

    return (
        <header className="h-14 border-b bg-card px-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                    <PanelLeft className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                    <Code2 className="h-6 w-6 text-primary" />
                    <span>DevNexus</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span>Профіль</span>
                </Button>
            </div>
        </header>
    );
}