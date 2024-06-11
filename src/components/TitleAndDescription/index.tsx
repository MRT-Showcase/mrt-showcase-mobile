import React from "react";
import {Text, View} from "react-native";
import {
    AppStackNavigationProp,
    AppStackParamList
} from "../../navigation/interface";
import {StackNavigationProp} from "@react-navigation/stack";

type Props = {
    title: string;
    description: string;
    redirect?: (navigation: StackNavigationProp<AppStackParamList, "Home">) => void;
    navigation?: AppStackNavigationProp<"Home">;
};

const TitleAndDescription: React.FC<Props> = ({
                                                  title,
                                                  description,
                                                  redirect,
                                                  navigation
                                              }) => (
    <View
        style={{
            gap: 8,
        }}
    >
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: "bold",
                }}
            >
                {title}
            </Text>

            {redirect && navigation && (
                <Text
                    onPress={() => redirect(navigation)}
                    style={{
                        color: "#0055B8",
                        fontWeight: "bold",
                        fontSize: 12
                    }}
                >
                    Lihat Semua
                </Text>)}
        </View>
        <Text
            style={{
                fontSize: 10,
            }}
        >
            {description}
        </Text>
    </View>
);

export default TitleAndDescription;
