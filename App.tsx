import { Image, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import { Button, PaperProvider, Switch } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./src/store";
import SnackbarRoot from "./src/components/SnackbarRoot";
import Backdrop from "./src/components/Backdrop";
import BottomSheetRoot from "./src/components/BottomSheetRoot";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Navigation />
          <SnackbarRoot />
          <BottomSheetRoot />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
