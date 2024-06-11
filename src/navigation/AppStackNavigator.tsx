import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {AppStackParamList} from "./interface";
import SignIn from "../screens/SignIn";
import Register from "../screens/SignUp";
import OTPScreen from "../screens/OTPScreen";
import {CreatePin} from "../screens/CreatePin";
import {ConfirmPin} from "../screens/ConfirmPin";
import UserStackNavigator from "./UserStackNavigator";

const Stack = createNativeStackNavigator<AppStackParamList>(); // TODO: generic

const AppStackNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={SignIn}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="UserTab"
            component={UserStackNavigator}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="OTP"
            component={OTPScreen}
            options={{
                headerShadowVisible: false,
                title: "",
            }}
        />

        <Stack.Screen
            name="CreatePin"
            component={CreatePin}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="ConfirmPin"
            component={ConfirmPin}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

export default AppStackNavigator;
