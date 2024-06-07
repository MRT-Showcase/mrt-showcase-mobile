import { Button, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AppStackNavigationProp,
  AppStackParamList,
} from "../../navigation/interface";

type Props = {
  navigation: AppStackNavigationProp<"SignIn">;
};

const SignIn: React.FC<Props> = ({ navigation }) => (
  <View>
    <Button title="Kembali" />
    <Button
      title="Masuk"
      onPress={() => navigation.navigate("Home")}
    />
    <Button
      title="Daftar Disini"
      onPress={() => navigation.navigate("SignUp")}
    />
    <Button
      title="Masuk Dengan Google"
      onPress={() => navigation.navigate("Home")}
    />
  </View>
);

export default SignIn;
