import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import TitleAndDescription from "../../../../components/TitleAndDescription";

const PromoTiketFeeder = () => {
  const tiketFeederContents = [
    {
      image: require("../../../../../assets/tiket-feeder/1.png"),
    },
    {
      image: require("../../../../../assets/tiket-feeder/2.png"),
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
        title="Promo Tiket & Feeder"
        description="Untuk perjalanan lebih hemat dan mudah"
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
          {tiketFeederContents.map((item, index) => (
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

export default PromoTiketFeeder;
