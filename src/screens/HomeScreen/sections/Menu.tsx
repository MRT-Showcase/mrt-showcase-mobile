import {Image, ScrollView, View} from "react-native";
import TitleAndDescription from "../../../components/TitleAndDescription";
import MenuItem from "../../../components/MenuItem";

interface MenuItem {
    title: string;
}

const Menu = () => {
    const items: MenuItem[] = [
        {
            title: "Tiket",
        },
        {
            title: "Jadwal",
        },
        {
            title: "Stasiun",
        },
        {
            title: "Tenant",
        },
        {
            title: "Event",
        },
        {
            title: "Diskon Voucher",
        },
        {
            title: "Podcast",
        },
        {
            title: "Berita",
        },
        {
            title: "TV & Film",
        },
        {
            title: "Lainnya",
        },
    ];

    const menuItemContents = [
        {
            image: require("../../../../assets/menu-mrt/1.png"),
        },
        {
            image: require("../../../../assets/menu-mrt/1.png"),
        },
    ];

    return (
        <View
            style={{
                paddingLeft: 20,
                paddingRight: 20,
                gap: 9,
            }}
        >
            <TitleAndDescription
                title="Menu MyMRTJ"
                description="Nikmati berbagai fitur kami untuk mobilitas & gaya hidup kamu!"
            />

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "space-between",
                }}
            >
                {items.map((item, index) => (
                    <MenuItem title={item.title} key={index}/>
                ))}
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: "row",
                        gap: 14,
                    }}
                >
                    {menuItemContents.map((item, index) => (
                        <Image
                            source={item.image}
                            key={index}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Menu;
