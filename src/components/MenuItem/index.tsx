import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
};

const MenuItem: React.FC<Props> = ({ title }) => (
  <View
    style={{
      alignItems: "center",
      gap: 2,
    }}
  >
    <View
      style={{
        backgroundColor: "red",
        width: 79,
        height: 80,
      }}
    ></View>
    <Text
      style={{
        fontSize: 9,
      }}
    >
      {title}
    </Text>
  </View>
);

export default MenuItem;
