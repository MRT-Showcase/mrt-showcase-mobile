import {
    AppStackNavigationProp,
    AppStackParamList
} from "../../navigation/interface";
import {RouteProp} from "@react-navigation/native";
import {ArticleDetail, fetchArticleDetail} from "../../lib/api/article";
import {useQuery} from "@tanstack/react-query";
import React, {useEffect} from "react";
import {useRefreshOnFocus} from "../../hooks/useRefreshOnFocus";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {ActivityIndicator, Appbar, IconButton, Modal} from "react-native-paper";
import customFetch from "../../helper/customFetch";
import {useDispatch} from "react-redux";
import {setMessage} from "../../store/slices/snackbar";

type Props = {
    navigation: AppStackNavigationProp<"DetailBerita">;
    route: RouteProp<AppStackParamList, "DetailBerita">;

}

const DetailBeritaScreen: React.FC<Props> = ({route, navigation}) => {
    let {isPending, error, data, refetch} = useQuery<ArticleDetail, Error>({
        queryKey: ["articleDetail"],
        queryFn: () => fetchArticleDetail({
            id: route.params.id
        }),
    })
    let dispatch = useDispatch();
    let [selection, setSelection] = React.useState<[number, number]>([0, 0]);
    let [isLoading, setIsLoading] = React.useState(false);
    let [synonym, setSynonym] = React.useState<string[] | undefined>(undefined);
    let [synonymModal, setSynonymModal] = React.useState(false);

    function handleSelectionChange(e: any) {
        const {selection: {start, end}} = e.nativeEvent;
        setSelection([start, end]);
    }

    useEffect(() => {
        const fetchSelectedWord = async (selectionInput: [number, number]) => {
            if (selectionInput[0] === selectionInput[1]) {
                return
            }
            let selectedWordInput = data?.content?.substring(selectionInput[0], selectionInput[1]);
            if (!selectedWordInput || selectedWordInput.trim().length === 0) {
                return;
            }
            let splitWord = selectedWordInput.split(" ");

            if (splitWord.length > 2) {
                dispatch(setMessage("Harap masukkan maximal dua kata atau"));
                return
            }

            setIsLoading(true);

            try {
                const response = await customFetch<{
                    source: string;
                    words: {
                        id: string;
                        word: string;
                        createdAt: string;
                        updatedAt: string;
                        synonyms: {
                            id: string;
                            word: string;
                            createdAt: string;
                            updatedAt: string;
                        }[];
                    };
                }>('/synonyms', {
                    method: 'POST',
                    body: JSON.stringify({
                        word: selectedWordInput,
                    }),
                });

                console.log(response);

                setIsLoading(false);

                if (response.data.words?.synonyms && response.data.words?.synonyms?.length > 0) {
                    setSynonym(response.data.words.synonyms.map((item) => item.word));
                    setSynonymModal(true);
                } else {
                    return dispatch(setMessage("Tidak ada sinonim yang" +
                        " ditemukan"));
                }
            } catch (error) {
                console.log(error)
                dispatch(setMessage("Terjadi kesalahan, silahkan coba lagi"));
            }
        }


        if (selection) {
            fetchSelectedWord(selection).then(r => {
            })
        }
    }, [selection])

    useRefreshOnFocus(refetch)
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
                <Appbar.Content title={route.params.title}
                                titleStyle={styles.headerText}/>
            </Appbar.Header>

            <View style={styles.container}>
                <View style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    paddingLeft: 10,
                    paddingRight: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 30,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}>
                    {isPending ? <ActivityIndicator/> : (
                        data && data.content ? (
                            <ScrollView style={{
                                flex: 1,

                            }}>
                                <View style={{
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 20,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 20,
                                    height: "100%",
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        color: "#0055B8"
                                    }}>{data.title}</Text>

                                    <Image
                                        source={{uri: data.headerUrl}}
                                        style={{
                                            width: "100%",
                                            height: 200,
                                            objectFit: "cover",
                                            borderRadius: 10,
                                        }}
                                    />
                                    <TextInput multiline editable={false}
                                               style={{
                                                   color: "black",
                                                   fontSize: 16,
                                               }}
                                               scrollEnabled={false}
                                               onSelectionChange={handleSelectionChange}
                                               selectTextOnFocus={false}
                                               readOnly={true}
                                    >{data.content}</TextInput>
                                    <View style={{height: 250}}/>
                                </View>
                            </ScrollView>

                        ) : (<></>)
                    )}
                </View>
            </View>

            <Modal visible={synonymModal} dismissableBackButton={true}>
                <View style={{
                    backgroundColor: "#0055B8",
                    marginLeft: 20,
                    marginRight: 20,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 20,
                    borderRadius: 10,
                }}>
                    <View
                        style={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            backgroundColor: "#F0C401",
                            borderRadius: 10,

                        }}>
                        <IconButton icon={"close"}
                                    onPress={() => setSynonymModal(false)}
                                    size={10}
                                    iconColor={"white"}
                        />
                    </View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center"
                    }}>Sinonim kata {" "}
                        {data?.content?.substring(selection[0], selection[1])}</Text>
                    <Text style={{
                        fontSize: 16,
                        color: "white",
                        textAlign: "center"
                    }}>{synonym?.join("\n")}</Text>
                </View>

            </Modal>

            <Modal visible={isLoading}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0055B8",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    headerText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        color: "white"
    },
})

export default DetailBeritaScreen;