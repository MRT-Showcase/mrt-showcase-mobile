import { Alert, Text, View } from "react-native";
import { Button } from "react-native-paper";
import OTPInput from "../../components/OTPInput";
import { AppStackNavigationProp } from "../../navigation/interface";
import React from "react";

type Props = {
  navigation: AppStackNavigationProp<"OTP">;
};

const OTPScreen: React.FC<Props> = ({ navigation }) => {
  const handleCodeFilled = (code: string) => {
      navigation.popToTop()
      navigation.replace("Home");
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
