import { Image, ScrollView, Text, View } from "react-native";
import TitleAndDescription from "../../../../components/TitleAndDescription";
import {
  AppStackNavigationProp,
  AppStackParamList,
} from "../../../../navigation/interface";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

type props = {
  navigation: AppStackNavigationProp<"Home">;
};

const Berita: React.FC<props> = ({ navigation }) => {
  const handleRedirect = (
    navigation: StackNavigationProp<AppStackParamList>
  ) => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        gap: 12,
      }}
    >
      <TitleAndDescription
        title={"Berita MyMRTJ"}
        description={
          "Buat" + " kamu yang ingin tau informasi terbaru tentang MRT"
        }
        redirect={handleRedirect}
        navigation={navigation}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 14,
            borderRadius: 10,
            overflow: "hidden",
            borderColor: "#E5EDF7",
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              display: "flex",
              width: 250,
            }}
          >
            <Image
              source={require("../../../../../assets/menu-mrt/1.png")}
              style={{
                width: "100%",
                height: 125,
                objectFit: "cover",
              }}
            />

            <View
              style={{
                padding: 10,
              }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                Per 25 Mei, Pembangunan Fase 2A CP 201 Capai 77,36 Persen
                aslkdjfslkdfjslkfalkjsa
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Berita;
