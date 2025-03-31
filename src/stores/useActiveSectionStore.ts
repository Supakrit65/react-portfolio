import { create } from "zustand";

interface ActiveSectionState {
  activeSection: string;
  timeOfLastClick: number;
  setActiveSection: (section: string) => void;
  setTimeOfLastClick: (time: number) => void;
}

export const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (section: string) => set({ activeSection: section }),
  setTimeOfLastClick: (time: number) => set({ timeOfLastClick: time }),
}));