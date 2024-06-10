import {StackNavigationProp} from "@react-navigation/stack";

export type AppStackParamList = {
    Home: undefined;
    Profile: undefined;
    Login: undefined;
    Register: undefined;
    OTP: undefined;
    CreatePin: undefined;
    ConfirmPin: undefined;

};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
    StackNavigationProp<AppStackParamList, T>;
