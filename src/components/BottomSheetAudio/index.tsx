import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Button, Switch } from "react-native-paper";
import { useUserStore } from "../../zustand-store/user";
import { removeBottomSheet } from "../../store/slices/bottomSheet";
import { useDispatch } from "react-redux";

const BottomSheetAudio = () => {
  let { isModeSuara } = useUserStore();
  const setIsModeSuara = useUserStore((state) => state.setIsModeSuara);
  const [isModeSuaraState, setIsModeSuaraState] =
    useState<boolean>(isModeSuara);

  const dispatch = useDispatch();

  const closeBottomSheet = () => {
    dispatch(removeBottomSheet());
  };

  const submit = () => {
    setIsModeSuara(isModeSuaraState);
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
          Aktifkan Mode Suara
        </Text>
        <Switch
          value={isModeSuaraState}
          onValueChange={() => setIsModeSuaraState(!isModeSuaraState)}
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

export default BottomSheetAudio;
