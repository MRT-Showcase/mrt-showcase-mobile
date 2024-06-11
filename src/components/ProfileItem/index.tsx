import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Item } from "./interface";
import { TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/snackbar";

interface Props extends Item {}

const ProfileItem: React.FC<Props> = ({
  icon,
  title,
  description,
  onPress,
}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#00000011"
  >
    <View
      style={{
        flexDirection: "row",
        gap: 22,
        alignItems: "center",
      }}
    >
      <Image source={icon} />

      <View
        style={{
          gap: 3,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={{
              fontWeight: 100,
            }}
          >
            {description}
          </Text>
        )}
      </View>
    </View>
  </TouchableHighlight>
);
export default ProfileItem;
