import React from "react";
import { View } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/home";
import Game1 from "./views/Game1";

const colores = {
  mainStrong: "#5A1372",
  mainSoft: "#9280AB",
  mainPink: "#FA405C",
  secondary: "#B6A9CB",
  secondarySoft1: "#E9DCFF",
  secondSoft2: "#E9E4F4",
  backgSoft: "#F3F6F9",
  backgStr: "#f0f0f0",
};

const theme = extendTheme({ colores: colores });
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
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Titulo Home" }}
            />
            <Stack.Screen name="Game1" component={Game1} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require("./assets/images.jpg")];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
