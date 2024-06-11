import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useUserStore } from "../../../zustand-store/user";
import Hero from "./dyslexic/Hero";
import Menu from "./dyslexic/Menu";
import GayaHidup from "./dyslexic/GayaHidup";
import PromoTiketFeeder from "./dyslexic/PromoTiketFeeder";
import PromoGayaHidup from "./dyslexic/PromoGayaHidup";
import Berita from "./dyslexic/Berita";
import { AppStackNavigationProp } from "../../../navigation/interface";

type Props = {
  navigation: AppStackNavigationProp<"Home">;
};

const HomeDyslexic = ({ navigation }: Props) => {
  const { user } = useUserStore();

  return (
    <ScrollView>
      <View
        style={{
          gap: 14,
          backgroundColor: "white",
        }}
      >
        <Hero name={user?.fullName} />
        <Menu />
        <GayaHidup />
        <PromoTiketFeeder />
        <PromoGayaHidup />
        <Berita navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default HomeDyslexic;
