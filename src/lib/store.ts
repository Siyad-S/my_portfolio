import { create } from 'zustand';

interface AppState {
    is3DInteracting: boolean;
    set3DInteracting: (value: boolean) => void;
    hoveredProject: number | null;
    setHoveredProject: (id: number | null) => void;
}

export const useStore = create<AppState>((set) => ({
    is3DInteracting: false,
    set3DInteracting: (value) => set({ is3DInteracting: value }),
    hoveredProject: null,
    setHoveredProject: (id) => set({ hoveredProject: id }),
}));
