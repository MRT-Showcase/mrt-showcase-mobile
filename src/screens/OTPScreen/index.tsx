import { Text, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import OTPInput from "../../components/OTPInput";
import { AppStackNavigationProp } from "../../navigation/interface";
import React from "react";
import { useUserStore } from "../../zustand-store/user";
import { LoginResponse } from "./interface";
import { User } from "../../zustand-store/type/user";
import customFetch from "../../helper/customFetch";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/snackbar";

type Props = {
  navigation: AppStackNavigationProp<"OTP">;
};

const OTPScreen: React.FC<Props> = ({ navigation }) => {
  const { phoneNumber } = useUserStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const setUser = useUserStore((state) => state.setUser);
  const handleCodeFilled = async (code: string) => {
    if (!phoneNumber) {
      navigation.replace("Login");
    }

    setLoading(true);

    let response = await customFetch<LoginResponse>("/auth/login/pin", {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        pin: code,
      }),
    });

    setLoading(false);

    let user: User = {
      id: response.data.user.id,
      fullName: response.data.user.fullName,
      phoneNumber: response.data.user.phoneNumber,
      token: response.data.token,
      email: response.data.user.email,
    };
    setUser(user);
    navigation.popToTop();
    navigation.navigate("UserTab");
    return dispatch(setMessage(`Sukses login. Halo ${user.fullName}`));
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        position: "relative",
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

      {loading && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
        </View>
      )}

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
