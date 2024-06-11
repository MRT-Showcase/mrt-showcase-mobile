import {Platform, StyleSheet, Text, View} from "react-native";
import {AppStackNavigationProp} from "../../navigation/interface";
import {Button, Checkbox, TextInput} from "react-native-paper";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRegisterStore} from "../../zustand-store/register";
import customFetch from "../../helper/customFetch";


type Props = {
    navigation: AppStackNavigationProp<"Register">;
};
const Register: React.FC<Props> = ({navigation}) => {
    const [phone, setPhone] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [agreed, setAgreed] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<{
        phoneNumber: string | undefined;
        email: string | undefined;
        fullName: string | undefined;
        agreed: string | undefined;
        error: boolean;
        globalError: string | undefined;
    } | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    const setRegisterUser = useRegisterStore((state) => state.setRegisterUser);

    const handleRegister = async () => {
        let hasError = false;
        const errors: {
            phoneNumber: string | undefined;
            email: string | undefined;
            fullName: string | undefined;
            agreed: string | undefined;
            error: boolean;
            globalError: string | undefined;
        } = {
            phoneNumber: undefined,
            email: undefined,
            fullName: undefined,
            agreed: undefined,
            error: false,
            globalError: undefined,
        };


        if (!phone) {
            errors.phoneNumber = "Masukkan nomor telepon.";
            hasError = true;
        }

        if (!email) {
            errors.email = "Masukkan email.";
            hasError = true;
        }

        if (!fullName) {
            errors.fullName = "Masukkan nama lengkap.";
            hasError = true;
        }

        if (!agreed) {
            errors.agreed = "Harap menyetujui syarat dan ketentuan dari MRT-J";
            hasError = true;
        }

        if (hasError) {
            errors.error = true;
            setErrorMessage(errors);
            return;
        }

        setLoading(true);
        let json = await customFetch<{
            isUserAlreadyExists: boolean;
            message: string
        }>("/auth/validate-user", {
            method: "POST",
            body: JSON.stringify({
                phoneNumber: phone,
                email
            }),
        });

        setLoading(false)
        
        if (json.data.isUserAlreadyExists) {
            errors.globalError = json.data.message;
            hasError = true;
        }

        if (hasError) {
            setErrorMessage(errors);
            return;
        }

        setErrorMessage(undefined);

        setRegisterUser({
            phoneNumber: phone,
            email,
            fullName,
        });
        navigation.navigate("CreatePin");
        return;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Lengkapi Data Kamu</Text>

            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                position: "relative",
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    position: "relative",
                    gap: 10,
                }}>
                    <Text style={{
                        fontWeight: "bold",
                    }}>Nomor Handphone</Text>
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
                    {errorMessage?.phoneNumber && (
                        <Text
                            style={styles.errorText}>{errorMessage.phoneNumber}</Text>
                    )}
                </View>

            </View>

            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                position: "relative",
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    position: "relative",
                    gap: 10,
                }}>
                    <Text style={{
                        fontWeight: "bold",
                    }}>Nama Lengkap</Text>
                    <View style={styles.phoneInputContainer}>
                        <TextInput
                            mode="outlined"
                            value={fullName}
                            onChangeText={setFullName}
                            style={styles.textInput}
                            keyboardType="default"
                            outlineColor={"#E5EDF7"}
                            outlineStyle={
                                {
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 9,
                                }
                            }
                            placeholder="Nama Lengkap"
                            placeholderTextColor={"#E5EDF7"}
                            error={errorMessage?.error}
                        />
                    </View>
                    {errorMessage?.fullName && (
                        <Text
                            style={styles.errorText}>{errorMessage.fullName}</Text>
                    )}

                </View>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                position: "relative",
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    position: "relative",
                    gap: 10,
                }}>
                    <Text style={{
                        fontWeight: "bold",
                    }}>Email</Text>
                    <View style={styles.phoneInputContainer}>
                        <TextInput
                            mode="outlined"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.textInput}
                            keyboardType="email-address"
                            outlineColor={"#E5EDF7"}
                            outlineStyle={
                                {
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 9,
                                }
                            }
                            placeholder="example@mail.com"
                            placeholderTextColor={"#E5EDF7"}
                            error={errorMessage?.error}
                        />
                    </View>
                    {errorMessage?.email && (
                        <Text
                            style={styles.errorText}>{errorMessage.email}</Text>
                    )}

                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4
                }}>
                    {Platform.OS === "ios" ? (
                            <View
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    transform: [{scale: 0.8}],

                                }}
                            >
                                <Checkbox.IOS
                                    status={agreed ? 'checked' : 'unchecked'}
                                    onPress={() => setAgreed(!agreed)}
                                    color={'blue'}

                                />
                            </View>
                        ) :
                        <View
                            style={{
                                transform: [{scale: 0.8}],
                            }}>
                            <Checkbox status={agreed ? 'checked' : 'unchecked'}
                                      onPress={() => setAgreed(!agreed)}
                                      uncheckedColor={'#E5EDF7'}
                                      color={'blue'}

                            />
                        </View>

                    }


                    <Text style={{
                        fontSize: 12,
                        color: `${errorMessage?.agreed ? "red" : "black"}`,

                    }}> Saya menyetujui syarat dan ketentuan dari
                        MRT-J</Text>
                </View>

            </View>

            {errorMessage?.globalError && (
                <Text style={styles.errorText}>{errorMessage.globalError}</Text>
            )}

            <Button mode="contained" style={styles.registerButton}
                    onPress={handleRegister} loading={loading}>
                Berikutnya
            </Button>

        </SafeAreaView>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,

    },

    headerText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
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
    registerButton: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#0055B8",
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
});


export default Register;
