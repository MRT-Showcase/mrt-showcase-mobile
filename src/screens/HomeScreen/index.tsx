import {ScrollView, View} from "react-native";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import GayaHidup from "./sections/GayaHidup";
import PromoGayaHidup from "./sections/PromoGayaHidup";
import PromoTiketFeeder from "./sections/PromoTiketFeeder";
import {useUserStore} from "../../zustand-store/user";
import React from "react";
import Berita from "./sections/Berita";
import {AppStackNavigationProp} from "../../navigation/interface";

type Props = {
    navigation: AppStackNavigationProp<"Home">;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
    let {user} = useUserStore();
    return (
        <ScrollView>
            <View
                style={{
                    gap: 30,
                    backgroundColor: "white",
                    paddingBottom: 20,
                }}
            >
                <Hero name={user?.fullName}/>
                <Menu/>
                <GayaHidup/>
                <PromoTiketFeeder/>
                <PromoGayaHidup/>
                <Berita navigation={navigation}/>
            </View>
        </ScrollView>

    );
}

export default HomeScreen;
