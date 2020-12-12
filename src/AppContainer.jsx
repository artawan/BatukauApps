import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import Constants from "expo-constants";

// import { increaseCounter, decreaseCounter } from "./utils/actions/";
import useLinking from "./components/navigation/useLinking";
import DrawerNavigation from "./components/DrawerNavigation/DrawerNavigation";

function AppContainer(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          "balinese-family": require("../assets/font/BalineseFamilyNormal.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}

        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          {/* TODO: Topbar Navigator */}

          <DrawerNavigation />

          {/* TODO: Add Bottom Tab Navigator */}
        </NavigationContainer>
      </View>
    );
  }
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
