import {FlatList, View} from "react-native";
import React from "react";
import {TextInput} from "react-native-paper";
import WidgetCardBS from "../WidgetCardBS";
import {menuItems} from "../../constants/menuItem";
import {SafeAreaView} from "react-native-safe-area-context";

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
        <SafeAreaView
            style={{
                width: "100%",
                height: "100%",
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
                        borderColor: "#E5EDF7",
                        borderRadius: 10,
                        backgroundColor: "transparent",
                        width: "100%",
                        height: 40,
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
                    gap: 20,
                }}

                numColumns={2}
                data={menuItems}
                renderItem={({item}) => (
                    <WidgetCardBS
                        image={item.image}
                        title={item.title}
                        itemId={item.id}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default BottomSheetEditWidget;
