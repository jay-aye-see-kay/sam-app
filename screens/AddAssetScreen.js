import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  TextInput,
  Picker,
} from "react-native";

import BarcodeScanner from "../components/BarcodeScanner";

export default class AddAssetScreen extends React.Component {
  state = {
    short_description: "",
    barcode: "",
    assetType: null,
    brand: null,
    location: null,
    scannerOpen: false,
  };

  handleAddAsset = () => {
    const {
      short_description,
      barcode,
      assetType,
      brand,
      location,
    } = this.state;
    const { addAsset } = this.props;
    addAsset({
      short_description,
      barcode,
      asset_type: assetType,
      brand,
      location,
    });
  };

  showBarcodeScanner = () => {
    this.setState({ scannerOpen: true });
  };

  render() {
    const { scannerOpen, assetType, brand, location, barcode } = this.state;
    const { assetTypes, brands, locations } = this.props;

    if (scannerOpen) {
      return (
        <BarcodeScanner
          onBarCodeScanned={({ data }) => {
            this.setState({ barcode: data, scannerOpen: false });
          }}
          onClose={() => this.setState({ scannerOpen: false })}
        />
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={{ margin: 24, marginTop: 12 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={short_description =>
              this.setState({ short_description })
            }
          />
          <Button title="Scan barcode" onPress={this.showBarcodeScanner} />
          <TextInput
            value={barcode}
            style={styles.textInput}
            placeholder="Barcode"
            onChangeText={barcode => this.setState({ barcode })}
          />
          <Picker
            selectedValue={assetType}
            style={styles.pickerInput}
            onValueChange={itemValue => this.setState({ assetType: itemValue })}
          >
            {[{ id: null, name: "---" }, ...assetTypes].map(type => (
              <Picker.Item label={type.name} value={type.id} key={type.id} />
            ))}
          </Picker>
          <Picker
            selectedValue={brand}
            style={styles.pickerInput}
            onValueChange={itemValue => this.setState({ brand: itemValue })}
          >
            {[{ id: null, name: "---" }, ...brands].map(type => (
              <Picker.Item label={type.name} value={type.id} key={type.id} />
            ))}
          </Picker>
          <Picker
            selectedValue={location}
            style={styles.pickerInput}
            onValueChange={itemValue => this.setState({ location: itemValue })}
          >
            {[{ id: null, name: "---" }, ...locations].map(type => (
              <Picker.Item label={type.name} value={type.id} key={type.id} />
            ))}
          </Picker>
          <Button title="Add asset" onPress={this.handleAddAsset} />
        </View>
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
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    padding: 6,
    margin: 6,
    fontSize: 18,
  },
  pickerInput: {},
});
