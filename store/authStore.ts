import create from "zustand";

interface AuthStore {
  userId?: string;
  setUserId: (userId: string) => void;
}

export const authStore = create<AuthStore>((set) => ({
  userId: undefined,
  setUserId: (userId: string) => set({ userId }),
}));
