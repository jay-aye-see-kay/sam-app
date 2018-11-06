import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class AssetCard extends React.Component {
  render() {
    const { asset } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.col}>
          <Text style={{ fontWeight: "bold" }}>#{asset.id}</Text>
          <Text>{`Description: ${asset.short_description || ""}`}</Text>
          <Text>{`Barcode: ${asset.barcode || "UNKNOWN"}`}</Text>
        </View>
        <View style={styles.col}>
          <Text>{`Type: ${(asset.asset_type && asset.asset_type.name) ||
            "UNKNOWN"}`}</Text>
          <Text>{`Brand: ${(asset.brand && asset.brand.name) ||
            "UNKNOWN"}`}</Text>
          <Text>{`Location: ${(asset.location && asset.location.name) ||
            "UNKNOWN"}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 12,
    marginTop: 0,
    padding: 12,
    backgroundColor: "#fafafa",
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  col: {
    flex: 1,
    flexDirection: "column",
  },
});
