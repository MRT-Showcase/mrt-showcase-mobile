import { View, Text } from "react-native";
import { Item } from "../../../components/ProfileItem/interface";
import ProfileItem from "../../../components/ProfileItem";
import { Divider } from "react-native-paper";

const Umum = () => {
  const items: Item[] = [
    {
      icon: require("../../../../assets/user-1.png"),
      title: "Akun",
      description: "Ubah data akun kamu",
    },
    {
      icon: require("../../../../assets/history-1.png"),
      title: "Pembayaran",
      description: "Atur pembayaran yang kamu koneksikan",
    },
    {
      icon: require("../../../../assets/wallet-1.png"),
      title: "Riwayat Aktivitas",
      description: "Riwayat tikey yang sudah lampau",
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
