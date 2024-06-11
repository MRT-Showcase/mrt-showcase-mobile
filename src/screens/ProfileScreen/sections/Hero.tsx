import { Text, View } from "react-native";

const Hero = () => {
  const poin = 100;
  const phone = "+628123456789";
  const email = "rasyidcantrid@gmail.com";

  return (
    <View
      style={{
        backgroundColor: "#0055B8",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 60,
        paddingBottom: 20,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          paddingHorizontal: 14,
        }}
      >
        Profil
      </Text>

      <View
        style={{
          paddingHorizontal: 14,
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 82,
            height: 82,
            backgroundColor: "#AAA0A0",
            borderWidth: 3,
            borderColor: "white",
            borderRadius: 5,
          }}
        ></View>

        <View>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Rasyid
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "white",
            }}
          >
            {phone}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
            }}
          >
            {email}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#F0C401",
          borderRadius: 100,
          flexDirection: "row",
          padding: 14,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Text>Poin Loyalty Kamu</Text>
        <Text
          style={{
            fontWeight: 500,
          }}
        >
          {poin} poin
        </Text>
      </View>
    </View>
  );
};

export default Hero;
