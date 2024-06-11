import { View, Text } from "react-native";
import Hero from "./sections/Hero";
import MenuProfil from "./sections/MenuProfil";
import Umum from "./sections/Umum";

const ProfileScreen = () => (
  <View>
    <Hero />
    <MenuProfil />
    <Umum />
  </View>
);

export default ProfileScreen;
