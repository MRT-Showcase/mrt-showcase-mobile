import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button, Switch } from "react-native-paper";
import { useDispatch } from "react-redux";
import { removeBottomSheet } from "../../store/slices/bottomSheet";
import { TouchableOpacity } from "react-native";

const BottomSheetDyslexia = () => {
  const [isDyslexic, setIsDyslexic] = useState<boolean>(false);

  const dispatch = useDispatch();

  const closeBottomSheet = () => {
    dispatch(removeBottomSheet());
  };

  const submit = () => {
    // TODO: set dyslexia logic here

    closeBottomSheet();
  };

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Mode Disleksia
        </Text>
        <TouchableOpacity onPress={closeBottomSheet}>
          <Image source={require("../../../assets/cross.png")} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#00000044",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Aktifkan Mode Disleksia
        </Text>
        <Switch
          value={isDyslexic}
          onValueChange={() => setIsDyslexic(!isDyslexic)}
          color="#0055B8"
        />
      </View>

      <Button
        style={{
          backgroundColor: "#0055B8",
          borderRadius: 5,
          paddingVertical: 8,
        }}
        onPress={submit}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Submit
        </Text>
      </Button>
    </View>
  );
};

export default BottomSheetDyslexia;
