import { Stack } from "expo-router";
// import { createNativeStackNavigator } from "expo-native-stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//TODO: this would make sure fonts are loaded before the splash screen
SplashScreen.preventAutoHideAsync();
const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("We are good man...");
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
  // <createNativeStackNavigator onLayout={onLayoutRootView} />;
};

export default Layout;
