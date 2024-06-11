import { Text, View, Image, ImageSourcePropType } from "react-native";
import { Divider } from "react-native-paper";

const BantuanScreen = () => {
  const bantuanItem: {
    icon: ImageSourcePropType;
    title: string;
    description: string;
  }[] = [
    {
      icon: require("../../../assets/info.png"),
      title: "Akun",
      description: "Ubah data akun kamu",
    },
    {
      icon: require("../../../assets/whatsapp.png"),
      title: "Whatsapp",
      description: "Layanan melalui whatsapp official MyMRTJ",
    },
    {
      icon: require("../../../assets/email.png"),
      title: "Email",
      description: "Kirim email kepada MyMRTJ",
    },
    {
      icon: require("../../../assets/call-center.png"),
      title: "Call Center",
      description: "Menghubungi call center kami 1500 332",
    },
    {
      icon: require("../../../assets/warning.png"),
      title: "Lapor MRT",
      description: "Buat aduan terkait kendala penggunaan MyMRTJ",
    },
  ];

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingVertical: 13,
          paddingHorizontal: 16,
          backgroundColor: "#0055B8",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Bantuan
        </Text>
      </View>

      <Image
        source={require("../../../assets/bantuan.png")}
        style={{
          width: "100%",
        }}
      />

      <View
        style={{
          paddingHorizontal: 30,
          gap: 7,
          marginTop: 30,
        }}
      >
        {bantuanItem.map((value) => (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 13,
                }}
              >
                <Image source={value.icon} />

                <View
                  style={{
                    flexShrink: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#203474",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {value.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#203474",
                      flexShrink: 1,
                    }}
                  >
                    {value.description}
                  </Text>
                </View>
              </View>

              <Image source={require("../../../assets/next-page.png")} />
            </View>
            <Divider />
          </>
        ))}
      </View>
    </View>
  );
};

export default BantuanScreen;
