import { View, Text, ScrollView } from "react-native";
import Hero from "./sections/Hero";
import MenuProfil from "./sections/MenuProfil";
import Umum from "./sections/Umum";

const ProfileScreen = () => (
  <ScrollView>
    <View
      style={{
        backgroundColor: "white",
      }}
    >
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
  </ScrollView>
);

export default ProfileScreen;
