import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import React from "react";
import {AppStackNavigationProp} from "../../navigation/interface";
import {Appbar} from 'react-native-paper';

type Props = {
    navigation: AppStackNavigationProp<"Berita">;

};

const BeritaScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <Appbar.Header
                style={{
                    backgroundColor: "#0055B8",
                }}
                theme={{colors: {primary: '#0055B8'}}}
                mode={'center-aligned'}
            >
                <Appbar.BackAction
                    onPress={() => {
                        navigation.pop();
                    }}
                    color={'white'}
                />
                <Appbar.Content title="Berita MY MRTJ"
                                titleStyle={styles.headerText}/>

            </Appbar.Header>
            <View style={styles.container}>
                <View style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 30,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}>
                    <ScrollView>
                        <View style={{
                            paddingTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20,
                        }}>

                            <View style={{
                                flexDirection: "column",
                                display: "flex",
                                width: "100%",
                                borderRadius: 10,
                                overflow: "hidden",
                                borderColor: "#E5EDF7",
                                borderWidth: 1,
                            }}>
                                <Image
                                    source={require("../../../assets/menu-mrt/1.png")}
                                    style={{
                                        width: "100%",
                                        height: 150,
                                        objectFit: "cover",
                                    }}
                                />

                                <View style={{
                                    padding: 10,
                                }}>
                                    <Text numberOfLines={2}
                                          ellipsizeMode={"tail"}>
                                        Per 25 Mei, Pembangunan Fase 2A CP
                                        201
                                        Capai
                                        77,36
                                        Persen aslkdjfslkdfjslkfalkjsa
                                    </Text>

                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0055B8",
        height: "100%",
        paddingBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
    },

    headerText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        color: "white"
    },
})

export default BeritaScreen;

