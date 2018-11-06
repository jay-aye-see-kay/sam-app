import React from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";

import BarcodeScanner from "../components/BarcodeScanner";
import AssetCard from "../components/AssetCard";

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
        <View style={{ margin: 24, marginTop: 12 }}>
          <Button
            title="Scan again"
            onPress={() => {
              this.setState({ barcode: null });
            }}
          />
        </View>
        {barcode ? (
          <View>
            <View style={{ margin: 24, marginTop: 12 }}>
              <Text>The scanned barcode was</Text>
              <Text>{barcode}</Text>
            </View>
            <View>
              {asset ? (
                <AssetCard asset={asset} />
              ) : (
                <Text>The barcode did not match anything in the database</Text>
              )}
            </View>
          </View>
        ) : (
          <Text>The barcode could not be read</Text>
        )}
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
