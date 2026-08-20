import { create } from 'zustand';

interface DevNexusState {
    activeFile: string | null;
    isSidebarOpen: boolean;
    setActiveFile: (filePath: string | null) => void;
    toggleSidebar: () => void;
}

export const useDevNexusStore = create<DevNexusState>((set) => ({
    activeFile: 'src/index.ts',
    isSidebarOpen: true,

    setActiveFile: (filePath) => set({ activeFile: filePath }),

    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));