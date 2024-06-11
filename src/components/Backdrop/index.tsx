import { View, Text, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Backdrop = ({ children }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "#00000044",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      {children}
    </View>
  );
};

export default Backdrop;
