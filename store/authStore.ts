import create from "zustand";

export interface User {
  id: number;
  username: string;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: null | Date;
  locale: null | Date;
  role: string;
  authProvider: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  setUser: (user: User) => set({user}),
}));
