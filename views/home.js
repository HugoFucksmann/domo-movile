import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import GameCard from "../components/gameCard";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {[
        { title: "juego-1", link: "Game1" },
        { title: "juego-2", link: "Game2" },
      ].map((value, i) => (
        <GameCard key={i} cardData={value} navigation={navigation} i={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 500,
  },
});

export default Home;
