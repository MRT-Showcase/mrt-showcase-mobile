import { View, Text, ScrollView, Image } from "react-native";
import TitleAndDescription from "../../../components/TitleAndDescription";
import { gayaHidup } from "../../../constants/gayaHidup";

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
        {gayaHidup.map((value, index) => (
          <Image
            key={index}
            style={{
              width: 62,
              height: 62,
              backgroundColor: "red",
              borderRadius: 6,
            }}
            source={value.image}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);

export default GayaHidup;
