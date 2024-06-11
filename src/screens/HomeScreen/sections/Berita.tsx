import {Image, ScrollView, Text, View} from "react-native";
import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {useQuery} from "@tanstack/react-query";
import {ActivityIndicator} from "react-native-paper";
import {
    AppStackNavigationProp,
    AppStackParamList
} from "../../../navigation/interface";
import {ArticleList, fetchArticleList} from "../../../lib/api/article";
import {useRefreshOnFocus} from "../../../hooks/useRefreshOnFocus";
import TitleAndDescription from "../../../components/TitleAndDescription";

type props = {
    navigation: AppStackNavigationProp<"Home">;
};

const Berita: React.FC<props> = ({navigation}) => {

    let {isPending, error, data, refetch} = useQuery<ArticleList[], Error>({
        queryKey: ["articleList"],
        queryFn: fetchArticleList,
    })

    useRefreshOnFocus(refetch)

    const handleRedirect = (
        navigation: StackNavigationProp<AppStackParamList>
    ) => {
        navigation.navigate("Berita");
    };

    return (
        <View
            style={{
                paddingLeft: 20,
                paddingRight: 20,
                gap: 12,
            }}
        >
            <TitleAndDescription
                title={"Berita MyMRTJ"}
                description={
                    "Buat" + " kamu yang ingin tau informasi terbaru tentang MRT"
                }
                redirect={handleRedirect}
                navigation={navigation}
            />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        gap: 14,
                        borderRadius: 10,
                        overflow: "hidden",
                        borderColor: "#E5EDF7",
                        borderWidth: 1,
                    }}
                >
                    {
                        isPending ? <ActivityIndicator/> : (
                            data && data.length > 0 && !error ? (
                                data.map((item, index) => (
                                    <View style={{
                                        flexDirection: "column",
                                        display: "flex",
                                        width: 250,
                                        gap: 14,
                                        borderRadius: 10,
                                        overflow: "hidden",
                                        borderColor: "#E5EDF7",
                                        borderWidth: 1,
                                    }} key={index}>
                                        <Image
                                            source={
                                                {uri: item.headerUrl}
                                            }
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
                                                {item.title}
                                            </Text>

                                        </View>

                                    </View>))
                            ) : (
                                <Text>Tidak ada berita yang
                                    tersedia</Text>
                            )
                        )
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default Berita;
