import { Dimensions, Image, Text, View } from "react-native";
import TitleAndDescription from "../../../components/TitleAndDescription";
import Carousel from "react-native-reanimated-carousel";

const PromoTiketFeeder = () => {
  const width = Dimensions.get("window").width;

  const tiketFeederContents = [
    {
      image: require("../../../../assets/tiket-feeder/1.png"),
    },
    {
      image: require("../../../../assets/tiket-feeder/2.png"),
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

      {/* <Carousel
        width={400}
        autoPlay={false}
        data={tiketFeederContents}
        renderItem={({ index }) => (
          <Image source={tiketFeederContents[index].image} />
        )}
      /> */}

      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PromoTiketFeeder;
