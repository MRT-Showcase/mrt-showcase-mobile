import {Image, Text, View} from "react-native";
import NavigationPick from "./NavigationPick";

const Hero = ({
                  name
              }: {
    name: string | null | undefined;
}) => {
    const poin: number = 100;
    const isDyslexic: boolean = false;

    return (
        <View
            style={{
                backgroundColor: "#0055B8",
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 60,
                paddingBottom: 20,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        gap: 9,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        {name ? `Halo, ${name}` : `Selamat datang Teman MRT`}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "white",
                        }}
                    >
                        Mau kemana kita hari ini?
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 12,
                    }}
                >
                    <Image
                        source={require("../../../../assets/registered-user.png")}/>
                    <Image
                        source={require("../../../../assets/notification-button.png")}
                    />
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

            <NavigationPick/>
        </View>
    );
};

export default Hero;
