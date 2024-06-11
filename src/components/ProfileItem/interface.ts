import { ImageSourcePropType } from "react-native";

export interface Item {
  icon: ImageSourcePropType;
  title: string;
  description?: string;
  onPress?: () => void;
}
