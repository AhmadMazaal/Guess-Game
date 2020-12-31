import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Card from "../Components/Card";
import Colors from "../constants/colors";

export default function GameOverScreen(props) {
  return (
    <Card style={styles.screen}>
      <Text style={styles.text}>Game Over</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.rounds}>Number of rounds: {props.rounds}</Text>
        </View>
        <View style={styles.restart}>
          <Button title="Restart Game" color={Colors.primary} />
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    height: 150,
    borderRadius: 2,
  },
  text: {
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  rounds: {
    textAlign: "center",
  },
  content: {
    justifyContent: "space-between",
  },
  restart: {
    margin: 15,
  },
});
