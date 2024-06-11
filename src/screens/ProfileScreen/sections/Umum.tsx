import {Text, View} from "react-native";
import {Item} from "../../../components/ProfileItem/interface";
import ProfileItem from "../../../components/ProfileItem";
import {Divider} from "react-native-paper";
import {useDispatch} from "react-redux";
import {setBottomSheet} from "../../../store/slices/bottomSheet";
import {useUserStore} from "../../../zustand-store/user";

const Umum = () => {
    const dispatch = useDispatch();
    const isDyslexic = useUserStore((state) => state.isDyslexic);

    const items: Item[] = [
        {
            icon: require("../../../../assets/language-1.png"),
            title: "Bahasa",
            description: "Pilih Bahasa / Choose Language",
        },
        {
            icon: require("../../../../assets/dyslexia-1.png"),
            title: "Mode Dyslexia",
            description: "Mode ini menyederhanakan tampilan aplikasi",
            onPress: () => {
                dispatch(setBottomSheet("BottomSheetDyslexia"));
            },
        },
        {
            icon: require("../../../../assets/scroll-1.png"),
            title: "Syarat dan Ketentuan",
        },
        {
            icon: require("../../../../assets/padlock-1.png"),
            title: "Kebijakan Privasi",
        },
        {
            icon: require("../../../../assets/smartphone-1.png"),
            title: "Versi Aplikasi",
            description: "4.2.1",
        },
    ];

    return (
        <View
            style={{
                gap: 16,
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                }}
            >
                Menu Profil
            </Text>

            <View
                style={{
                    gap: 13,
                }}
            >
                {items.map(({title, icon, description, onPress}, index) => (
                    <>
                        <ProfileItem
                            icon={icon}
                            title={title}
                            description={description}
                            onPress={onPress}
                            key={index}
                        />
                        {index !== items.length - 1 && <Divider/>}
                        {title == "Mode Dyslexia" && isDyslexic && (
                            <>
                                <ProfileItem
                                    icon={require("../../../../assets/audio-1.png")}
                                    title={"Pembaca Teks"}
                                    description={"Fitur akan membacakan teks pada layar"}
                                    onPress={() => dispatch(setBottomSheet(
                                        "BottomSheetAudio"))}
                                />
                                {index !== items.length - 1 && <Divider/>}
                            </>
                        )}
                    </>
                ))}
            </View>
        </View>
    );
};

export default Umum;
