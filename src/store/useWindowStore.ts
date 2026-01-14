import { create } from 'zustand';

export interface WindowState {
  id: string;
  title: string;
  icon?: string;
  component: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface WindowStore {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  baseZIndex: number;

  openWindow: (id: string, config: Partial<WindowState>) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, pos: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: {},
  activeWindowId: null,
  baseZIndex: 100,

  openWindow: (id, config) => {
    const { windows, baseZIndex } = get();
    // If already open, just focus/restore
    if (windows[id]) {
      get().restoreWindow(id);
      get().focusWindow(id);
      return;
    }

    const newZ = Object.keys(windows).length + baseZIndex + 1;

    set({
      windows: {
        ...windows,
        [id]: {
          id,
          title: 'New Window',
          component: null,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
          zIndex: newZ,
          position: { x: 50, y: 50 },
          size: { width: 600, height: 400 },
          ...config,
        },
      },
      activeWindowId: id,
    });
  },

  closeWindow: (id) => {
    set((state) => {
      const newWindows = { ...state.windows };
      delete newWindows[id];
      return { windows: newWindows, activeWindowId: null };
    });
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      },
      activeWindowId: null, // Lose focus when minimized?
    }));
  },

  maximizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: true },
      },
      activeWindowId: id,
    }));
  },

  restoreWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: false, isMaximized: false },
      },
      activeWindowId: id,
    }));
  },

  focusWindow: (id) => {
    set((state) => {
      // Find highest zObject to increment
      const maxZ = Math.max(...Object.values(state.windows).map((w) => w.zIndex), state.baseZIndex);

      if (state.activeWindowId === id) return {}; // Already focused

      return {
        windows: {
          ...state.windows,
          [id]: { ...state.windows[id], zIndex: maxZ + 1, isMinimized: false },
        },
        activeWindowId: id,
      };
    });
  },

  updateWindowPosition: (id, pos) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position: pos },
      },
    }));
  },

  updateWindowSize: (id, size) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], size },
      },
    }));
  },
}));
