import { View, Text, ScrollView } from "react-native";
import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import GayaHidup from "./GayaHidup";
import PromoTiketFeeder from "./PromoTiketFeeder";
import PromoGayaHidup from "./PromoGayaHidup";
import Berita from "./Berita";
import { useUserStore } from "../../../zustand-store/user";
import { AppStackNavigationProp } from "../../../navigation/interface";

type Props = {
  navigation: AppStackNavigationProp<"Home">;
};

const HomeNonDyslexic = ({ navigation }: Props) => {
  let { user } = useUserStore();

  return (
    <ScrollView>
      <View
        style={{
          gap: 30,
          backgroundColor: "white",
          paddingBottom: 20,
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

export default HomeNonDyslexic;
