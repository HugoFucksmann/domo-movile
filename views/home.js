import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import GameCard from "../components/gameCard";
import fondo1 from "../assets/fondo/fondo2.jpg";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={fondo1}
      resizeMode="cover"
    >
      {[
        { title: "juego-1", link: "Game1" },
        { title: "juego-2", link: "Game2" },
        { title: "juego-3", link: "Game3" },
      ].map((value, i) => (
        <GameCard key={i} cardData={value} navigation={navigation} i={i} />
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  divContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Home;
