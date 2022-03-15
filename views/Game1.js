import { View, Text, Center } from "native-base";
import { StyleSheet } from "react-native";
import { VStack } from "native-base";
import colores from "../theme/colores";

const Game1 = () => {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Center style={styles.viewPregunta}>
        <Center rounded="lg" style={styles.cardPreg} shadow={3}>
          Esta es la primer pregunta, seleccione la respuesta correcta, Cual es
          ?
        </Center>
      </Center>
      <VStack space={6} alignItems="center" style={styles.viewResp}>
        <Center w="64" h="20" bg="#e8e8e8" rounded="md" shadow={3}>
          esta es la primer respuesta
        </Center>
        <Center w="64" h="20" bg="#e8e8e8" rounded="md" shadow={3}>
          esta es la segunda respuesta
        </Center>
        <Center w="64" h="20" bg="#e8e8e8" rounded="md" shadow={3}>
          esta seria la tercer respuesta
        </Center>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPregunta: {
    height: 250,
    backgroundColor: "purple",
    borderBottomLeftRadius: "10%",
    borderBottomRightRadius: "10%",
  },
  viewResp: {
    height: "70%",
    zIndex: -30,
    marginTop: 100,
    padding: 25,
  },
  cardPreg: {
    height: 150,
    width: "94%",
    backgroundColor: colores.secondary,
    marginTop: 250,
    //borderRadius: 15,
    textAlign: "center",
    padding: 20,
  },
});

export default Game1;
