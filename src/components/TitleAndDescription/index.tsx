import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
};

const TitleAndDescription: React.FC<Props> = ({ title, description }) => (
  <View
    style={{
      gap: 8,
    }}
  >
    <Text
      style={{
        fontSize: 12,
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        fontSize: 10,
      }}
    >
      {description}
    </Text>
  </View>
);

export default TitleAndDescription;
