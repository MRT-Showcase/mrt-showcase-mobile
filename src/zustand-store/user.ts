import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./type/user";

interface UserState {
  user: User | null;
  phoneNumber: string | null;
  isDyslexic: boolean;
  isModeSuara: boolean;
  setUser: (user: User) => void;
  deleteUser: () => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setIsDyslexic: (value: boolean) => void;
  setIsModeSuara: (value: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      phoneNumber: null,
      isDyslexic: false,
      isModeSuara: false,
      setUser: (user) => set({ user }),
      deleteUser: () => set({ user: null }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      setIsDyslexic: (value) => set({ isDyslexic: value }),
      setIsModeSuara: (value) => set({ isModeSuara: value }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
