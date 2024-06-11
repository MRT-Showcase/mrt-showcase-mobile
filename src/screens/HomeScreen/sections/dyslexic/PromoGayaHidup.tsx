import { View, Text, ScrollView } from "react-native";
import TitleAndDescription from "../../../../components/TitleAndDescription";
import { Image } from "react-native";

const PromoGayaHidup = () => {
  const gayaHidupContents = [
    {
      image: require("../../../../../assets/promo-gaya-hidup/1.png"),
    },
    {
      image: require("../../../../../assets/promo-gaya-hidup/2.png"),
    },
  ];

  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        gap: 12,
      }}
    >
      <TitleAndDescription
        title="Promo Gaya Hidup"
        description="Tingkatkan gaya hidup kamu lebih baik"
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
          {gayaHidupContents.map((item, index) => (
            <Image
              source={item.image}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PromoGayaHidup;
