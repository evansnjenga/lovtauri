import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStore {
  showTray: boolean;
  setShowTray: (show: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      showTray: true,
      setShowTray: (show) => set({ showTray: show }),
    }),
    {
      name: "settings-storage",
    }
  )
);
