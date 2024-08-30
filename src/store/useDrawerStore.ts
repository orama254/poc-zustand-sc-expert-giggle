/* eslint-disable @typescript-eslint/no-explicit-any */
import {create} from 'zustand';

interface CardDetail {
  id: number;
  title: string;
  description: string;
  additionalInfo: string;
  [key: string]: any; // Add other fields as necessary
}

interface DrawerState {
  isOpen: boolean;
  selectedCard: CardDetail | null;
  loading: boolean;
  error: string | null;
  openDrawer: (cardId: number) => void;
  closeDrawer: () => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  selectedCard: null,
  loading: false,
  error: null,
  openDrawer: async (cardId: number) => {
    set({ isOpen: true, loading: true, error: null });
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cardId}`);
      const data = await response.json();
      set({ selectedCard: data, loading: false });
    } catch {
      set({ error: 'Failed to fetch card details', loading: false });
    }
  },
  closeDrawer: () => set({ isOpen: false, selectedCard: null }),
}));