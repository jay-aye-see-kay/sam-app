import React from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";

import BarcodeScanner from "../components/BarcodeScanner";

const lookupId = (barcode, assets) =>
  Object.values(assets).find(asset => asset.barcode === barcode);

export default class SearchScreen extends React.Component {
  state = {
    barcode: null,
  };

  render() {
    const { barcode } = this.state;
    const { assets } = this.props;

    if (barcode === null) {
      return (
        <BarcodeScanner
          onBarCodeScanned={({ data }) => {
            this.setState({ barcode: data });
          }}
        />
      );
    } else if (!barcode) {
      return (
        <View>
          <Text>The barcode could not be read</Text>
          <Button
            title="Try again"
            onPress={() => {
              this.setState({ barcode: null });
            }}
          />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Text>The scanned barcode was</Text>
        <Text>{barcode}</Text>
        <Text />
        <Text>Which is attached represents</Text>
        <Text>{lookupId(barcode, assets).short_description}</Text>
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
