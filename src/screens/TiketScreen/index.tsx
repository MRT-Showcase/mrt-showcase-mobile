import {Image, StatusBar, Text, View} from "react-native";
import {Button} from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";

const TiketScreen = () => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: "white",
                height: "100%",
            }}
        >
            <StatusBar barStyle="dark-content"/>
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
                    Tiket
                </Text>
                <Image source={require("../../../assets/refresh.png")}/>
            </View>

            <View
                style={{
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15,
                }}
            >
                <Image source={require("../../../assets/tiket-2.png")}/>
                <Text
                    style={{
                        color: "#203474",
                        fontSize: 32,
                        fontWeight: "bold",
                    }}
                >
                    Tidak ada tiket aktif
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: "#203474",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    Untuk dapat menggunakan tiket kamu perlu membelinya terlebih
                    dahulu.
                </Text>
                <Button
                    style={{
                        backgroundColor: "#46B54C",
                        borderRadius: 10,
                        paddingVertical: 12,
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: "bold",
                            color: "white",
                        }}
                    >
                        Beli Tiket
                    </Text>
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default TiketScreen;
