import React from "react";
import {Text, View} from "react-native";
import {AppStackNavigationProp} from "../../navigation/interface";
import OTPInput from "../../components/OTPInput";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRegisterStore} from "../../zustand-store/register";

type Props = {
    navigation: AppStackNavigationProp<"CreatePin">;
};

export const CreatePin: React.FC<Props> = ({navigation}) => {
    let setPin = useRegisterStore((state) => state.setRegisterUserPin);
    const handleCodeFilled = async (code: string) => {
        setPin(code);
        navigation.navigate("ConfirmPin");
    }
    return (
        <SafeAreaView
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
                Buat PIN Kamu
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
            </View>
        </SafeAreaView>
    );
}
