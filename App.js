import React from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/home";
import Game1 from "./views/Game1";
import AppProvider from "./context/appContext";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <AppProvider>
        <NavigationContainer>
          <NativeBaseProvider>
            <Stack.Navigator
              screenOptions={{
                headerTransparent: true,
                headerShadowVisible: false,
                headerBackTitleVisible: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{
                  title: null,
                }}
                name="Game1"
                component={Game1}
              />
            </Stack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </AppProvider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require("./assets/fondo/fondo1.jpg"),
      require("./assets/logo/logo1.png"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
