import {UserRegister} from "./type/register";
import {create} from "zustand";

interface RegisterState {
    registerUser: UserRegister | undefined;
    setRegisterUser: (user: UserRegister) => void;
    resetRegisterUser: () => void;
    setRegisterUserPin: (pin: string) => void;
}

export const useRegisterStore = create<RegisterState>()((set, get) => ({
    registerUser: undefined,
    setRegisterUser: (user) => set({registerUser: user}),
    resetRegisterUser: () => set({registerUser: undefined}),
    setRegisterUserPin: (pin) => {
        let currentRegisterUser = get().registerUser;
        if (currentRegisterUser) {
            set({
                registerUser: {...currentRegisterUser, pin},
            });
        }
    },
}));
