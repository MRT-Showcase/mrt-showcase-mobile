import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  isDyslexic?: boolean;
};

const MenuItem: React.FC<Props> = ({ title, isDyslexic = false }) => (
  <View
    style={{
      alignItems: "center",
      gap: 2,
    }}
  >
    <View
      style={{
        backgroundColor: "red",
        width: isDyslexic ? 112 : 79,
        height: isDyslexic ? 134 : 80,
      }}
    ></View>
    <Text
      style={{
        fontSize: isDyslexic ? 18 : 9,
      }}
    >
      {title}
    </Text>
  </View>
);

export default MenuItem;
