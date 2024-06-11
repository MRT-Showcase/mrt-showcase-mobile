import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    useWindowDimensions,
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

    let {width} = useWindowDimensions();

    return (
        <TouchableOpacity onPress={submitReplace}
                          style={{
                              overflow: "hidden",
                              borderColor: "#000000EE",
                              borderRadius: 20,
                              borderWidth: 1,
                              flexDirection: "column",
                              gap: 30,
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                              marginLeft: 5,
                              marginRight: 5,
                          }}
        >
            <View
                style={{
                    alignItems: "center",
                    gap: 10,
                    width: (width / 2) - (width * 0.1),
                    height: 200,
                }}
            >
                <Image
                    source={image}
                    style={{
                        width: "100%",
                        height: 150,
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
