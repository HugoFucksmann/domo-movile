import { View, Text, Box, Pressable, PresenceTransition } from "native-base";
import { StyleSheet } from "react-native";

//revisar click card

const GameCard = ({ navigation, cardData, i }) => {
  return (
    <PresenceTransition
      visible={true}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250,
        },
        transition: {
          delay: 100 * i,
        },
      }}
      style={styles.CardContent}
    >
      <Pressable
        alignSelf="center"
        onPress={() => navigation.navigate(cardData.link)}
      >
        <Text style={{ fontFamily: "Poppins" }}>{cardData.title}</Text>
      </Pressable>
    </PresenceTransition>
  );
};

const styles = StyleSheet.create({
  CardContent: {
    width: "90%",
    height: 140,
    marginBottom: 40,
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
});

export default GameCard;
