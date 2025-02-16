import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { PostcardData } from '~/types';

interface PostcardState {
  showPolaroids: boolean;
  letterOpened: boolean;
  postcard: PostcardData;
}

interface PostcardActions {
  openLetter: () => void;
  openPolaroids: () => void;
  setPostcard: (postcard: Partial<PostcardData>) => void;
}

export const usePostcardStore = create<PostcardState & PostcardActions>()(
  subscribeWithSelector(
    immer((set) => ({
      postcard: {
        font: "Montserrat",
        letter: "Happy Valentines Day!",
        music: "",
        name: "For Eri!!",
        polaroids: [],
        story: [],
      },
      letterOpened: false,
      showPolaroids: false,
      openPolaroids: () =>
        set((state) => {
          state.showPolaroids = true;
        }),
      openLetter: () =>
        set((state) => {
          state.letterOpened = true;
        }),
      setPostcard: (postcard) =>
        set((state) => {
          Object.entries(postcard).forEach(([key, value]) => {
            if (value !== null) {
              // @ts-expect-error hard to validate mixed values
              state.postcard[key as keyof PostcardData] = value;
            }
          });
        }),
    })),
  ),
);
