import { Image, ScrollView, View } from "react-native";
import TitleAndDescription from "../../../../components/TitleAndDescription";
import MenuItem from "../../../../components/MenuItem";
import { menuItems } from "../../../../constants/menuItem";
import { useDisplayWidgets } from "../../../../zustand-store/displayWidget";

interface MenuItem {
  title: string;
}

const Menu = () => {
  const displayWidgets = useDisplayWidgets((state) => state.displayWidgets);

  const menuItemContents = [
    {
      image: require("../../../../../assets/menu-mrt/1.png"),
    },
    {
      image: require("../../../../../assets/menu-mrt/1.png"),
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
        isDyslexic
      />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        {displayWidgets.map((item, index) => (
          <MenuItem
            title={item.title}
            key={index}
            id={item.id}
            image={item.image}
          />
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
