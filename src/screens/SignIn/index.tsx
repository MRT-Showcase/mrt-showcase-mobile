import { Image, Keyboard, StyleSheet, Text, View } from "react-native";
import { AppStackNavigationProp } from "../../navigation/interface";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/snackbar";

type Props = {
    navigation: AppStackNavigationProp<"Login">;
};

const Login: React.FC<Props> = ({ navigation }) => {
    const [phone, setPhone] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<{
        message: string;
        error: boolean;
    } | undefined>();

    const goToOTPInputPage = () => {
        navigation.navigate("OTP");
    };

    const signIn = async () => {
        Keyboard.dismiss();
        if (!phone) {
            setErrorMessage({
                message: "Harap isi nomor telepon diatas terlebih dahulu.",
                error: true,
            });
            return
        }

        setLoading(true);
        let request = await fetch("https://mrtftui-be.fly.dev/auth/validate", {
            method: "POST",
            body: JSON.stringify({
                phoneNumber: phone,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setLoading(false)
        let json = (await request.json()) as {
            data: {
                isPhoneNumberValid: boolean;
            }
            message: string;
            statusCode: number;
            success: boolean;
        };

        console.log(json);

        if (!json.success) {
            setErrorMessage({
                message: "Nomor telepon tidak valid. Silahkan registrasi",
                error: true,
            });
            return
        }

        if (!json.data.isPhoneNumberValid) {
            setErrorMessage({
                message: "Nomor telepon tidak valid. Silahkan registrasi",
                error: true,
            });
            return
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../../assets/icon.png")} />
                <Text style={styles.headerText}>Masuk dengan akun MyMRTJ</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <Text>Nomor Handphone</Text>
                    <View style={styles.phoneInputContainer}>
                        <Text style={styles.phonePrefix}>+62</Text>
                        <TextInput
                            mode="outlined"
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            outlineColor={"#E5EDF7"}
                            outlineStyle={
                                {
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 9,
                                }
                            }
                            placeholder="81213180037"
                            placeholderTextColor={"#E5EDF7"}
                            error={errorMessage?.error}
                        />
                    </View>
                    {errorMessage?.error && (
                        <Text style={styles.errorText}>{errorMessage.message}</Text>
                    )}
                </View>
                <Button mode="contained" style={styles.signInButton} onPress={signIn} loading={loading}>
                    Masuk
                </Button>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerTextContainer}>
                    <Text>Tidak punya akun?</Text>
                    <Button onPress={goToSignUp}>
                        <Text style={styles.signUpText}>Daftar disini</Text>
                    </Button>
                </View>
                <Button
                    mode="outlined"
                    style={styles.googleButton}
                    icon={require("../../../assets/google.png")}
                >
                    <Text style={styles.googleButtonText}>Masuk dengan Google</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        width: "100%",
    },
    headerText: {
        fontWeight: "bold",
        textAlign: "center",
    },
    inputContainer: {
        display: "flex",
        gap: 30,
        marginTop: 48,
        width: "100%",
    },
    inputField: {
        display: "flex",
        gap: 9,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    phoneInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: "space-between",
    },
    phonePrefix: {
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E5EDF7",
        padding: 16,
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
        borderColor: "#E5EDF7",
        borderRadius: 10,
        backgroundColor: "transparent",
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
    signInButton: {
        borderRadius: 10,
        backgroundColor: "#0055B8",
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        gap: 66,
        marginTop: 48,
        width: "100%",
    },
    footerTextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    signUpText: {
        color: "#0055B8",
    },
    googleButton: {
        borderRadius: 10,
        width: "100%",
    },
    googleButtonText: {
        color: "#203474",
        paddingBottom: 20,
        paddingTop: 20,
    },
});

export default Login;
