import { create } from 'zustand';

export type OSType = 'win7' | 'macos';

interface OSState {
  currentOS: OSType | null; // null means boot screen / selection
  booted: boolean;
  setOS: (os: OSType) => void;
  setBooted: (booted: boolean) => void;
  reboot: () => void;
}

export const useOSStore = create<OSState>((set) => ({
  currentOS: null,
  booted: false,
  setOS: (os) => set({ currentOS: os }),
  setBooted: (booted) => set({ booted }),
  reboot: () => set({ booted: false, currentOS: null }),
}));
