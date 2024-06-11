import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserStackParamList } from "./interface";
import HomeScreen from "../screens/HomeScreen";
import TiketScreen from "../screens/TiketScreen";
import BantuanScreen from "../screens/BantuanScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import { Image } from "react-native";

const Tab = createBottomTabNavigator<UserStackParamList>();

const UserStackNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{
            backgroundColor: "white",
            borderTopColor: "#B6B697",
            borderTopWidth: 0.5,
          }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }): string | undefined => {
            const { options } = descriptors[route.key];
            const label = options.title ?? "";

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/home-focused.png")}
                />
              );
            } else {
              return (
                <Image source={require("../../assets/bottom-tabs/home.png")} />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Tiket"
        component={TiketScreen}
        options={{
          title: "Tiket",
          headerShown: false,
          tabBarLabel: "Tiket",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/tiket-focused.png")}
                />
              );
            } else {
              return (
                <Image source={require("../../assets/bottom-tabs/tiket.png")} />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Bantuan"
        component={BantuanScreen}
        options={{
          title: "Bantuan",
          headerShown: false,
          tabBarLabel: "Bantuan",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/bantuan-focused.png")}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/bantuan.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/profile-focused.png")}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/bottom-tabs/profile.png")}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default UserStackNavigator;
