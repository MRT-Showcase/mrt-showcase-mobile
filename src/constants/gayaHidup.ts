import { ImageSourcePropType } from "react-native";

export interface IGayaHidupItem {
  image: ImageSourcePropType;
}

export const gayaHidup: IGayaHidupItem[] = [
  {
    image: require("../../assets/gaya-hidup/we-care.png"),
  },
  {
    image: require("../../assets/gaya-hidup/blu.png"),
  },
  {
    image: require("../../assets/gaya-hidup/easygo.png"),
  },
];
