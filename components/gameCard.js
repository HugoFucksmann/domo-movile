import { View, Text, Box } from "native-base";
import { StyleSheet } from "react-native";

const GameCard = ({ navigation, cardData }) => {
  console.log("navigation", navigation.navigate);
  return (
    <Box alignSelf="center" style={styles.CardContent}>
      <Text
        onPress={() => navigation.navigate(cardData.link)}
        style={{ fontFamily: "Poppins" }}
      >
        {cardData.title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  CardContent: {
    width: "90%",
    height: 160,
    marginBottom: 40,
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default GameCard;
