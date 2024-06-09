import { StackNavigationProp } from "@react-navigation/stack";

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  OTP: undefined;
};

export type AppStackNavigationProp<T extends keyof AppStackParamList> =
  StackNavigationProp<AppStackParamList, T>;
