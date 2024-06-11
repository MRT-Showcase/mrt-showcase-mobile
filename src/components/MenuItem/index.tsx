import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useUserStore } from "../../zustand-store/user";
import { setBottomSheet } from "../../store/slices/bottomSheet";
import BottomSheetEditWidget from "../BottomSheetEditWidget";
import { useDisplayWidgetsStore } from "../../zustand-store/displayWidget";

type Props = {
  title: string;
  image: ImageSourcePropType;
  id: number;
};

const MenuItem: React.FC<Props> = ({ title, image, id }) => {
  const editMode = useSelector(
    (state: RootState) => state.homeDyslexic.editMode
  );
  const isDyslexic = useUserStore((state) => state.isDyslexic);
  const dispatch = useDispatch();
  const setTargetId = useDisplayWidgetsStore((state) => state.setTargetId);

  const showAllWidgetsModal = () => {
    setTargetId(id);
    dispatch(setBottomSheet(<BottomSheetEditWidget />));
  };

  return (
    <View
      style={{
        alignItems: "center",
        gap: 2,
      }}
    >
      <Image
        source={image}
        style={{
          width: isDyslexic ? 112 : 79,
          height: isDyslexic ? 134 : 80,
        }}
      />
      {editMode && isDyslexic && (
        <TouchableOpacity
          onPress={showAllWidgetsModal}
          style={{
            position: "absolute",
            right: -5,
            top: -5,
          }}
        >
          <View
            style={{
              backgroundColor: "#46B54C",
              borderRadius: 5,
              width: 25,
              height: 25,
            }}
          >
            <Image source={require("../../../assets/replace.png")} />
          </View>
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: isDyslexic ? 18 : 9,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default MenuItem;
