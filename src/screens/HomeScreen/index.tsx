import { View, Text, StyleSheet } from "react-native";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import GayaHidup from "./sections/GayaHidup";
import PromoGayaHidup from "./sections/PromoGayaHidup";
import PromoTiketFeeder from "./sections/PromoTiketFeeder";

const HomeScreen = () => (
  <View
    style={{
      gap: 30,
    }}
  >
    <Hero />
    <Menu />
    <GayaHidup />
    <PromoTiketFeeder />
    <PromoGayaHidup />
  </View>
);

export default HomeScreen;
