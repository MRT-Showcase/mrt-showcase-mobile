import { View, Text } from "react-native";
import { Item } from "../../../components/ProfileItem/interface";
import ProfileItem from "../../../components/ProfileItem";
import { Divider } from "react-native-paper";

const Umum = () => {
  const items: Item[] = [
    {
      icon: require("../../../../assets/language-1.png"),
      title: "Bahasa",
      description: "Pilih Bahasa / Choose Language",
    },
    {
      icon: require("../../../../assets/dyslexia-1.png"),
      title: "Mode Dyslexia",
      description: "Mode ini menyederhanakan tampilan aplikasi",
    },
    {
      icon: require("../../../../assets/scroll-1.png"),
      title: "Syarat dan Ketentuan",
    },
    {
      icon: require("../../../../assets/padlock-1.png"),
      title: "Kebijakan Privasi",
    },
    {
      icon: require("../../../../assets/smartphone-1.png"),
      title: "Versi Aplikasi",
      description: "4.2.1",
    },
  ];

  return (
    <View
      style={{
        gap: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
        }}
      >
        Menu Profil
      </Text>

      <View
        style={{
          gap: 13,
        }}
      >
        {items.map(({ title, icon, description }, index) => (
          <>
            <ProfileItem
              icon={icon}
              title={title}
              description={description}
              key={index}
            />
            {index !== items.length - 1 && <Divider />}
          </>
        ))}
      </View>
    </View>
  );
};

export default Umum;
