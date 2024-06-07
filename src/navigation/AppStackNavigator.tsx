import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppStackParamList } from "./interface";

const Stack = createNativeStackNavigator<AppStackParamList>(); // TODO: generic

const AppStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "Profile" }}
    />
  </Stack.Navigator>
);

export default AppStackNavigator;
