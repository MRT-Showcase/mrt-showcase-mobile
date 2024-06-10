import { ScrollView, Text, StyleSheet, View } from "react-native";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import GayaHidup from "./sections/GayaHidup";
import PromoGayaHidup from "./sections/PromoGayaHidup";
import PromoTiketFeeder from "./sections/PromoTiketFeeder";

const HomeScreen = () => (
  <ScrollView>
    <View
      style={{
        gap: 30,
        backgroundColor: "white",
      }}
    >
      <Hero />
      <Menu />
      <GayaHidup />
      <PromoTiketFeeder />
      <PromoGayaHidup />
    </View>
  </ScrollView>
);

export default HomeScreen;
