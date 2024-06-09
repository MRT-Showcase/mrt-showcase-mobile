import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppStackParamList } from "./interface";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import OTPScreen from "../screens/OTPScreen";

const Stack = createNativeStackNavigator<AppStackParamList>(); // TODO: generic

const AppStackNavigator = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
    />
    <Stack.Screen
      name="OTP"
      component={OTPScreen}
      options={{
        headerShadowVisible: false,
        title: "",
      }}
    />
  </Stack.Navigator>
);

export default AppStackNavigator;
