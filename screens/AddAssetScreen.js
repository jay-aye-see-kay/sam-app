import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class AddAssetScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Todo</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
