import { View, Text } from "react-native";
import Hero from "./sections/Hero";
import MenuProfil from "./sections/MenuProfil";
import Umum from "./sections/Umum";

const ProfileScreen = () => (
  <View>
    <Hero />
    <View
      style={{
        padding: 20,
        gap: 20,
      }}
    >
      <MenuProfil />
      <Umum />
    </View>
  </View>
);

export default ProfileScreen;
