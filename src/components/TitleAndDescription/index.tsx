import React from "react";
import { Image, Text, View } from "react-native";
import {
  AppStackNavigationProp,
  AppStackParamList,
} from "../../navigation/interface";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  title: string;
  description: string;
  redirect?: (
    navigation: StackNavigationProp<AppStackParamList, "Home">
  ) => void;
  navigation?: AppStackNavigationProp<"Home">;
  isDyslexic?: boolean;
};

const TitleAndDescription: React.FC<Props> = ({
  title,
  description,
  redirect,
  navigation,
  isDyslexic = false,
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View
      style={{
        gap: 8,
        flexShrink: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: isDyslexic ? 22 : 12,
            fontWeight: "bold",
            color: isDyslexic ? "#203474" : "black",
          }}
        >
          {title}
        </Text>

        {!isDyslexic && redirect && navigation && (
          <Text
            onPress={() => redirect(navigation)}
            style={{
              color: "#0055B8",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            Lihat Semua
          </Text>
        )}
      </View>
      <Text
        style={{
          fontSize: isDyslexic ? 18 : 10,
          color: isDyslexic ? "#203474" : "black",
        }}
      >
        {description}
      </Text>
    </View>
    {isDyslexic && (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#46B54C",
          borderRadius: 10,
          width: 37,
          height: 37,
        }}
      >
        <Image source={require("../../../assets/right-arrow.png")} />
      </View>
    )}
  </View>
);

export default TitleAndDescription;
