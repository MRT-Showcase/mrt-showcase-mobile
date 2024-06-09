import { Image, StyleSheet, Text, View } from "react-native";
import {
  AppStackNavigationProp,
  AppStackParamList,
} from "../../navigation/interface";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/snackbar";

type Props = {
  navigation: AppStackNavigationProp<"SignIn">;
};

const SignIn: React.FC<Props> = ({ navigation }) => {
  const [phone, setPhone] = useState<string>("");
  const dispatch = useDispatch();

  const goToOTPInputPage = () => {
    navigation.navigate("OTP");
  };

  const signIn = () => {
    // TODO: sign in logic

    if (!phone) {
      return dispatch(setMessage("Harap isi field diatas terlebih dahulu."));
    }

    goToOTPInputPage();
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const signInWithGoogle = () => {
    // TODO
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          width: "100%",
        }}
      >
        <Image source={require("../../../assets/icon.png")} />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Masuk dengan akun MyMRTJ
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          gap: 30,
          marginTop: 48,
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            gap: 9,
            width: "100%",
          }}
        >
          <Text>Nomor Handphone</Text>
          <TextInput
            mode="outlined"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={{
              width: "100%",
            }}
          />
        </View>
        <Button
          mode="contained"
          style={{
            borderRadius: 10,
            backgroundColor: "#0055B8",
          }}
          onPress={signIn}
        >
          Masuk
        </Button>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 66,
          marginTop: 48,
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Tidak punya akun?</Text>
          <Button onPress={goToSignUp}>
            <Text style={{ color: "#0055B8" }}>Daftar disini</Text>
          </Button>
        </View>
        <Button
          mode="outlined"
          style={{
            borderRadius: 10,
            width: "100%",
          }}
          icon={require("../../../assets/google.png")}
        >
          <Text
            style={{
              color: "#203474",
              paddingBottom: 20,
              paddingTop: 20,
            }}
          >
            Masuk dengan Google
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
