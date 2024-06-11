import React from "react";
import { Keyboard, Text, View } from "react-native";
import { AppStackNavigationProp } from "../../navigation/interface";
import OTPInput from "../../components/OTPInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterStore } from "../../zustand-store/register";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/snackbar";
import customFetch from "../../helper/customFetch";
import { User } from "../../zustand-store/type/user";
import { ActivityIndicator } from "react-native-paper";

type Props = {
  navigation: AppStackNavigationProp<"ConfirmPin">;
};

export const ConfirmPin: React.FC<Props> = ({ navigation }) => {
  let { registerUser } = useRegisterStore();
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false); // Loading state
  let dispatch = useDispatch();

  const handleCodeFilled = async (code: string) => {
    Keyboard.dismiss();
    setLoading(true); // Start loading

    if (registerUser) {
      if (registerUser.pin !== code) {
        setLoading(false); // Stop loading on error
        setError("PIN tidak sama");
        navigation.replace("CreatePin");
        return dispatch(setMessage("PIN tidak sama silahkan masukkan kembali"));
      }
    }

    if (!registerUser) {
      setLoading(false); // Stop loading on error
      navigation.replace("Register");
      return dispatch(
        setMessage("Terjadi kesahalan, silahkan register kembali")
      );
    }

    let json = await customFetch<User>("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: registerUser.phoneNumber,
        email: registerUser.email,
        pin: code,
        fullName: registerUser.fullName,
      }),
    });

    setLoading(false); // Stop loading after fetch

    if (!json.success) {
      navigation.replace("UserTab");
      return dispatch(setMessage(json.message));
    }

    navigation.popToTop();
    navigation.replace("Login");
    return dispatch(setMessage("Berhasil mendaftar, silahkan login"));
  };

  return (
    <SafeAreaView
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
        Konfirmasi PIN Kamu
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
        {error && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
    </SafeAreaView>
  );
};
