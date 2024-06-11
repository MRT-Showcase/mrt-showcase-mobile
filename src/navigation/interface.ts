import {StackNavigationProp} from "@react-navigation/stack";

export type AppStackParamList = {
    Login: undefined;
    Register: undefined;
    OTP: undefined;
    CreatePin: undefined;
    ConfirmPin: undefined;
    UserTab: undefined;
    Home: undefined;
    Berita: undefined;
};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
    StackNavigationProp<AppStackParamList, T>;

export type UserStackParamList = {
    Home: undefined;
    Profile: undefined;
    Tiket: undefined;
    Bantuan: undefined;
};
