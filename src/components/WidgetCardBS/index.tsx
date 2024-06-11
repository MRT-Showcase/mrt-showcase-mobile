import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import {useDisplayWidgetsStore} from "../../zustand-store/displayWidget";
import {useDispatch} from "react-redux";
import {removeBottomSheet} from "../../store/slices/bottomSheet";
import {setMessage} from "../../store/slices/snackbar";

interface Props {
    title: string;
    image: ImageSourcePropType;
    itemId: number;
}

const WidgetCardBS = ({title, image, itemId}: Props) => {
    const replaceWidget = useDisplayWidgetsStore((state) => state.replaceWidget);
    const targetId = useDisplayWidgetsStore((state) => state.targetId);
    const dispatch = useDispatch();

    const submitReplace = () => {
        if (targetId != undefined) {
            replaceWidget(targetId, itemId);
            dispatch(setMessage("Success!"));
        } else {
            dispatch(setMessage("Failed to change widget."));
        }

        dispatch(removeBottomSheet());
    };

    return (
        <TouchableOpacity onPress={submitReplace}>
            <View
                style={{
                    borderColor: "#000000EE",
                    borderRadius: 20,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 180,
                    height: 250,
                    // backgroundColor: "yellow",
                }}
            >
                <Image
                    source={image}
                    style={{
                        width: 136,
                        height: 153,
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default WidgetCardBS;
