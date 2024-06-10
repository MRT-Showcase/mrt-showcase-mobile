import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from './type/user';

interface UserState {
    user: User | null;
    phoneNumber: string | null;
    setUser: (user: User) => void;
    deleteUser: () => void;
    setPhoneNumber: (phoneNumber: string) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            phoneNumber: null,
            setUser: (user) => set({user}),
            deleteUser: () => set({user: null}),
            setPhoneNumber: (phoneNumber) => set({phoneNumber}),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
