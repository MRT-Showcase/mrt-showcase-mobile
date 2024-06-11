import { View, Text, ScrollView } from "react-native";
import Hero from "./sections/Hero";
import MenuProfil from "./sections/MenuProfil";
import Umum from "./sections/Umum";
import { Button } from "react-native-paper";
import { useUserStore } from "../../zustand-store/user";

const ProfileScreen = () => {
  const deleteUser = useUserStore((state) => state.deleteUser);

  return (
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
          <Button
            style={{
              backgroundColor: "#FAE5EA",
              borderRadius: 10,
            }}
            onPress={() => deleteUser()}
          >
            <Text
              style={{
                color: "#DD0000",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Keluar
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
