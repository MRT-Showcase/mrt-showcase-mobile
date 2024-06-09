import { View, Text, ScrollView } from "react-native";
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

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 14,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((value, index) => (
          <View
            key={index}
            style={{
              width: 62,
              height: 62,
              backgroundColor: "red",
              borderRadius: 6,
            }}
          ></View>
        ))}
      </View>
    </ScrollView>
  </View>
);

export default GayaHidup;
