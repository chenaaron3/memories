import { create } from 'zustand';

interface PostcardState {
  showPolaroids: boolean;
  openPolaroids: () => void;
}

export const usePostcardStore = create<PostcardState>()((set) => ({
  showPolaroids: false,
  openPolaroids: () => set(() => ({ showPolaroids: true })),
}));
