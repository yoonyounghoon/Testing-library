import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Untitled</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    alignItems: "center",
  },
});
