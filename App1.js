import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";

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

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
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
