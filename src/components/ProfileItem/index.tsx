import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Item } from "./interface";

interface Props extends Item {}

const ProfileItem: React.FC<Props> = ({ icon, title, description }) => (
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
);

export default ProfileItem;
