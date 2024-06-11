import { ScrollView, View } from "react-native";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import GayaHidup from "./sections/GayaHidup";
import PromoGayaHidup from "./sections/PromoGayaHidup";
import PromoTiketFeeder from "./sections/PromoTiketFeeder";
import { useUserStore } from "../../zustand-store/user";
import React from "react";
import Berita from "./sections/Berita";
import { AppStackNavigationProp } from "../../navigation/interface";
import HomeDyslexic from "./sections/HomeDyslexic";
import HomeNonDyslexic from "./sections/HomeNonDyslexic";

type Props = {
  navigation: AppStackNavigationProp<"Home">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const isDyslexic = true;
  if (isDyslexic) {
    return <HomeDyslexic navigation={navigation} />;
  } else {
    return <HomeNonDyslexic navigation={navigation} />;
  }
};

export default HomeScreen;
