import { Image, Text, View } from "react-native";
import { Button, Divider } from "react-native-paper";

const NavigationPick = () => (
  <View
    style={{
      backgroundColor: "white",
      marginTop: 12,
      borderRadius: 25,
    }}
  >
    <View
      style={{
        backgroundColor: "#2073D1",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 38,
          height: 38,
          backgroundColor: "#3680D5",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 9999,
          borderBottomLeftRadius: 0,
        }}
      >
        <Image source={require("../../../../assets/compass.png")} />
      </View>

      <Text
        style={{
          fontSize: 10,
          color: "white",
        }}
      >
        Anda berada 4 km dari Stasiun Cipete Raya
      </Text>
    </View>

    <View
      style={{
        padding: 14,
        gap: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Image source={require("../../../../assets/green-nav-icon.png")} />
          <View
            style={{
              backgroundColor: "#E7E7E7",
              width: 6,
              flexGrow: 1,
              borderRadius: 9999,
            }}
          ></View>
          <Image source={require("../../../../assets/red-nav-icon.png")} />
        </View>

        <View
          style={{
            gap: 14,
            flexGrow: 1,
          }}
        >
          <View
            style={{
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              Dari Stasiun
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              Pilih Stasiun Keberangkatan
            </Text>
          </View>

          <Divider />

          <View
            style={{
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              Dari Stasiun
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              Pilih Stasiun Keberangkatan
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#E6EFF8",
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9999,
          }}
        >
          <Image source={require("../../../../assets/two-arrow.png")} />
        </View>
      </View>

      <Button
        style={{
          backgroundColor: "#46B54C",
          borderRadius: 10,
          height: 43,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Beli Tiket
        </Text>
      </Button>
    </View>
  </View>
);

export default NavigationPick;
