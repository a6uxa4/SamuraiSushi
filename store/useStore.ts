import { create } from "zustand";

interface State {
  count: number;
  favorite: number;
  deleteCount: () => void;
  increaseCount: () => void;
}

export const useStore = create<State>((set) => ({
  count: 0,
  favorite: 0,
  increaseCount: () =>
    set((state) => ({ count: state.count + 1, favorite: state.favorite + 10 })),
  deleteCount: () => set((state) => ({ count: 0, favorite: 0 })),
}));
