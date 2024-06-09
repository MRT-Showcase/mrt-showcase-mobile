import { View, Text } from "react-native";
import TitleAndDescription from "../../../components/TitleAndDescription";

const GayaHidup = () => (
  <View
    style={{
      paddingLeft: 20,
      paddingRight: 20,
      gap: 12,
    }}
  >
    <TitleAndDescription
      title="Gaya Hidup"
      description="Penuhi gaya hidupmu bersama mitra MyMRTJ!"
    />

    <View
      style={{
        flexDirection: "row",
        gap: 14,
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <View
          style={{
            width: 62,
            height: 62,
            backgroundColor: "red",
            borderRadius: 6,
          }}
        ></View>
      ))}
    </View>
  </View>
);

export default GayaHidup;
