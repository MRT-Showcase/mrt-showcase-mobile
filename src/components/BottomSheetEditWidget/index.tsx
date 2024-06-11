import { View, Text, FlatList } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import WidgetCardBS from "../WidgetCardBS";
import { menuItems } from "../../constants/menuItem";

const BottomSheetEditWidget = () => {
  // const menuItemsMapped = menuItems.map((value, index, array) => {
  //   const isLast = index === array.length - 1;

  //   if (isLast) {
  //     return [value];
  //   } else {
  //     return [value, array[index + 1]];
  //   }
  // });

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          mode="outlined"
          style={{
            flexGrow: 1,
            width: "100%",
          }}
          placeholder="Cari Widget"
          outlineColor="#00000044"
          activeOutlineColor="#00000044"
        />
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {menuItems.map(({ title, image }, index) => (
          <WidgetCardBS
            title={title}
            image={image}
            key={index}
          />
        ))}
      </View> */}
      <FlatList
        contentContainerStyle={{
          // backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          gap: 10, // For horizontal gap
        }}
        numColumns={2}
        data={menuItems}
        renderItem={({ item }) => (
          <WidgetCardBS
            image={item.image}
            title={item.title}
            itemId={item.id}
          />
        )}
      />
    </View>
  );
};

export default BottomSheetEditWidget;
