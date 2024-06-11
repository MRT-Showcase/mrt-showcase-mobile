import {TouchableHighlight, View} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Backdrop from "../Backdrop";
import {RootState} from "../../store";
import {removeBottomSheet} from "../../store/slices/bottomSheet";
import BottomSheetEditWidget from "../BottomSheetEditWidget";
import BottomSheetAudio from "../BottomSheetAudio";
import BottomSheetDyslexia from "../BottomSheetDyslexia";

const BottomSheetRoot = () => {
    const dispatch = useDispatch();
    const componentKey = useSelector(
        (state: RootState) => state.bottomSheet.componentKey
    );

    const closeBottomSheet = () => dispatch(removeBottomSheet());

    let ComponentToRender;
    switch (componentKey) {
        case "BottomSheetEditWidget":
            ComponentToRender = BottomSheetEditWidget;
            break;
        case "BottomSheetAudio":
            ComponentToRender = BottomSheetAudio;
            break;
        case "BottomSheetDyslexia":
            ComponentToRender = BottomSheetDyslexia;
            break;
        // Add other cases as needed
        default:
            ComponentToRender = null;
    }

    if (ComponentToRender) {
        return (
            <Backdrop>
                <View
                    style={{
                        backgroundColor: "white",
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        width: "100%",
                        alignItems: "center",
                        paddingTop: 12,
                        paddingHorizontal: 24,
                        paddingBottom: 20,
                        position: "absolute",
                        bottom: 0,
                        gap: 12,
                        maxHeight: "100%",
                    }}
                >
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={closeBottomSheet}
                    >
                        <View
                            style={{
                                borderRadius: 9999,
                                width: 55,
                                height: 5,
                                backgroundColor: "#AAA0A0",
                            }}
                        ></View>
                    </TouchableHighlight>

                    <View>{ComponentToRender && <ComponentToRender/>}</View>
                </View>
            </Backdrop>
        );
    } else {
        return null;
    }
};

export default BottomSheetRoot;
