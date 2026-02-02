import { create } from 'zustand';
import type { RegisterUser } from '../types/user';

interface AuthStore {
  user: null | RegisterUser;
  isAuthenticated: boolean;
  setUser: (user: RegisterUser) => void;
  clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user: RegisterUser) => set(() => ({ user, isAuthenticated: true })),
  clearIsAuthenticated: () =>
    set(() => ({ user: null, isAuthenticated: false })),
}));
