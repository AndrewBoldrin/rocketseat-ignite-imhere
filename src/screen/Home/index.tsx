import { Text, View } from "react-native";
import { styles } from "../Home/styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 19 de Janeiro de 2023</Text>
    </View>
  );
}
