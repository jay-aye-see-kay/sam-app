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

    const asset = lookupId(barcode, assets);

    if (barcode === null) {
      return (
        <BarcodeScanner
          onBarCodeScanned={({ data }) => {
            this.setState({ barcode: data });
          }}
        />
      );
    }

    return (
      <ScrollView style={styles.container}>
        {barcode ? (
          <View>
            <Text>The scanned barcode was</Text>
            <Text>{barcode}</Text>
            <Text />
            <Text>Which is attached represents</Text>
            <Text>{asset ? asset.short_description : "UNKNOWN"}</Text>
          </View>
        ) : (
          <Text>The barcode could not be read</Text>
        )}
        <Button
          title="Scan again"
          onPress={() => {
            this.setState({ barcode: null });
          }}
        />
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
