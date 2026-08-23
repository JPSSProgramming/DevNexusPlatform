'use client';

import {useDevNexusStore} from '@/store/useDevNexusStore';
import {FolderTree, Code, ShieldCheck, Settings} from 'lucide-react';

export function Sidebar() {
    const {isSidebarOpen, activeFile, setActiveFile} = useDevNexusStore();

    if (!isSidebarOpen) return null;

    const mockFiles = [
        {name: 'src/index.ts', icon: Code},
        {name: 'src/app/page.tsx', icon: Code},
        {name: 'src/app/api/review/route.ts', icon: ShieldCheck},
    ];

    return (
        <aside className="w-64 border-r bg-card h-[calc(100vh-3.5rem)] p-4 flex flex-col justify-between">
            <div className="space-y-4">
                <div
                    className="flex items-center gap-2 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                    <FolderTree className="h-4 w-4"/>
                    <span>Файли проєкту</span>
                </div>

                <nav className="space-y-1">
                    {mockFiles.map((file) => {
                        const Icon = file.icon;
                        const isActive = activeFile === file.name;

                        return (
                            <button
                                key={file.name}
                                onClick={() => setActiveFile(file.name)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors ${
                                    isActive
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                            >
                                <Icon className="h-4 w-4 shrink-0"/>
                                <span className="truncate">{file.name}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            <div className="border-t pt-3">
                <button
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors">
                    <Settings className="h-4 w-4"/>
                    <span>Налаштування</span>
                </button>
            </div>
        </aside>
    );
}