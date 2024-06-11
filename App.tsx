import {AppStateStatus, Platform, StyleSheet} from "react-native";
import Navigation from "./src/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {PaperProvider} from "react-native-paper";
import {Provider} from "react-redux";
import store from "./src/store";

import SnackbarRoot from "./src/components/SnackbarRoot";
import BottomSheetRoot from "./src/components/BottomSheetRoot";
import {
    focusManager,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {useOnlineManager} from "./src/hooks/useOnlineManager";
import {useAppState} from "./src/hooks/useAppState";

function onAppStateChange(status: AppStateStatus) {
    // React Query already supports in web browser refetch on window focus by default
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active')
    }
}

const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: 2}},
})


export default function App() {
    useOnlineManager()
    useAppState(onAppStateChange)
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <PaperProvider>
                    <SafeAreaProvider>
                        <Navigation/>
                        <SnackbarRoot/>
                        <BottomSheetRoot/>
                    </SafeAreaProvider>
                </PaperProvider>
            </QueryClientProvider>
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
