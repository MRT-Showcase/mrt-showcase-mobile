import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import Backdrop from "../Backdrop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TouchableHighlight } from "react-native";
import { removeBottomSheet } from "../../store/slices/bottomSheet";

const BottomSheetRoot = () => {
  const dispatch = useDispatch();
  const children = useSelector(
    (state: RootState) => state.bottomSheet.children
  );

  const closeBottomSheet = () => dispatch(removeBottomSheet());

  if (children) {
    return (
      <Backdrop>
        <View
          style={{
            backgroundColor: "white",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            width: "100%",
            alignItems: "center",
            paddingTop: 12,
            paddingHorizontal: 24,
            paddingBottom: 20,
            position: "absolute",
            bottom: 0,
            gap: 12,
            maxHeight: "100%",
          }}
        >
          <TouchableHighlight
            underlayColor="transparent"
            onPress={closeBottomSheet}
          >
            <View
              style={{
                borderRadius: 9999,
                width: 55,
                height: 5,
                backgroundColor: "#AAA0A0",
              }}
            ></View>
          </TouchableHighlight>

          <View>{children}</View>
        </View>
      </Backdrop>
    );
  } else {
    return undefined;
  }
};

export default BottomSheetRoot;
