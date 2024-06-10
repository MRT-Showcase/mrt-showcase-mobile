import {Text, View} from "react-native";
import {Button} from "react-native-paper";
import OTPInput from "../../components/OTPInput";
import {AppStackNavigationProp} from "../../navigation/interface";
import React from "react";
import {useUserStore} from "../../zustand-store/user";
import {LoginResponse} from "./interface";
import {User} from "../../zustand-store/type/user";

type Props = {
    navigation: AppStackNavigationProp<"OTP">;
};

const OTPScreen: React.FC<Props> = ({navigation}) => {
    const {phoneNumber} = useUserStore()
    const setUser = useUserStore((state) => state.setUser);
    const handleCodeFilled = async (code: string) => {

        if (!phoneNumber) {
            navigation.replace("Login");
        }


        let request = await fetch("https://mrtftui-be.fly.dev/auth/login/pin", {
            method: "POST",
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                pin: code,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let response = await request.json() as LoginResponse;
        
        let user: User = {
            id: response.data.user.id,
            fullName: response.data.user.fullName,
            phoneNumber: response.data.user.phoneNumber,
            token: response.data.token,
        }
        setUser(user);
        navigation.popToTop()
    };

    return (
        <View
            style={{
                backgroundColor: "#fff",
                height: "100%",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                position: 'relative',
                gap: 42,
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                }}
            >
                Masukkan PIN Kamu
            </Text>

            <OTPInput
                length={6}
                onCodeFilled={handleCodeFilled}
            />

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Lupa PIN Anda?</Text>
                <Button>
                    <Text
                        style={{
                            color: "#0055B8",
                            fontWeight: "bold",
                        }}
                    >
                        Reset PIN
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default OTPScreen;
